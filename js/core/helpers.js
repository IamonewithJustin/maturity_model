import { phases } from "../data/phases.js";
import { mindsets } from "../data/mindsets.js";
import { state } from "./state.js";

const UNDERLINED_PHRASES = [
  "to help deliver outcomes",
  "be my best self",
  "empower others and have accountability to peers",
  "empower others  and have accountability to peers",
  "I am courageous",
  "co-create",
  "be able to play to win",
  "necessity to maintain a competitive advantage",
  "enable positive business outcomes",
  "continuous improvement",
  "serve as a resource for others",
  "enable efficiencies",
  "champion the use of digital tools",
  "building healthy workplace partnerships",
  "aim to create a safe and supportive environment",
  "reinforce agility and resilience in an ever-evolving workplace",
  "self-aware",
  "hold myself accountable",
  "incorporate empathy and cultural context",
  "hold others accountable",
  "create an organization whose success is built on trust",
  "enable organizational resilience",
  "understand context",
  "understand the difference between outcomes and outputs",
  "Ask for context",
  "ask for context to clarify intent",
  "Reach out to others to broaden your understanding",
  "Reach out to others to broaden understanding",
  "Communicate innovation initiatives often and broadly",
  "Seek feedback",
  "Provide continuing support",
  "innovation is a continual process",
  "Recognize positive contributions",
  "Value workplace diversity",
  "Take care of yourself and others",
  "Ask for feedback",
  "Practice being receptive",
  "Provide clear, specific, and actionable feedback",
  "Be intentional and empathetic",
  "Adjust feedback to suit different personalities",
  "Act as a role model",
  "Coach others",
  "Connect people"
].sort((a, b) => b.length - a.length);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function applyUnderlineEmphasis(text) {
  if (!text) return text;

  let result = text;
  UNDERLINED_PHRASES.forEach((phrase) => {
    const regex = new RegExp(escapeRegExp(phrase), "gi");
    result = result.replace(regex, (match) => `<u>${match}</u>`);
  });
  return result;
}

export function getMindset(id) {
  return mindsets.find((mindset) => mindset.id === id);
}

export function getCurrentPhase() {
  return phases.find((phase) => phase.id === state.selectedPhase);
}

export function createListItems(items) {
  return items.map((item) => `<li>${applyUnderlineEmphasis(item)}</li>`).join("");
}

export function getPhaseAccent(phaseId) {
  const accents = { 1: "#6f8da8", 2: "#0b86cf", 3: "#2aaa41", 4: "#ff8a13", 5: "#0d2f6e" };
  return accents[phaseId] || "#0b86cf";
}

export function getOwnOutcomePhaseSummary(phaseId) {
  const outerMindsets = mindsets.filter((mindset) => mindset.id !== "own");
  const snippets = outerMindsets.map((mindset) => mindset.phases[phaseId].statement);
  return `Owning the outcome at this phase means combining the model's outer mindsets: ${snippets.join(" ")}`;
}
