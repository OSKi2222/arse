/**
 * Formulaire de contact — connecté côté client mais aucune donnée n'est
 * transmise pour l'instant (demande explicite : pas d'envoi tant qu'un
 * vrai service n'est pas branché). Le formulaire se comporte comme s'il
 * fonctionnait (validation, état de chargement, message de confirmation)
 * pour que l'expérience soit testable de bout en bout, sans risquer
 * d'envoyer de faux messages à un compte Formspree une fois configuré.
 *
 * Pour activer l'envoi réel une fois l'endpoint Formspree (ou équivalent)
 * disponible : décommenter le bloc `fetch(...)` ci-dessous et retirer le
 * `await sleep(...)` de simulation.
 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (!form) return;

  const submitBtn = form.querySelector<HTMLButtonElement>("[data-submit-btn]");
  const submitLabel = submitBtn?.querySelector("[data-submit-label]");
  const statusEl = form.querySelector<HTMLElement>("[data-form-status]");
  const sendingText = form.dataset.sendingText ?? "…";
  const successText = form.dataset.successText ?? "OK";
  const originalLabel = submitLabel?.textContent ?? "";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    submitBtn?.setAttribute("disabled", "true");
    if (submitLabel) submitLabel.textContent = sendingText;
    if (statusEl) {
      statusEl.textContent = "";
      statusEl.classList.add("hidden");
    }

    // Simule une latence réseau réaliste plutôt qu'un retour instantané,
    // pour que l'état "envoi en cours" soit visible et testable.
    await sleep(900);

    // --- Envoi réel désactivé volontairement --------------------------
    // const data = new FormData(form);
    // await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
    // --------------------------------------------------------------------

    if (submitLabel) submitLabel.textContent = originalLabel;
    submitBtn?.removeAttribute("disabled");
    if (statusEl) {
      statusEl.textContent = successText;
      statusEl.classList.remove("hidden");
    }
    form.reset();
  });
}
