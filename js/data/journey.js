export const journeySteps = [
  {
    title: "Welcome to the Explorer",
    text: "This interactive tool helps you explore the Culture Mindset Maturity Model. It breaks down four key mindsets across five maturity phases, with practical Do and Don't behaviors at each level. Let's take a quick tour.",
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  },
  {
    title: "The Maturity Wheel",
    text: "The wheel above shows the four mindsets. 'Own the Outcome' sits at the center as the umbrella mindset. The three outer segments — Clarity, Innovation, and Trust — are the practical levers teams use to grow. Click any segment to explore it.",
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  },
  {
    title: "Own the Outcome",
    text: "This central mindset represents the overarching goal. At each maturity phase, it combines insights from all three outer mindsets. The cards below show what owning the outcome looks like at the current phase.",
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  },
  {
    title: "Strive for Clarity",
    text: "Clarity is about aligning work with the bigger picture. Notice the mindset statement, focused PACE values, and the Do/Don't behavior cards. These change as you move through maturity phases.",
    state: { mode: "explore", selectedMindset: "clarity", selectedPhase: 1 }
  },
  {
    title: "Deliver through Innovation",
    text: "Innovation focuses on improving outcomes through digital capability. Each phase builds on the previous one — from awareness of digital tools to championing innovation across the organization.",
    state: { mode: "explore", selectedMindset: "innovation", selectedPhase: 2 }
  },
  {
    title: "Build Trust and Resilience",
    text: "Trust is about creating safe, accountable relationships. At the early phases it focuses on empathy and transparency. At advanced phases it shifts to coaching others and building organizational resilience.",
    state: { mode: "explore", selectedMindset: "trust", selectedPhase: 3 }
  },
  {
    title: "Phase Progression",
    text: "Use the phase selector on the left to move through the five maturity levels: Awareness, Adoption, Integration, Optimization, and Transformation. Watch how the behaviors evolve from basic understanding to systemic leadership.",
    state: { mode: "explore", selectedMindset: "clarity", selectedPhase: 4 }
  },
  {
    title: "Compare Mode",
    text: "Switch to Compare mode to see behaviors side-by-side. You can compare one phase across all mindsets, or one mindset across all five phases. This view is useful for workshops and coaching conversations.",
    state: { mode: "compare", selectedMindset: "clarity", selectedPhase: 1, compareMode: "mindsets" }
  },
  {
    title: "You're Ready to Explore",
    text: "That's the tour! Use the wheel, phase selector, and mode toggles to explore at your own pace. Every combination of mindset and phase has specific guidance to help teams grow.",
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  }
];
