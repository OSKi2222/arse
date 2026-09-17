import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import { syncHeaderLinks } from "./headerSync";

gsap.registerPlugin(ScrollTrigger);

// Évite que ScrollTrigger recalcule tout à chaque apparition/disparition
// de la barre d'URL sur mobile — principale source de saccades.
ScrollTrigger.config({ ignoreMobileResize: true });
// NB : pas de `force3D` en défaut global — il polluerait les tweens d'objets
// simples (compteurs) qui n'ont pas de plugin CSS pour le consommer.
gsap.defaults({ ease: "power3.out" });

let lenis: Lenis;

function initLenis() {
  lenis = new Lenis({
    // lerp donne un amorti plus naturel que duration : chaque frame
    // rattrape 9% de la distance restante.
    lerp: 0.09,
    smoothWheel: true,
    syncTouch: false, // le scroll natif reste plus fluide sur mobile
    wheelMultiplier: 1,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ------------------------------------------------------------------ */
/* Animations liées au scroll                                          */
/* ------------------------------------------------------------------ */

/**
 * Sépare des cibles celles déjà visibles à l'écran au moment où on les
 * initialise (page interne courte, section déjà dans le viewport au
 * chargement) : `ScrollTrigger`/`.batch` avec `once:true` ne déclenche
 * `onEnter` QUE sur une transition franchie/non-franchie → franchie,
 * jamais rétroactivement pour une condition déjà vraie à la création. Sans
 * ce tri, ces éléments restent bloqués à l'état initial (invisible) pour
 * toujours. Même piège que celui déjà rencontré (et corrigé séparément)
 * sur le compteur du hero.
 */
function splitAlreadyVisible(targets: HTMLElement[], thresholdRatio: number) {
  const threshold = window.innerHeight * thresholdRatio;
  const visible: HTMLElement[] = [];
  const pending: HTMLElement[] = [];
  targets.forEach((el) => {
    (el.getBoundingClientRect().top < threshold ? visible : pending).push(el);
  });
  return { visible, pending };
}

/**
 * Reveal générique. ScrollTrigger.batch regroupe les éléments visibles
 * dans une même frame : un seul trigger pour N éléments au lieu de N
 * triggers, ce qui allège nettement le scroll.
 */
function initScrollReveals() {
  const items = gsap.utils.toArray<HTMLElement>("[data-reveal] [data-reveal-item]");
  const standalone = gsap.utils
    .toArray<HTMLElement>("[data-reveal]")
    .filter((el) => !el.querySelector("[data-reveal-item]"));
  const targets = [...items, ...standalone];
  if (!targets.length) return;

  // Déclenché à "top 72%" plutôt que "85%" (bord du viewport) : le
  // contenu est déjà bien visible/lisible quand l'animation joue, au
  // lieu d'être terminée avant que l'œil n'y arrive sur un scroll fluide.
  gsap.set(targets, { autoAlpha: 0, y: 56 });

  const { visible, pending } = splitAlreadyVisible(targets, 0.72);
  if (visible.length) gsap.to(visible, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.09, overwrite: true });
  if (!pending.length) return;

  ScrollTrigger.batch(pending, {
    start: "top 72%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.09,
        overwrite: true,
      }),
  });
}

/** Cartes qui montent en cascade (actualités, bento). */
function initCardStack() {
  const cards = gsap.utils.toArray<HTMLElement>("[data-stack-item]");
  if (!cards.length) return;

  gsap.set(cards, { autoAlpha: 0, y: 76, scale: 0.95 });

  const { visible, pending } = splitAlreadyVisible(cards, 0.75);
  if (visible.length) gsap.to(visible, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.08, overwrite: true });
  if (!pending.length) return;

  ScrollTrigger.batch(pending, {
    start: "top 75%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        overwrite: true,
      }),
  });
}

/**
 * Texte révélé mot par mot, indexé sur la position de scroll.
 * Le découpage se fait une seule fois (flag data-split).
 */
function initTextScrub() {
  document.querySelectorAll<HTMLElement>("[data-scrub-text]").forEach((el) => {
    if (!el.dataset.split) {
      el.innerHTML = (el.textContent ?? "")
        .split(/(\s+)/)
        .map((w) => (w.trim() ? `<span class="scrub-word inline-block">${w}</span>` : w))
        .join("");
      el.dataset.split = "true";
    }
    const words = el.querySelectorAll(".scrub-word");
    gsap.fromTo(
      words,
      { opacity: 0.12 },
      {
        opacity: 1,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          end: "bottom 50%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      },
    );
  });
}

/** Parallaxe d'image : le visuel se déplace plus lentement que la page. */
function initParallax() {
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
    const depth = Number(img.dataset.parallax || 12);
    gsap.fromTo(
      img,
      { yPercent: -depth },
      {
        yPercent: depth,
        ease: "none",
        scrollTrigger: {
          trigger: img.closest(".parallax-frame") ?? img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
  });
}

/**
 * Galerie à défilement horizontal, pilotée par le scroll vertical, avec
 * reveal de chaque panneau au moment où il entre par la droite.
 *
 * Le reveal ne crée AUCUN déclencheur supplémentaire : il est piloté par
 * le `onUpdate` du pin, en testant simplement la position horizontale de
 * chaque panneau. L'approche `containerAnimation` de GSAP a été essayée
 * puis écartée — ses déclencheurs sont positionnés dans le repère du
 * conteneur (axe horizontal) et faussaient le recalcul de tous les
 * déclencheurs verticaux situés plus bas dans la page, qui se
 * déclenchaient alors ~2000px hors écran.
 */
function initHorizontalScroll() {
  // En arabe, `dir="rtl"` retourne déjà l'ordre visuel des panneaux via
  // flexbox (le premier panneau du DOM s'affiche à droite). Le tween
  // horizontal doit alors avancer vers +X (et non -X) pour dévoiler la
  // suite dans le bon sens de lecture.
  const isRTL = document.documentElement.dir === "rtl";

  document.querySelectorAll<HTMLElement>("[data-h-scroll]").forEach((section) => {
    const track = section.querySelector<HTMLElement>("[data-h-track]");
    if (!track) return;

    const getDistance = () => track.scrollWidth - section.offsetWidth;
    const panels = gsap.utils.toArray<HTMLElement>("[data-h-panel]", track);
    const revealed = new WeakSet<HTMLElement>();

    gsap.set(panels, { autoAlpha: 0, y: 64, scale: 0.94 });

    // Condition de visibilité symétrique (pas "left < X" figé sur un
    // sens) : un panneau se révèle dès qu'une part significative de sa
    // largeur est dans le viewport, qu'il arrive par la droite (LTR) ou
    // par la gauche (RTL).
    const revealVisiblePanels = () => {
      panels.forEach((panel) => {
        if (revealed.has(panel)) return;
        const r = panel.getBoundingClientRect();
        const visibleWidth = Math.min(r.right, window.innerWidth) - Math.max(r.left, 0);
        if (visibleWidth < r.width * 0.15) return;
        revealed.add(panel);
        gsap.to(panel, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" });
      });
    };

    gsap.to(track, {
      x: () => (isRTL ? getDistance() : -getDistance()),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getDistance()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: revealVisiblePanels,
        onEnter: revealVisiblePanels,
        onEnterBack: revealVisiblePanels,
      },
    });

    // Les panneaux déjà à l'écran se dévoilent à l'arrivée de la section,
    // avant même que l'épinglage ne commence.
    //
    // Volontairement un IntersectionObserver et non un ScrollTrigger : un
    // second ScrollTrigger visant le MÊME élément que le pin perturbe la
    // prise en compte du pin-spacer, et décale alors tous les
    // déclencheurs des sections situées plus bas dans la page.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        revealVisiblePanels();
        observer.disconnect();
      },
      { threshold: 0.25 },
    );
    observer.observe(section);
  });
}

/** Compteurs chiffrés, déclenchés à l'entrée dans le viewport. */
function initCounters() {
  document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
    const target = Number(el.dataset.target ?? "0");
    const decimals = Number(el.dataset.decimals ?? "0");
    const obj = { val: 0 };

    const run = (delay = 0) =>
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        delay,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = obj.val.toLocaleString("fr-FR", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          });
        },
      });

    // Déjà visible au chargement (compteur du hero) : on lance directement,
    // ScrollTrigger ne déclenchant pas d'onEnter rétroactif.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      run(0.9);
      return;
    }

    ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => run() });
  });
}

/* ------------------------------------------------------------------ */
/* Animations d'entrée (au chargement)                                 */
/* ------------------------------------------------------------------ */

/** Ouverture cinématique du hero : image qui se dévoile + titre ligne par ligne. */
function initHeroIntro() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;

  const media = hero.querySelector<HTMLElement>("[data-hero-media]");
  const lines = hero.querySelectorAll<HTMLElement>(".hero-line-inner");
  const footer = hero.querySelector<HTMLElement>("[data-hero-footer]");
  const kicker = hero.querySelector<HTMLElement>("[data-hero-kicker]");

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  if (media) {
    tl.fromTo(
      media,
      { clipPath: "inset(18% 12% 18% 12% round 2rem)", scale: 1.25 },
      { clipPath: "inset(0% 0% 0% 0% round 0rem)", scale: 1, duration: 1.6 },
    );
  }
  if (kicker) tl.fromTo(kicker, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=1.1");
  if (lines.length) tl.fromTo(lines, { yPercent: 112 }, { yPercent: 0, duration: 1.15, stagger: 0.09 }, "-=0.95");
  if (footer) tl.fromTo(footer, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.7");
}

/** Trace l'onde SVG comme un signal électrique. */
function initWaveDraw() {
  document.querySelectorAll<SVGPathElement>("[data-wave-path]").forEach((path) => {
    const length = path.getTotalLength();
    gsap.fromTo(
      path,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 2.8, ease: "power2.inOut", delay: 0.3 },
    );
  });
}

/* ------------------------------------------------------------------ */
/* Interactions pointeur                                               */
/* ------------------------------------------------------------------ */

/** Tilt 3D amorti sur [data-tilt]. */
function initTilt() {
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
    const rotateX = gsap.quickTo(card, "rotateX", { duration: 0.6, ease: "power3.out" });
    const rotateY = gsap.quickTo(card, "rotateY", { duration: 0.6, ease: "power3.out" });

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      rotateY(((e.clientX - rect.left) / rect.width - 0.5) * 14);
      rotateX(((e.clientY - rect.top) / rect.height - 0.5) * -14);
    });
    card.addEventListener("mouseleave", () => {
      rotateX(0);
      rotateY(0);
    });
  });
}

/** Boutons magnétiques : le bouton suit légèrement le curseur. */
function initMagnetic() {
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      xTo((e.clientX - rect.left - rect.width / 2) * 0.35);
      yTo((e.clientY - rect.top - rect.height / 2) * 0.35);
    });
    el.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/** Halo lumineux qui suit le curseur dans le hero. */
function initSpotlight() {
  document.querySelectorAll<HTMLElement>("[data-hero-spotlight]").forEach((spot) => {
    const section = spot.closest<HTMLElement>("[data-hero]");
    if (!section) return;

    const xTo = gsap.quickTo(spot, "--x", { duration: 0.5, ease: "power2.out" });
    const yTo = gsap.quickTo(spot, "--y", { duration: 0.5, ease: "power2.out" });

    section.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect();
      xTo(e.clientX - rect.left);
      yTo(e.clientY - rect.top);
      gsap.to(spot, { autoAlpha: 1, duration: 0.4, overwrite: "auto" });
    });
    section.addEventListener("mouseleave", () => {
      gsap.to(spot, { autoAlpha: 0, duration: 0.5, overwrite: "auto" });
    });
  });
}

/**
 * Fondu d'apparition sur chaque image : évite l'effet "pop" quand une
 * image lazy termine son téléchargement en plein scroll.
 */
function initImageFades() {
  document.querySelectorAll<HTMLImageElement>("img:not([data-no-fade])").forEach((img) => {
    if (img.dataset.fadeBound) return;
    img.dataset.fadeBound = "true";

    const reveal = () => gsap.to(img, { opacity: 1, duration: 0.5, ease: "power2.out", overwrite: "auto" });

    if (img.complete && img.naturalWidth > 0) {
      gsap.set(img, { opacity: 1 });
      return;
    }
    gsap.set(img, { opacity: 0 });
    img.addEventListener("load", reveal, { once: true });
    img.addEventListener("error", () => gsap.set(img, { opacity: 1 }), { once: true });
  });
}

/** Barre de progression de lecture en haut de page. */
function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>("#scroll-progress");
  if (!bar) return;
  gsap.to(bar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
  });
}

/* ------------------------------------------------------------------ */
/* Orchestration                                                       */
/* ------------------------------------------------------------------ */

let mm: gsap.MatchMedia | null = null;

function initPage() {
  mm?.revert();
  ScrollTrigger.getAll().forEach((st) => st.kill());

  mm = gsap.matchMedia();

  initImageFades();

  // IMPORTANT — le défilement horizontal doit être créé EN PREMIER.
  // Il épingle sa section, ce qui insère un "pin-spacer" allongeant le
  // document de ~2000px. Tous les déclencheurs créés avant lui gardent
  // des positions calculées sans ce décalage : les sections situées plus
  // bas s'animaient alors très en dessous du viewport, donc invisibles.
  //
  // Actif à toutes les tailles (y compris mobile) : le pin donne le même
  // effet "galerie qui défile pendant que la section reste épinglée" au
  // toucher qu'à la souris. Testé au geste tactile réel (pas seulement à
  // la molette) : Lenis (`syncTouch:false`) laisse le scroll tactile
  // natif piloter la page, et ScrollTrigger suit correctement.
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    initHorizontalScroll();
  });

  // Mouvement complet
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    initHeroIntro();
    initWaveDraw();
    initScrollReveals();
    initCardStack();
    initTextScrub();
    initParallax();
    initCounters();
    initScrollProgress();
    initTilt();
    initMagnetic();
    initSpotlight();
  });

  // Accessibilité : tout est visible immédiatement, sans mouvement.
  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set("[data-reveal-item], [data-stack-item], [data-hero-footer], [data-hero-kicker]", {
      autoAlpha: 1,
      y: 0,
      scale: 1,
    });
    gsap.set(".hero-line-inner", { yPercent: 0 });
    initCounters();
  });

  // Trie les déclencheurs dans l'ordre du document avant le recalcul :
  // indispensable dès qu'une section épinglée (qui décale tout ce qui la
  // suit) coexiste avec des déclencheurs classiques. Sans ce tri, les
  // sections situées sous la galerie horizontale s'animent ~2000px trop
  // bas — donc hors écran, et le contenu paraît déjà figé à l'arrivée.
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
}

/**
 * Recalcule les positions de ScrollTrigger si la hauteur du document
 * change après le premier rendu (essentiellement un filet de sécurité :
 * toutes les images ont un ratio réservé en CSS, et la police charge en
 * `font-display: optional` — donc rien ne devrait plus bouger après coup).
 *
 * Un `refresh()` déclenché PENDANT qu'un pin est actif peut le faire
 * sauter (GSAP recalcule sa géométrie en repartant de l'état non-pinné) :
 * on attend donc qu'aucun pin ne soit engagé avant de rafraîchir.
 */
function watchLayoutShifts() {
  let raf = 0;
  const refresh = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const pinActive = ScrollTrigger.getAll().some((st) => st.isActive);
      if (pinActive) {
        raf = requestAnimationFrame(refresh);
        return;
      }
      ScrollTrigger.refresh();
    });
  };

  const observer = new ResizeObserver(refresh);
  observer.observe(document.body);

  window.addEventListener("load", refresh);

  return observer;
}

export function initMotion() {
  initLenis();
  watchLayoutShifts();

  const swup = new Swup({
    containers: ["#swup"],
    plugins: [new SwupHeadPlugin(), new SwupPreloadPlugin()],
    // Le Header (dont le sélecteur de langue) vit hors de #swup et ne
    // serait donc jamais reconstruit dans l'autre langue par une
    // navigation SPA : les liens marqués data-no-swup rechargent la
    // page entièrement à la place.
    ignoreVisit: (_url, { el } = {}) => !!el?.closest("[data-no-swup]"),
  });

  swup.hooks.on("content:replace", () => {
    lenis.scrollTo(0, { immediate: true });
  });

  swup.hooks.on("page:view", () => {
    initPage();
    syncHeaderLinks();
  });

  initPage();
  syncHeaderLinks();
}
