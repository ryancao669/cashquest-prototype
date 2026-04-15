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
    videoUrl: "https://www.youtube.com/embed/8Xo6tHk6G4w",
    steps: [
      {
        type: "text",
        title: "Bank Accounts",
        intro: "Start with the core account types students need to know.",
        bullets: [
          "A bank account lets you store money safely, deposit checks, and use a debit card.",
          "Checking is for daily spending. Savings is for money you want to set aside.",
          "A strong real-life example is using checking for food and day-to-day purchases while keeping emergency money in savings.",
          "Students need to take away that knowing account types helps them manage money responsibly.",
          "Action step: choose the account type that best matches how you spend and save.",
          "Vocabulary to remember: checking account, savings account, deposit, and debit card."
        ]
      },
      {
        type: "video",
        title: "Debit, Credit, and Everyday Choices",
        intro: "Watch a quick explainer, then compare what each card does.",
        caption:
          "Debit uses money you already have. Credit is borrowed money that needs to be paid back carefully."
      },
      {
        type: "exercise",
        title: "Budgeting in Real Life",
        prompt: "Which choice best shows a budgeting habit?",
        options: [
          "Guessing at your spending and hoping it works out",
          "Tracking income and costs so you can plan ahead",
          "Ignoring fees because they are usually small",
          "Putting all money in checking and never saving"
        ],
        correctIndex: 1,
        explanation: "A budget works when you list money in, money out, and use that information to plan."
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
          "It keeps all spending hidden",
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
    videoUrl: "https://www.youtube.com/embed/H_eL2BCM4D8",
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
        title: "Gross Pay vs Net Pay",
        intro: "Use this quick watch to connect paychecks to what you can actually spend.",
        caption:
          "Gross pay is what you earn before deductions. Net pay is the money that actually lands in your hands."
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
          "Example: if $1,800 was withheld and you really owed $1,400, you would get a $400 refund.",
          "Vocabulary to remember: FICA funds Social Security and Medicare, and a W-2 is a wage and tax statement."
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
  {
    id: "credit-uses-and-effect",
    number: 3,
    title: "Credit Uses and Effect",
    tagline: "How credit works, why scores matter, and what can raise or lower them.",
    ready: false
  },
  {
    id: "debt-uses-and-effect",
    number: 4,
    title: "Debt Uses and Effect (Student Loans)",
    tagline: "Borrowing tradeoffs, repayment pressure, and long-term consequences.",
    ready: false
  },
  {
    id: "tax-system-and-filing",
    number: 5,
    title: "Tax System, Forms, and Filing",
    tagline: "How to read forms, understand pay stubs, and file taxes correctly.",
    ready: false
  },
  {
    id: "investing-and-wealth",
    number: 6,
    title: "Principles of Investing and Building Wealth",
    tagline: "Growth, risk, compounding, and long-term financial decisions.",
    ready: false
  },
  {
    id: "consumer-protection",
    number: 7,
    title: "Consumer Protection and Scams",
    tagline: "How to spot scams, protect personal information, and respond safely.",
    ready: false
  },
  {
    id: "financing-education",
    number: 8,
    title: "Ways to Finance Education",
    tagline: "Scholarships, merit aid, grants, and student loan planning.",
    ready: false
  }
];

const rewards = [
  { id: "late-work-pass", title: "Late Work Pass", cost: 60, description: "Redeem a pass for one late assignment." },
  { id: "snack-voucher", title: "Snack Voucher", cost: 90, description: "Swap coins for a small snack reward." },
  { id: "homework-skip", title: "Homework Skip", cost: 140, description: "Cash in for a one-time homework skip." },
  { id: "finance-certificate", title: "CashQuest Certificate", cost: 220, description: "Unlock a polished certificate once you have enough coins." }
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
const openLibraryButton = document.getElementById("open-library-button");

hotspotToggle.addEventListener("click", () => {
  state.hotspotMode = !state.hotspotMode;
  persistState();
  syncHotspots();
});

openLibraryButton.addEventListener("click", () => {
  lessonLibrary.scrollIntoView({ behavior: "smooth", block: "start" });
});

lessonModalClose.addEventListener("click", closeLessonModal);
lessonModal.addEventListener("click", (event) => {
  if (event.target.dataset.closeModal === "true") {
    closeLessonModal();
  }
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
  const todayIndex = new Date().getDate() % readyLessons.length;
  const lesson = readyLessons[todayIndex];

  lessonOfDayTitle.textContent = lesson.title;
  lessonOfDayDescription.textContent =
    `${lesson.tagline} Complete the lesson, finish the quiz, and earn ${lesson.rewardCoins} redeemable coins plus ${lesson.knowledgePoints} knowledge points.`;
  lessonOfDayButton.onclick = () => openLessonModal(lesson.id);
}

function renderSummary() {
  document.getElementById("redeemable-points-value").textContent = state.redeemablePoints;
  document.getElementById("knowledge-points-value").textContent = state.knowledgePoints;
  document.getElementById("completed-lessons-value").textContent =
    `${state.completedLessons.length}/${lessons.filter((lesson) => lesson.ready).length}`;
  document.getElementById("streak-value").textContent = `${state.streak} day${state.streak === 1 ? "" : "s"}`;
}

function renderLibrary() {
  lessonLibrary.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const card = document.createElement("article");
    const unlocked = isLessonUnlocked(index);
    const completed = state.completedLessons.includes(lesson.id);
    card.className = `lesson-card ${lesson.ready ? "" : "locked"}`;

    const status = completed ? "Completed" : lesson.ready && unlocked ? "Ready now" : lesson.ready ? "Finish previous lesson" : "Locked";
    const statusClass = completed ? "complete" : lesson.ready && unlocked ? "unlocked" : "locked";

    card.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-badge">Lesson ${lesson.number}</span>
        <span class="status-pill ${statusClass}">${status}</span>
      </div>
      <div>
        <h3>${lesson.title}</h3>
        <p class="lesson-meta">${lesson.tagline}</p>
      </div>
      <div class="support-row">
        ${lesson.ready ? `<span class="chip">${lesson.estimatedMinutes} min</span>` : `<span class="chip">Coming soon</span>`}
        ${lesson.ready ? `<span class="chip">${lesson.rewardCoins} coins</span>` : `<span class="chip">State topic</span>`}
        ${lesson.ready ? `<span class="chip">${lesson.knowledgePoints} KP</span>` : ""}
      </div>
      <div class="lesson-footer">
        <div class="lesson-meta">${completed ? "Completed and counted toward progress." : unlocked && lesson.ready ? "Includes text, video, exercise, and quiz." : lesson.ready ? "Complete the previous lesson to unlock this one." : "Visible now so your roadmap is clear, but content is not written yet."}</div>
        <button class="open-lesson-button ${lesson.ready && unlocked ? "hotspot-target" : ""}" type="button" ${lesson.ready && unlocked ? "" : "disabled"}>
          ${completed ? "Review lesson" : lesson.ready && unlocked ? "Start lesson" : "Locked"}
        </button>
      </div>
    `;

    const button = card.querySelector("button");
    if (lesson.ready && unlocked) {
      button.addEventListener("click", () => openLessonModal(lesson.id));
    }

    lessonLibrary.appendChild(card);
  });
}

function renderProgress() {
  const readyLessons = lessons.filter((lesson) => lesson.ready);
  const percent = readyLessons.length === 0 ? 0 : (state.completedLessons.length / readyLessons.length) * 100;
  document.getElementById("progress-bar-fill").style.width = `${percent}%`;
  document.getElementById("progress-summary").textContent =
    `${Math.round(percent)}% complete. Knowledge points show long-term progress. Redeemable coins can be spent in the shop.`;

  lessonProgressList.innerHTML = "";
  readyLessons.forEach((lesson) => {
    const completed = state.completedLessons.includes(lesson.id);
    const item = document.createElement("article");
    item.className = "progress-card";
    item.innerHTML = `
      <div class="reward-topline">
        <div>
          <h3>${lesson.title}</h3>
          <p class="progress-meta">${lesson.tagline}</p>
        </div>
        <span class="status-pill ${completed ? "complete" : "unlocked"}">${completed ? "Done" : "In progress"}</span>
      </div>
      <p class="progress-meta">${completed ? `Earned ${lesson.rewardCoins} coins and ${lesson.knowledgePoints} knowledge points.` : "Complete the final quiz with a passing score to bank the points."}</p>
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
      <div class="reward-topline">
        <div>
          <h3>${reward.title}</h3>
          <p class="reward-copy">${reward.description}</p>
        </div>
        <span class="reward-cost">${reward.cost} coins</span>
      </div>
      <div class="reward-footer">
        <p class="reward-copy">${redeemed ? "Already redeemed in this prototype run." : "Redeemable points go down after spending. Knowledge points stay the same."}</p>
        <button class="reward-button ${affordable && !redeemed ? "hotspot-target" : ""}" type="button" ${affordable && !redeemed ? "" : "disabled"}>
          ${redeemed ? "Redeemed" : affordable ? "Redeem reward" : "Not enough coins"}
        </button>
      </div>
    `;

    const button = card.querySelector("button");
    if (!redeemed && affordable) {
      button.addEventListener("click", () => redeemReward(reward.id));
    }

    rewardsList.appendChild(card);
  });
}

function syncHotspots() {
  document.body.classList.toggle("hotspots-enabled", state.hotspotMode);
  hotspotToggle.textContent = state.hotspotMode ? "Hotspots On" : "Hotspots Off";
  hotspotToggle.setAttribute("aria-pressed", String(state.hotspotMode));
}

function openLessonModal(lessonId) {
  const lesson = lessons.find((entry) => entry.id === lessonId);
  if (!lesson || !lesson.ready) {
    return;
  }

  lessonModalContent.innerHTML = "";
  const completed = state.completedLessons.includes(lesson.id);
  const container = document.createElement("div");
  container.className = "lesson-flow";

  const hero = document.createElement("section");
  hero.className = "lesson-hero";
  hero.innerHTML = `
    <p class="eyebrow">Lesson ${lesson.number}</p>
    <h2 id="lesson-modal-title">${lesson.title}</h2>
    <p class="lesson-hero-copy">${lesson.tagline} This lesson is designed to be completed in about ${lesson.estimatedMinutes} minutes.</p>
    <div class="lesson-route">
      <span class="chip">Text</span>
      <span class="chip">Video</span>
      <span class="chip">Exercise</span>
      <span class="chip">Quiz</span>
      <span class="chip">${lesson.rewardCoins} coins</span>
      <span class="chip">${lesson.knowledgePoints} KP</span>
    </div>
  `;

  container.appendChild(hero);

  const stepShell = document.createElement("section");
  stepShell.className = "lesson-steps";

  lesson.steps.forEach((step, index) => {
    const fragment = lessonStepTemplate.content.firstElementChild.cloneNode(true);
    fragment.querySelector(".step-tag").textContent = step.type;
    fragment.querySelector(".step-index").textContent = `Step ${index + 1} of ${lesson.steps.length}`;
    fragment.querySelector(".step-title").textContent = step.title;
    fragment.querySelector(".step-body").appendChild(buildStepContent(step, lesson.videoUrl));
    stepShell.appendChild(fragment);
  });

  container.appendChild(stepShell);
  container.appendChild(buildQuizBlock(lesson, completed));
  lessonModalContent.appendChild(container);

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
    intro.className = "lesson-copy";
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
    caption.className = "lesson-copy";
    caption.textContent = step.caption;
    wrapper.appendChild(caption);
  }

  if (step.type === "exercise") {
    const options = document.createElement("div");
    const feedback = document.createElement("p");
    const checkButton = document.createElement("button");
    let selectedIndex = null;
    let checked = false;

    options.className = "exercise-options";
    feedback.className = "exercise-feedback";

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

    checkButton.type = "button";
    checkButton.className = "secondary-button";
    checkButton.textContent = "Check exercise";
    checkButton.disabled = true;
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
  const quiz = document.createElement("section");
  quiz.className = "lesson-step card";
  const selectedAnswers = new Array(lesson.quiz.length).fill(null);

  quiz.innerHTML = `
    <div class="quiz-header">
      <span class="step-tag">final quiz</span>
      <span class="step-index">${lesson.quiz.length} questions</span>
    </div>
    <h3>Finish the quiz to earn points</h3>
    <p class="lesson-copy">Students need to complete the lesson and then pass the quiz. This prototype awards points when the quiz score is at least 80%.</p>
  `;

  lesson.quiz.forEach((question, questionIndex) => {
    const block = document.createElement("div");
    block.className = "card";
    block.style.padding = "18px";

    const prompt = document.createElement("p");
    prompt.style.margin = "0 0 12px";
    prompt.innerHTML = `<strong>Question ${questionIndex + 1}.</strong> ${question.question}`;

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

    block.appendChild(prompt);
    block.appendChild(options);
    quiz.appendChild(block);
  });

  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";

  const actions = document.createElement("div");
  actions.className = "modal-actions";

  const submit = document.createElement("button");
  submit.type = "button";
  submit.className = "primary-button hotspot-target";
  submit.textContent = alreadyCompleted ? "Recheck quiz" : "Submit quiz";
  submit.addEventListener("click", () => {
    if (selectedAnswers.some((answer) => answer === null)) {
      feedback.textContent = "Answer every question before submitting.";
      feedback.className = "quiz-feedback bad";
      return;
    }

    const score = lesson.quiz.reduce((count, question, questionIndex) => {
      return count + (question.correctIndex === selectedAnswers[questionIndex] ? 1 : 0);
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
  close.type = "button";
  close.className = "secondary-button";
  close.textContent = "Back to dashboard";
  close.addEventListener("click", closeLessonModal);

  actions.appendChild(submit);
  actions.appendChild(close);
  quiz.appendChild(actions);
  quiz.appendChild(feedback);
  return quiz;
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
  if (previousReadyLessons.length === 0) return true;
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
