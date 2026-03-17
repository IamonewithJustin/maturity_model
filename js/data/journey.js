export const journeySteps = [
  {
    id: "overview-read-the-model",
    chapter: "How to Use This Tour",
    title: "Read the model as progression",
    subLabel: "Overview",
    text:
      "This guided tour walks through every phase of every mindset so you can see how cultural maturity grows. Watch how the language moves from personal awareness to influence across teams and the organization.",
    whatChangesNow:
      "Across the whole model, progression follows a consistent arc: understand, apply, align, challenge, and shape.",
    reflectionPrompt:
      "As you move through the tour, ask where the work is centered: on yourself, on your team, or on the broader system.",
    target: ["hero", "journey-start"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  },
  {
    id: "overview-culture-wheel",
    chapter: "How to Use This Tour",
    title: "Start with the culture wheel",
    subLabel: "Overview",
    text:
      "Own the Outcome sits at the center as the umbrella mindset. The three outer mindsets show the practical ways progress becomes visible: clarity, innovation, and trust and resilience.",
    whatChangesNow:
      "The center tells you what the three outer mindsets mean when they are working together at the same phase.",
    reflectionPrompt:
      "Notice that the outer mindsets are distinct, but all of them contribute to stronger outcomes.",
    target: ["wheel", "own-panel"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  },
  {
    id: "overview-five-phases",
    chapter: "How to Use This Tour",
    title: "The five phases tell one story",
    subLabel: "Awareness -> Transformation",
    text:
      "Phase 1 starts with recognition. Phase 2 turns intent into action. Phase 3 makes behaviors reliable. Phase 4 uses judgment and courage to improve the system. Phase 5 shapes the organization more broadly.",
    whatChangesNow:
      "The phases are not just labels. Each one adds scope, responsibility, and better judgment.",
    reflectionPrompt:
      "As you progress through each mindset, focus on what new responsibility appears between one phase and the next.",
    target: ["phase-panel"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  },
  {
    id: "clarity-phase-1",
    chapter: "Strive for Clarity",
    title: "Clarity begins with context",
    subLabel: "Phase 1 of 5 | Awareness",
    text:
      "At Awareness, clarity means treating context as part of your job. The language focuses on seeking out and sharing information so outcomes make sense, rather than working only from task instructions.",
    whatChangesNow:
      "Progress starts when you stop seeing context as optional and begin asking what the work is for.",
    reflectionPrompt:
      "Look for early behaviors like asking questions, listening for business context, and learning the difference between outputs and outcomes.",
    target: ["phase-panel", "mindset-panel", "mindset-statement", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "clarity", selectedPhase: 1 }
  },
  {
    id: "clarity-phase-2",
    chapter: "Strive for Clarity",
    title: "Clarity becomes visible in your voice",
    subLabel: "Phase 2 of 5 | Adoption",
    text:
      "At Adoption, the mindset shifts from understanding context yourself to speaking up so others can understand it too. Clarity starts to show up in conversations, not just in personal awareness.",
    whatChangesNow:
      "The new responsibility is shared understanding: you bring context into the room and help others get what they need.",
    reflectionPrompt:
      "Notice how the Do behaviors now center on sharing context and guiding others to the right source.",
    target: ["phase-panel", "mindset-panel", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "clarity", selectedPhase: 2 }
  },
  {
    id: "clarity-phase-3",
    chapter: "Strive for Clarity",
    title: "Clarity becomes coordination",
    subLabel: "Phase 3 of 5 | Integration",
    text:
      "At Integration, clarity expands across stakeholders. The statement emphasizes empowering others and having accountability to peers, which means clarity is becoming a system of alignment rather than a personal habit.",
    whatChangesNow:
      "The progression here is from speaking up occasionally to creating transparency and alignment consistently.",
    reflectionPrompt:
      "Watch for signals like stakeholder updates, dashboards, and clearer role alignment across the work.",
    target: ["phase-panel", "mindset-panel", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "clarity", selectedPhase: 3 }
  },
  {
    id: "clarity-phase-4",
    chapter: "Strive for Clarity",
    title: "Clarity becomes constructive challenge",
    subLabel: "Phase 4 of 5 | Optimization",
    text:
      "At Optimization, clarity is no longer only about explaining work clearly. It includes courage: pressure-testing requirements, questioning the familiar, and using tension productively to co-create something better.",
    whatChangesNow:
      "This phase adds judgment and challenge. You are expected to improve the system, not only understand it.",
    reflectionPrompt:
      "The strongest signal here is whether pushback is used to protect better outcomes rather than avoid conflict.",
    target: ["phase-panel", "mindset-panel", "mindset-statement", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "clarity", selectedPhase: 4 }
  },
  {
    id: "clarity-phase-5",
    chapter: "Strive for Clarity",
    title: "Clarity becomes strategic perspective",
    subLabel: "Phase 5 of 5 | Transformation",
    text:
      "At Transformation, clarity reaches the enterprise level. The language shifts to the bigger picture, the business plan, and playing to win. Clarity now helps shape strategy, not just execution.",
    whatChangesNow:
      "The scope moves from project and stakeholder alignment to business direction and organizational priorities.",
    reflectionPrompt:
      "Look for evidence that clarity is helping connect day-to-day work to the wider strategy.",
    target: ["phase-panel", "mindset-panel", "mindset-statement"],
    state: { mode: "explore", selectedMindset: "clarity", selectedPhase: 5 }
  },
  {
    id: "innovation-phase-1",
    chapter: "Deliver through Innovation",
    title: "Innovation begins with openness",
    subLabel: "Phase 1 of 5 | Awareness",
    text:
      "At Awareness, innovation is framed as a necessity rather than a nice-to-have. The emphasis is on learning what digital tools can do and seeing innovation as part of professional success.",
    whatChangesNow:
      "The first shift is from uncertainty or fear to curiosity and willingness to learn.",
    reflectionPrompt:
      "Early maturity shows up in learning behaviors: exploring tools, following advances, and reaching out to broaden understanding.",
    target: ["phase-panel", "mindset-panel", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "innovation", selectedPhase: 1 }
  },
  {
    id: "innovation-phase-2",
    chapter: "Deliver through Innovation",
    title: "Innovation becomes applied experimentation",
    subLabel: "Phase 2 of 5 | Adoption",
    text:
      "At Adoption, innovation moves into daily work. The language now stresses identifying opportunities, using new technology intentionally, and linking experiments to positive business outcomes.",
    whatChangesNow:
      "The responsibility changes from awareness of tools to using them in context, with risk and benefit in view.",
    reflectionPrompt:
      "Notice the move toward test-and-learn, cost-benefit thinking, and asking why an implementation matters.",
    target: ["phase-panel", "mindset-panel", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "innovation", selectedPhase: 2 }
  },
  {
    id: "innovation-phase-3",
    chapter: "Deliver through Innovation",
    title: "Innovation becomes continuous improvement",
    subLabel: "Phase 3 of 5 | Integration",
    text:
      "At Integration, innovation is no longer just a personal practice. The statement adds continuous improvement and serving as a resource for others, which means innovation is becoming shared capability.",
    whatChangesNow:
      "The turning point here is enablement: you improve work and help others build confidence at the same time.",
    reflectionPrompt:
      "Look for frequent communication, practical tool sharing, and fewer silos or duplicated efforts.",
    target: ["phase-panel", "mindset-panel", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "innovation", selectedPhase: 3 }
  },
  {
    id: "innovation-phase-4",
    chapter: "Deliver through Innovation",
    title: "Innovation becomes prioritization",
    subLabel: "Phase 4 of 5 | Optimization",
    text:
      "At Optimization, innovation gains discernment. The focus is not simply adopting more technology, but choosing the changes with the biggest impact and rejecting work that is not cost or resource effective.",
    whatChangesNow:
      "This phase adds prioritization and stewardship: you lead adoption, but you also decide what not to pursue.",
    reflectionPrompt:
      "The clearest signal is whether innovation decisions are guided by impact, feedback, and long-term usefulness.",
    target: ["phase-panel", "mindset-panel", "mindset-statement", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "innovation", selectedPhase: 4 }
  },
  {
    id: "innovation-phase-5",
    chapter: "Deliver through Innovation",
    title: "Innovation becomes strategic leadership",
    subLabel: "Phase 5 of 5 | Transformation",
    text:
      "At Transformation, innovation rises into business strategy. The language shifts from using tools well to championing digital tools and encouraging others to innovate.",
    whatChangesNow:
      "Innovation now shapes direction, culture, and shared ambition across the organization.",
    reflectionPrompt:
      "Look for leaders who treat innovation as an ongoing capability, not a one-time implementation.",
    target: ["phase-panel", "mindset-panel", "mindset-statement"],
    state: { mode: "explore", selectedMindset: "innovation", selectedPhase: 5 }
  },
  {
    id: "trust-phase-1",
    chapter: "Build Trust and Resilience",
    title: "Trust begins with safety and empathy",
    subLabel: "Phase 1 of 5 | Awareness",
    text:
      "At Awareness, trust is grounded in empathy, honesty, and healthy workplace partnerships. The language is interpersonal and protective: create safety, recognize others, and value diversity.",
    whatChangesNow:
      "The first move is simple but foundational: trust becomes visible in how you treat people day to day.",
    reflectionPrompt:
      "Early maturity shows up in transparency, compassion, and respect for the strengths of others.",
    target: ["phase-panel", "mindset-panel", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "trust", selectedPhase: 1 }
  },
  {
    id: "trust-phase-2",
    chapter: "Build Trust and Resilience",
    title: "Trust becomes good intent under pressure",
    subLabel: "Phase 2 of 5 | Adoption",
    text:
      "At Adoption, the mindset deepens. The language shifts from general empathy to assuming good intent and reinforcing agility and resilience in an ever-evolving workplace.",
    whatChangesNow:
      "This phase asks you to carry trust into ambiguity, difference, and continuous change.",
    reflectionPrompt:
      "Look for behaviors like clarifying intent, adapting communication, and using tools that help people stay resilient.",
    target: ["phase-panel", "mindset-panel", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "trust", selectedPhase: 2 }
  },
  {
    id: "trust-phase-3",
    chapter: "Build Trust and Resilience",
    title: "Trust becomes self-awareness and accountability",
    subLabel: "Phase 3 of 5 | Integration",
    text:
      "At Integration, trust turns inward before it turns outward again. The statement emphasizes being self-aware, seeking honest feedback, and holding yourself accountable.",
    whatChangesNow:
      "The progression here is from being supportive to being personally coachable and responsible.",
    reflectionPrompt:
      "Notice how maturity now depends on receiving feedback well, not just creating a positive atmosphere.",
    target: ["phase-panel", "mindset-panel", "mindset-statement", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "trust", selectedPhase: 3 }
  },
  {
    id: "trust-phase-4",
    chapter: "Build Trust and Resilience",
    title: "Trust becomes accountable feedback",
    subLabel: "Phase 4 of 5 | Optimization",
    text:
      "At Optimization, trust becomes more courageous. The language adds empathy and cultural context while also expecting you to hold others accountable through clear, specific, and actionable feedback.",
    whatChangesNow:
      "This phase combines care with directness. Trust is no longer only safe; it is strong enough to handle difficult truth.",
    reflectionPrompt:
      "The clearest signal is whether feedback is both humane and useful enough to change behavior.",
    target: ["phase-panel", "mindset-panel", "behavior-cards"],
    state: { mode: "explore", selectedMindset: "trust", selectedPhase: 4 }
  },
  {
    id: "trust-phase-5",
    chapter: "Build Trust and Resilience",
    title: "Trust becomes organizational resilience",
    subLabel: "Phase 5 of 5 | Transformation",
    text:
      "At Transformation, the mindset becomes multiplying and networked. The language shifts to coaching, mentoring, and creating an organization whose success is built on trust.",
    whatChangesNow:
      "The scope expands from strong relationships to resilience across the organization.",
    reflectionPrompt:
      "Look for leaders who build capability in others, connect people, and strengthen trust beyond their immediate team.",
    target: ["phase-panel", "mindset-panel", "mindset-statement"],
    state: { mode: "explore", selectedMindset: "trust", selectedPhase: 5 }
  },
  {
    id: "own-phase-1",
    chapter: "Own the Outcome",
    title: "Recognize the full picture",
    subLabel: "Phase 1 of 5 | Awareness",
    text:
      "At Awareness, owning the outcome means starting to connect all three outer mindsets. You seek context, stay open to digital possibilities, and build basic trust so work can move in the right direction.",
    whatChangesNow:
      "The center of the model becomes meaningful when the outer mindsets begin to work together, even at a basic level.",
    reflectionPrompt:
      "Notice how early outcome ownership depends on curiosity, openness, and psychological safety appearing together.",
    target: ["wheel", "phase-panel", "own-panel"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  },
  {
    id: "own-phase-2",
    chapter: "Own the Outcome",
    title: "Turn intent into shared action",
    subLabel: "Phase 2 of 5 | Adoption",
    text:
      "At Adoption, ownership becomes more active. Clarity is shared out loud, innovation is used in daily work, and trust is reinforced by good intent and support through change.",
    whatChangesNow:
      "The shift is from recognizing the levers to using them together in real work.",
    reflectionPrompt:
      "Ask whether people are not only aligned individually, but helping others move with them.",
    target: ["wheel", "phase-panel", "own-panel"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 2 }
  },
  {
    id: "own-phase-3",
    chapter: "Own the Outcome",
    title: "Make progress reliable",
    subLabel: "Phase 3 of 5 | Integration",
    text:
      "At Integration, owning the outcome means the outer mindsets are becoming dependable. Stakeholder alignment, continuous improvement, and self-accountability make progress more repeatable.",
    whatChangesNow:
      "The center strengthens when behaviors become part of how the team operates, not isolated good intentions.",
    reflectionPrompt:
      "Look for reliable systems: transparency, shared learning, and accountable follow-through.",
    target: ["wheel", "phase-panel", "own-panel"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 3 }
  },
  {
    id: "own-phase-4",
    chapter: "Own the Outcome",
    title: "Use tension to improve the system",
    subLabel: "Phase 4 of 5 | Optimization",
    text:
      "At Optimization, ownership becomes courageous. Clarity challenges assumptions, innovation prioritizes what truly matters, and trust supports direct, empathetic accountability.",
    whatChangesNow:
      "The model now expects people to improve the system rather than work around it.",
    reflectionPrompt:
      "The strongest signal here is whether tension produces better decisions, not avoidance or defensiveness.",
    target: ["wheel", "phase-panel", "own-panel"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 4 }
  },
  {
    id: "own-phase-5",
    chapter: "Own the Outcome",
    title: "Shape culture at scale",
    subLabel: "Phase 5 of 5 | Transformation",
    text:
      "At Transformation, owning the outcome means all three outer mindsets operate at organizational scale. Strategic clarity, innovation leadership, and trust-building through coaching combine to shape culture more broadly.",
    whatChangesNow:
      "The center of the model is now visible as enterprise influence: people do not just deliver within the system, they help define it.",
    reflectionPrompt:
      "Look for evidence that outcomes are being shaped through strategy, capability building, and stronger cross-organizational connection.",
    target: ["wheel", "phase-panel", "own-panel"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 5 }
  },
  {
    id: "compare-phase-across-model",
    chapter: "Compare and Synthesize",
    title: "Compare one phase across the model",
    subLabel: "Compare mode | Across mindsets",
    text:
      "In compare mode, one phase across all three outer mindsets shows that maturity is never one-dimensional. The same phase can emphasize context, experimentation, or trust depending on which mindset you are looking at.",
    whatChangesNow:
      "This view helps you see a shared maturity level as a pattern of different strengths rather than a single trait.",
    reflectionPrompt:
      "Ask which mindset is strongest at this phase and which one may be lagging behind it.",
    target: ["compare-header", "compare-toggle", "compare-grid"],
    state: { mode: "compare", selectedMindset: "own", selectedPhase: 3, compareMode: "mindsets" }
  },
  {
    id: "compare-mindset-across-phases",
    chapter: "Compare and Synthesize",
    title: "Compare one mindset across all phases",
    subLabel: "Compare mode | Across phases",
    text:
      "When you compare a single mindset across all five phases, the developmental arc becomes clear. You can trace how responsibility expands from personal practice to team enablement to system-shaping leadership.",
    whatChangesNow:
      "This view is the clearest way to see what truly changes between adjacent phases.",
    reflectionPrompt:
      "Ask what new responsibility appears at each phase rather than just what new activity is listed.",
    target: ["compare-header", "compare-toggle", "compare-grid"],
    state: { mode: "compare", selectedMindset: "clarity", selectedPhase: 1, compareMode: "phases" }
  },
  {
    id: "tour-finish",
    chapter: "Put It Into Practice",
    title: "Use the model as a development conversation",
    subLabel: "Finish",
    text:
      "You have now seen each phase of each mindset and how the center of the model synthesizes them. Use the wheel, phase path, and compare views to coach growth, spot patterns, and clarify what progression should look like next.",
    whatChangesNow:
      "The model is most useful when it helps people name the next stretch in behavior, not just the current label.",
    reflectionPrompt:
      "Return to any phase or mindset and ask: what has to become more visible for progression to be real?",
    target: ["wheel", "phase-panel", "mindset-panel"],
    state: { mode: "explore", selectedMindset: "own", selectedPhase: 1 }
  }
];
