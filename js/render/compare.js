import { mindsets } from "../data/mindsets.js";
import { phases } from "../data/phases.js";
import { compareCardTemplate, compareGrid, compareTitle } from "../core/dom.js";
import {
  createListItems,
  getCurrentPhase,
  getMindset,
  getOwnOutcomePhaseSummary,
  getPhaseAccent
} from "../core/helpers.js";
import { state } from "../core/state.js";

export function renderCompareView() {
  const phase = getCurrentPhase();
  const mindset = getMindset(state.selectedMindset);
  compareGrid.innerHTML = "";

  if (state.compareMode === "mindsets") {
    compareTitle.textContent = `${phase.name} across the model`;

    mindsets
      .filter((entry) => entry.id !== "own")
      .forEach((entry) => {
        const details = entry.phases[phase.id];
        const card = compareCardTemplate.content.firstElementChild.cloneNode(true);
        card.style.borderTop = `6px solid ${entry.color}`;
        card.querySelector(".compare-card__title").textContent = entry.label;
        card.querySelector(".compare-card__phase").textContent = phase.badge;
        card.querySelector(".compare-card__statement").textContent = details.statement;
        card.querySelector(".compare-card__list--do").innerHTML = createListItems(details.do);
        card.querySelector(".compare-card__list--dont").innerHTML = createListItems(details.dont);
        compareGrid.appendChild(card);
      });

    return;
  }

  compareTitle.textContent = `${mindset.label} across all five phases`;

  phases.forEach((entry) => {
    const card = compareCardTemplate.content.firstElementChild.cloneNode(true);
    card.classList.add("phase-card");
    card.style.setProperty("--phase-accent", getPhaseAccent(entry.id));
    card.querySelector(".compare-card__title").textContent = entry.name;
    card.querySelector(".compare-card__phase").textContent = entry.badge;

    if (mindset.id === "own") {
      card.querySelector(".compare-card__statement").textContent = getOwnOutcomePhaseSummary(entry.id);
      card.querySelector(".compare-card__list--do").innerHTML = createListItems([
        "Use the three outer mindsets together to coach progress at this phase.",
        "Look for visible team behaviors rather than abstract agreement.",
        "Translate maturity into clearer outcomes, better decisions, and stronger collaboration."
      ]);
      card.querySelector(".compare-card__list--dont").innerHTML = createListItems([
        "Expect all three outer mindsets to mature at the same pace.",
        "Treat the center of the model as separate from the surrounding behaviors."
      ]);
    } else {
      const details = mindset.phases[entry.id];
      card.querySelector(".compare-card__statement").textContent = details.statement;
      card.querySelector(".compare-card__list--do").innerHTML = createListItems(details.do);
      card.querySelector(".compare-card__list--dont").innerHTML = createListItems(details.dont);
    }

    compareGrid.appendChild(card);
  });
}
