import { gsap } from "gsap";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function openMenuAnim(el: HTMLElement) {
  el.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  const links = el.querySelectorAll(".js-menu-link");

  if (reducedMotion) {
    gsap.set(el, { clipPath: "inset(0 0 0% 0)" });
    gsap.set(links, { opacity: 1, y: 0 });
    return;
  }
  gsap.set(el, { clipPath: "inset(0 0 100% 0)" });
  gsap.set(links, { opacity: 0, y: 24 });
  const tl = gsap.timeline();
  tl.to(el, { clipPath: "inset(0 0 0% 0)", duration: 0.65, ease: "power4.inOut" });
  tl.to(links, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }, "-=0.3");
}

function closeMenuAnim(el: HTMLElement) {
  document.body.style.overflow = "";
  if (reducedMotion) {
    gsap.set(el, { clipPath: "inset(0 0 100% 0)" });
    el.classList.add("hidden");
    return;
  }
  gsap.to(el, {
    clipPath: "inset(0 0 100% 0)",
    duration: 0.45,
    ease: "power3.in",
    onComplete: () => el.classList.add("hidden"),
  });
}

function setActiveItem(overlay: HTMLElement, key: string) {
  overlay.querySelectorAll<HTMLElement>(".js-menu-link").forEach((link) => {
    const isActive = link.dataset.navKey === key;
    link.classList.toggle("text-white", isActive);
    link.classList.toggle("underline", isActive);
    link.classList.toggle("underline-offset-8", isActive);
    link.classList.toggle("decoration-arse-yellow", isActive);
    link.classList.toggle("decoration-2", isActive);
    link.classList.toggle("text-white/35", !isActive);
  });

  overlay.querySelectorAll<HTMLElement>("[data-nav-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.navPanel !== key);
  });

  overlay.querySelectorAll<HTMLElement>("[data-nav-image]").forEach((img) => {
    img.classList.toggle("opacity-0", img.dataset.navImage !== key);
    img.classList.toggle("opacity-60", img.dataset.navImage === key);
  });

  const label = overlay.querySelector<HTMLElement>("[data-active-label]");
  const activeLink = overlay.querySelector<HTMLElement>(`.js-menu-link[data-nav-key="${key}"]`);
  if (label && activeLink) label.textContent = activeLink.textContent?.trim() ?? "";
}

export function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>("#menu-toggle");
  const closeBtn = document.querySelector<HTMLButtonElement>("#menu-close");
  const overlay = document.querySelector<HTMLElement>("#menu-overlay");
  if (!toggle || !overlay) return;

  const open = () => {
    openMenuAnim(overlay);
    toggle.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    closeMenuAnim(overlay);
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) close();
  });

  overlay.querySelectorAll<HTMLElement>(".js-menu-link").forEach((link) => {
    const key = link.dataset.navKey;
    if (!key) return;
    link.addEventListener("mouseenter", () => setActiveItem(overlay, key));
    link.addEventListener("focus", () => setActiveItem(overlay, key));
    link.addEventListener("click", close);
  });

  overlay.querySelectorAll<HTMLElement>("[data-nav-panel] a").forEach((link) => {
    link.addEventListener("click", close);
  });
}
