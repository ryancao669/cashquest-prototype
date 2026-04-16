const STORAGE_KEY = "cashquest-prototype-state";

const lessons = [
  {
    id: "personal-banking",
    number: 1,
    title: "Personal Banking",
    tagline: "Accounts, cards, budgets, and the basics of fees.",
    ready: true,
    estimatedMinutes: 3,
    rewardCoins: 45,
    knowledgePoints: 100,
    videoUrl: "https://www.youtube.com/embed/iZGljcA3G24",
    steps: [
      {
        type: "text",
        title: "Bank Accounts",
        intro: "Start with the key account types students need to know first.",
        bullets: [
          "A bank account lets you store money safely, deposit checks, and use a debit card.",
          "Checking is for daily spending. Savings is for money you want to set aside.",
          "A strong real-life example is using checking for food and everyday purchases while keeping emergency money in savings.",
          "Students need to take away that knowing account types helps them manage money responsibly.",
          "Vocabulary to remember: checking account, savings account, deposit, and debit card."
        ]
      },
      {
        type: "video",
        title: "Banking Basics Explained",
        intro: "This short video keeps the lesson moving without losing attention.",
        caption: "Use this to reinforce checking, savings, and why both accounts matter."
      },
      {
        type: "exercise",
        title: "Quick Check",
        prompt: "Which account type is best for everyday purchases like groceries?",
        options: [
          "Savings account",
          "Checking account",
          "Investment account",
          "Retirement account"
        ],
        correctIndex: 1,
        explanation: "Checking accounts are built for day-to-day spending and transactions."
      },
      {
        type: "text",
        title: "Fees and Interest",
        intro: "A few simple rules can save or earn money over time.",
        bullets: [
          "Banks can charge fees after an overdraft or low balance.",
          "Banks can also pay interest on savings, which helps your money grow over time.",
          "Students need to take away that fees cost money while interest earns money.",
          "Action step: check account rules and look for ways to avoid fees before opening an account."
        ]
      }
    ],
    quiz: [
      {
        question: "What is the main purpose of a savings account?",
        options: [
          "To hold money you want to set aside",
          "To pay every bill immediately",
          "To avoid using a debit card",
          "To borrow money from the bank"
        ],
        correctIndex: 0
      },
      {
        question: "What is true about a debit card?",
        options: [
          "It always builds credit",
          "It pulls money from your account right away",
          "It never has fees",
          "It is only for savings accounts"
        ],
        correctIndex: 1
      },
      {
        question: "Why does budgeting matter?",
        options: [
          "It keeps spending hidden",
          "It helps you track income and expenses",
          "It guarantees no fees ever",
          "It replaces a bank account"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "employment-and-taxes",
    number: 2,
    title: "Employment and Taxes",
    tagline: "Job types, take-home pay, and how taxes work.",
    ready: true,
    estimatedMinutes: 3,
    rewardCoins: 55,
    knowledgePoints: 110,
    videoUrl: "https://www.youtube.com/embed/TnMEouGGnRE",
    steps: [
      {
        type: "text",
        title: "Types of Employment",
        intro: "Job structure changes how you get paid and what responsibilities you have.",
        bullets: [
          "Jobs can be full time, part time, or self-employed.",
          "Full-time work often includes steady hours and benefits, while part-time work usually means fewer hours.",
          "Self-employed workers handle their own taxes and benefits.",
          "Students should take away that job type affects pay, benefits, and taxes.",
          "Action step: compare job types and pick the one that best matches your goals and lifestyle."
        ]
      },
      {
        type: "video",
        title: "Understanding Your Paycheck",
        intro: "This video gives a quick walkthrough of paycheck deductions.",
        caption: "Use it to connect gross pay, net pay, taxes, and pay stubs."
      },
      {
        type: "exercise",
        title: "Paycheck Checkpoint",
        prompt: "Which statement is the best budgeting rule?",
        options: [
          "Budget based on gross pay because it is the bigger number",
          "Budget based on net pay because it is your real take-home money",
          "Ignore taxes until April",
          "Only full-time workers need to think about deductions"
        ],
        correctIndex: 1,
        explanation: "Net pay is what you can actually spend after taxes and payroll deductions are removed."
      },
      {
        type: "text",
        title: "Taxes and Filing",
        intro: "Students need the basic filing idea before they start earning money.",
        bullets: [
          "Taxes fund public services and the U.S. uses progressive tax brackets.",
          "Employers take money from each paycheck for federal tax, state tax, and FICA.",
          "A tax return compares what you owe with what was already withheld using forms like a W-2.",
          "A refund is your own money coming back if too much was taken out.",
          "Example: if $1,800 was withheld and you really owed $1,400, you would get a $400 refund."
        ]
      }
    ],
    quiz: [
      {
        question: "What is net pay?",
        options: [
          "Your pay before deductions",
          "Your pay after deductions",
          "Money only self-employed workers earn",
          "A yearly tax refund"
        ],
        correctIndex: 1
      },
      {
        question: "What does FICA help fund?",
        options: [
          "Student clubs",
          "Social Security and Medicare",
          "Only state parks",
          "Scholarship programs"
        ],
        correctIndex: 1
      },
      {
        question: "Why might someone get a tax refund?",
        options: [
          "They never earned money",
          "Too much money was withheld from paychecks",
          "They paid with a debit card",
          "They skipped filing"
        ],
        correctIndex: 1
      }
    ]
  },
  { id: "credit-uses-and-effect", number: 3, title: "Credit Uses and Effect", tagline: "How credit works, why scores matter, and what can raise or lower them.", ready: false },
  { id: "debt-uses-and-effect", number: 4, title: "Debt Uses and Effect (Student Loans)", tagline: "Borrowing tradeoffs, repayment pressure, and long-term consequences.", ready: false },
  { id: "tax-system-and-filing", number: 5, title: "Tax System, Forms, and Filing", tagline: "How to read forms, understand pay stubs, and file taxes correctly.", ready: false },
  { id: "investing-and-wealth", number: 6, title: "Principles of Investing and Building Wealth", tagline: "Growth, risk, compounding, and long-term financial decisions.", ready: false },
  { id: "consumer-protection", number: 7, title: "Consumer Protection and Scams", tagline: "How to spot scams, protect personal information, and respond safely.", ready: false },
  { id: "financing-education", number: 8, title: "Ways to Finance Education", tagline: "Scholarships, merit aid, grants, and student loan planning.", ready: false }
];

const rewards = [
  { id: "late-work-pass", title: "Late Work Pass", cost: 60, description: "Redeem a pass for one late assignment." },
  { id: "snack-voucher", title: "Snack Voucher", cost: 90, description: "Swap points for a small snack reward." },
  { id: "homework-skip", title: "Homework Skip", cost: 140, description: "Cash in for a one-time homework skip." },
  { id: "finance-certificate", title: "CashQuest Certificate", cost: 220, description: "Unlock a polished certificate once you have enough points." }
];

const defaultState = {
  completedLessons: [],
  redeemablePoints: 0,
  knowledgePoints: 0,
  redeemedRewards: [],
  hotspotMode: true,
  streak: 0,
  lastCompletedDate: null
};

const state = loadState();

const lessonLibrary = document.getElementById("lesson-library");
const rewardsList = document.getElementById("rewards-list");
const lessonProgressList = document.getElementById("lesson-progress-list");
const lessonModal = document.getElementById("lesson-modal");
const lessonModalContent = document.getElementById("lesson-modal-content");
const lessonModalClose = document.getElementById("lesson-modal-close");
const lessonStepTemplate = document.getElementById("lesson-step-template");
const hotspotToggle = document.getElementById("hotspot-toggle");
const lessonOfDayTitle = document.getElementById("lesson-of-day-title");
const lessonOfDayDescription = document.getElementById("lesson-of-day-description");
const lessonOfDayButton = document.getElementById("lesson-of-day-button");
const lessonOfDaySecondary = document.getElementById("lesson-of-day-secondary");
const lessonOfDayMeta = document.getElementById("lesson-of-day-meta");
const viewProgressButton = document.getElementById("view-progress-button");
const navButtons = document.querySelectorAll("[data-nav-target]");
const pointPills = document.querySelectorAll(".point-pill");

hotspotToggle.addEventListener("click", () => {
  state.hotspotMode = !state.hotspotMode;
  persistState();
  syncHotspots();
});

viewProgressButton.addEventListener("click", () => scrollToSection("progress"));
lessonModalClose.addEventListener("click", closeLessonModal);

lessonModal.addEventListener("click", (event) => {
  if (event.target.dataset.closeModal === "true") closeLessonModal();
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.navTarget;
    if (button.classList.contains("shortcut-card")) {
      scrollToSection(target);
      setActiveNav(target);
      return;
    }
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToSection(target);
    }
    setActiveNav(target);
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lessonModal.classList.contains("hidden")) {
    closeLessonModal();
  }
});

renderApp();

function renderApp() {
  renderLessonOfDay();
  renderSummary();
  renderLibrary();
  renderProgress();
  renderRewards();
  syncHotspots();
}

function renderLessonOfDay() {
  const readyLessons = lessons.filter((lesson) => lesson.ready);
  const lesson = readyLessons[new Date().getDate() % readyLessons.length];

  lessonOfDayTitle.textContent = lesson.title;
  lessonOfDayDescription.textContent = lesson.tagline;
  lessonOfDayMeta.textContent = `~${lesson.estimatedMinutes} min | +${lesson.knowledgePoints} KP`;
  lessonOfDayButton.onclick = () => openLessonModal(lesson.id);
  lessonOfDaySecondary.onclick = () => openLessonModal(lesson.id);
}

function renderSummary() {
  const readyLessons = lessons.filter((lesson) => lesson.ready);
  const progressPercent = readyLessons.length ? Math.round((state.completedLessons.length / readyLessons.length) * 100) : 0;

  document.getElementById("knowledge-points-value").textContent = state.knowledgePoints;
  document.getElementById("redeemable-points-value").textContent = state.redeemablePoints;
  document.getElementById("completed-lessons-value").textContent = `${state.completedLessons.length}/${readyLessons.length}`;
  document.getElementById("streak-value").textContent = state.streak;
  document.getElementById("progress-percent-label").textContent = `${progressPercent}%`;
  pointPills[0].textContent = `${state.knowledgePoints} KP`;
  pointPills[1].textContent = `${state.redeemablePoints} RP`;
}

function renderLibrary() {
  lessonLibrary.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const unlocked = isLessonUnlocked(index);
    const completed = state.completedLessons.includes(lesson.id);
    const card = document.createElement("article");
    card.className = `lesson-card ${lesson.ready ? "" : "locked"}`;

    card.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-badge">Lesson ${lesson.number}</span>
        <span class="status-pill ${completed ? "complete" : lesson.ready && unlocked ? "unlocked" : "locked"}">${completed ? "Done" : lesson.ready && unlocked ? "Ready" : "Locked"}</span>
      </div>
      <div>
        <h3>${lesson.title}</h3>
        <p class="lesson-meta">${lesson.tagline}</p>
      </div>
      <div class="support-row">
        ${lesson.ready ? `<span class="chip">~${lesson.estimatedMinutes} min</span>` : `<span class="chip">Coming soon</span>`}
        ${lesson.ready ? `<span class="chip">+${lesson.knowledgePoints} KP</span>` : `<span class="chip">Roadmap</span>`}
        ${lesson.ready ? `<span class="chip">+${lesson.rewardCoins} RP</span>` : ""}
      </div>
      <div class="lesson-footer">
        <p class="lesson-meta">${completed ? "Completed and banked into your progress." : unlocked && lesson.ready ? "Includes text, a short video, an exercise, and a final quiz." : lesson.ready ? "Complete the previous lesson first." : "Visible now, but not ready for students yet."}</p>
        <button class="lesson-action ${lesson.ready && unlocked ? "hotspot-target" : ""}" type="button" ${lesson.ready && unlocked ? "" : "disabled"}>${completed ? "Review" : lesson.ready && unlocked ? "Start" : "Locked"}</button>
      </div>
    `;

    const action = card.querySelector("button");
    if (lesson.ready && unlocked) {
      action.addEventListener("click", () => openLessonModal(lesson.id));
    }

    lessonLibrary.appendChild(card);
  });
}

function renderProgress() {
  const readyLessons = lessons.filter((lesson) => lesson.ready);
  const progressPercent = readyLessons.length ? (state.completedLessons.length / readyLessons.length) * 100 : 0;

  document.getElementById("progress-bar-fill").style.width = `${progressPercent}%`;
  document.getElementById("progress-summary").textContent =
    "Knowledge points track long-term learning. Redeemable points are the points students can spend in the rewards store.";

  lessonProgressList.innerHTML = "";
  readyLessons.forEach((lesson) => {
    const completed = state.completedLessons.includes(lesson.id);
    const item = document.createElement("article");
    item.className = "progress-item";
    item.innerHTML = `
      <div class="lesson-topline">
        <h3>${lesson.title}</h3>
        <span class="status-pill ${completed ? "complete" : "unlocked"}">${completed ? "Completed" : "Not done yet"}</span>
      </div>
      <p>${completed ? `Earned +${lesson.knowledgePoints} KP and +${lesson.rewardCoins} RP.` : "Finish the lesson and pass the quiz to collect the points."}</p>
    `;
    lessonProgressList.appendChild(item);
  });
}

function renderRewards() {
  rewardsList.innerHTML = "";

  rewards.forEach((reward) => {
    const redeemed = state.redeemedRewards.includes(reward.id);
    const affordable = state.redeemablePoints >= reward.cost;
    const card = document.createElement("article");
    card.className = "reward-card";
    card.innerHTML = `
      <div class="lesson-topline">
        <h3>${reward.title}</h3>
        <span class="reward-price">${reward.cost} RP</span>
      </div>
      <p class="reward-meta">${reward.description}</p>
      <div class="reward-footer">
        <p class="reward-meta">${redeemed ? "Already redeemed in this prototype run." : "Redeemable points go down after spending. Knowledge points stay where they are."}</p>
        <button class="reward-action ${affordable && !redeemed ? "hotspot-target" : ""}" type="button" ${affordable && !redeemed ? "" : "disabled"}>${redeemed ? "Redeemed" : affordable ? "Redeem" : "Need more RP"}</button>
      </div>
    `;

    const button = card.querySelector("button");
    if (affordable && !redeemed) {
      button.addEventListener("click", () => redeemReward(reward.id));
    }

    rewardsList.appendChild(card);
  });
}

function syncHotspots() {
  document.body.classList.toggle("hotspot-enabled", state.hotspotMode);
  hotspotToggle.textContent = state.hotspotMode ? "Hotspots On" : "Hotspots Off";
  hotspotToggle.setAttribute("aria-pressed", String(state.hotspotMode));
}

function scrollToSection(name) {
  const section = document.getElementById(`section-${name}`);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveNav(name) {
  document.querySelectorAll(".nav-pill").forEach((button) => {
    button.classList.toggle("active", button.dataset.navTarget === name);
  });
}

function openLessonModal(lessonId) {
  const lesson = lessons.find((entry) => entry.id === lessonId);
  if (!lesson || !lesson.ready) return;

  lessonModalContent.innerHTML = "";
  const alreadyCompleted = state.completedLessons.includes(lesson.id);
  const shell = document.createElement("div");
  shell.className = "lesson-flow";

  const hero = document.createElement("section");
  hero.className = "lesson-hero";
  hero.innerHTML = `
    <div class="panel-kicker">Lesson ${lesson.number}</div>
    <h2 id="lesson-modal-title">${lesson.title}</h2>
    <p class="lesson-hero-copy">${lesson.tagline} This lesson is designed to be done in about ${lesson.estimatedMinutes} minutes.</p>
    <div class="support-row">
      <span class="chip">Text</span>
      <span class="chip">Video</span>
      <span class="chip">Exercise</span>
      <span class="chip">Quiz</span>
    </div>
  `;
  shell.appendChild(hero);

  const steps = document.createElement("section");
  steps.className = "lesson-steps";

  lesson.steps.forEach((step, index) => {
    const card = lessonStepTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".step-tag").textContent = step.type;
    card.querySelector(".step-index").textContent = `Step ${index + 1} of ${lesson.steps.length}`;
    card.querySelector(".step-title").textContent = step.title;
    card.querySelector(".step-body").appendChild(buildStepContent(step, lesson.videoUrl));
    steps.appendChild(card);
  });

  shell.appendChild(steps);
  shell.appendChild(buildQuizBlock(lesson, alreadyCompleted));
  lessonModalContent.appendChild(shell);

  lessonModal.classList.remove("hidden");
  lessonModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLessonModal() {
  lessonModal.classList.add("hidden");
  lessonModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function buildStepContent(step, fallbackVideoUrl) {
  const wrapper = document.createElement("div");

  if (step.intro) {
    const intro = document.createElement("p");
    intro.textContent = step.intro;
    wrapper.appendChild(intro);
  }

  if (step.type === "text") {
    const list = document.createElement("ul");
    list.className = "point-list";
    step.bullets.forEach((bullet) => {
      const item = document.createElement("li");
      item.textContent = bullet;
      list.appendChild(item);
    });
    wrapper.appendChild(list);
  }

  if (step.type === "video") {
    const frame = document.createElement("div");
    frame.className = "media-frame";
    frame.innerHTML = `
      <iframe
        src="${step.videoUrl || fallbackVideoUrl}"
        title="${step.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
    wrapper.appendChild(frame);

    const caption = document.createElement("p");
    caption.textContent = step.caption;
    wrapper.appendChild(caption);
  }

  if (step.type === "exercise") {
    const options = document.createElement("div");
    options.className = "exercise-options";
    const feedback = document.createElement("p");
    feedback.className = "exercise-feedback";
    const checkButton = document.createElement("button");
    checkButton.className = "lesson-action";
    checkButton.type = "button";
    checkButton.textContent = "Check exercise";
    checkButton.disabled = true;

    let selectedIndex = null;
    let checked = false;

    step.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => {
        if (checked) return;
        selectedIndex = index;
        [...options.children].forEach((child, childIndex) => {
          child.classList.toggle("selected", childIndex === index);
        });
        checkButton.disabled = false;
      });
      options.appendChild(button);
    });

    checkButton.addEventListener("click", () => {
      if (selectedIndex === null) return;
      checked = true;
      [...options.children].forEach((child, childIndex) => {
        child.classList.toggle("correct", childIndex === step.correctIndex);
        child.classList.toggle("incorrect", childIndex === selectedIndex && childIndex !== step.correctIndex);
      });
      feedback.textContent = selectedIndex === step.correctIndex ? step.explanation : `Not quite. ${step.explanation}`;
      feedback.className = `exercise-feedback ${selectedIndex === step.correctIndex ? "good" : "bad"}`;
      checkButton.disabled = true;
    });

    wrapper.appendChild(options);
    wrapper.appendChild(checkButton);
    wrapper.appendChild(feedback);
  }

  return wrapper;
}

function buildQuizBlock(lesson, alreadyCompleted) {
  const block = document.createElement("section");
  block.className = "quiz-block";
  const selectedAnswers = new Array(lesson.quiz.length).fill(null);

  block.innerHTML = `
    <div class="step-topline">
      <span class="step-tag">Final quiz</span>
      <span class="step-index">${lesson.quiz.length} questions</span>
    </div>
    <h3>Finish the quiz to earn points</h3>
    <p class="panel-copy">Students need to complete the lesson and then pass the quiz. This prototype awards points once the student scores at least 80%.</p>
  `;

  lesson.quiz.forEach((question, questionIndex) => {
    const questionCard = document.createElement("article");
    questionCard.className = "lesson-step";
    questionCard.innerHTML = `<h3>Question ${questionIndex + 1}</h3><p>${question.question}</p>`;

    const options = document.createElement("div");
    options.className = "quiz-options";

    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => {
        selectedAnswers[questionIndex] = optionIndex;
        [...options.children].forEach((child, childIndex) => {
          child.classList.toggle("selected", childIndex === optionIndex);
        });
      });
      options.appendChild(button);
    });

    questionCard.appendChild(options);
    block.appendChild(questionCard);
  });

  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";

  const actions = document.createElement("div");
  actions.className = "modal-actions";

  const submit = document.createElement("button");
  submit.className = "hero-primary hotspot-target";
  submit.type = "button";
  submit.textContent = alreadyCompleted ? "Recheck quiz" : "Submit quiz";
  submit.addEventListener("click", () => {
    if (selectedAnswers.some((answer) => answer === null)) {
      feedback.textContent = "Answer every question before submitting.";
      feedback.className = "quiz-feedback bad";
      return;
    }

    const score = lesson.quiz.reduce((count, question, index) => {
      return count + (selectedAnswers[index] === question.correctIndex ? 1 : 0);
    }, 0);
    const passed = score / lesson.quiz.length >= 0.8;

    feedback.textContent = passed
      ? `Nice work. You scored ${score}/${lesson.quiz.length} and ${alreadyCompleted ? "kept your completion status." : "earned your points."}`
      : `You scored ${score}/${lesson.quiz.length}. Review the lesson and try again to earn the points.`;
    feedback.className = `quiz-feedback ${passed ? "good" : "bad"}`;

    if (passed && !alreadyCompleted) {
      completeLesson(lesson.id);
      submit.textContent = "Completed";
      submit.disabled = true;
    }
  });

  const close = document.createElement("button");
  close.className = "hero-secondary";
  close.type = "button";
  close.textContent = "Back to dashboard";
  close.addEventListener("click", closeLessonModal);

  actions.appendChild(submit);
  actions.appendChild(close);
  block.appendChild(actions);
  block.appendChild(feedback);
  return block;
}

function completeLesson(lessonId) {
  const lesson = lessons.find((entry) => entry.id === lessonId);
  if (!lesson || state.completedLessons.includes(lessonId)) return;

  state.completedLessons.push(lessonId);
  state.redeemablePoints += lesson.rewardCoins;
  state.knowledgePoints += lesson.knowledgePoints;
  updateStreak();
  persistState();
  renderApp();
}

function redeemReward(rewardId) {
  const reward = rewards.find((entry) => entry.id === rewardId);
  if (!reward || state.redeemedRewards.includes(rewardId) || state.redeemablePoints < reward.cost) return;

  state.redeemablePoints -= reward.cost;
  state.redeemedRewards.push(rewardId);
  persistState();
  renderApp();
}

function isLessonUnlocked(index) {
  const lesson = lessons[index];
  if (!lesson.ready) return false;
  if (index === 0) return true;

  const previousReadyLessons = lessons.slice(0, index).filter((entry) => entry.ready);
  const previousLesson = previousReadyLessons[previousReadyLessons.length - 1];
  return state.completedLessons.includes(previousLesson.id);
}

function updateStreak() {
  const today = new Date();
  const todayKey = today.toDateString();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (state.lastCompletedDate === todayKey) return;
  state.streak = state.lastCompletedDate === yesterday.toDateString() ? state.streak + 1 : 1;
  state.lastCompletedDate = todayKey;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved };
  } catch (error) {
    return { ...defaultState };
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
