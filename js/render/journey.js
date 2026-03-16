import { journeySteps } from "../data/journey.js";
import { state } from "../core/state.js";

export function renderJourney() {
  const panel = document.getElementById("journey-panel");

  if (!state.journeyActive) {
    panel.classList.remove("is-visible");
    return;
  }

  panel.classList.add("is-visible");
  const step = journeySteps[state.journeyStep];

  document.getElementById("journey-title").textContent = step.title;
  document.getElementById("journey-text").textContent = step.text;
  document.getElementById("journey-step-num").textContent = String(state.journeyStep + 1);

  const backBtn = document.getElementById("journey-back");
  backBtn.style.visibility = state.journeyStep === 0 ? "hidden" : "visible";

  const nextBtn = document.getElementById("journey-next");
  nextBtn.textContent = state.journeyStep === journeySteps.length - 1 ? "Finish" : "Next";

  document.getElementById("journey-dots").innerHTML = journeySteps
    .map((_, i) => {
      let cls = "journey-dot";
      if (i === state.journeyStep) cls += " is-active";
      else if (i < state.journeyStep) cls += " is-completed";
      return `<span class="${cls}"></span>`;
    })
    .join("");
}
