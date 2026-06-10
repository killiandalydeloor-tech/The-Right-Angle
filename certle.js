// =============================================
// THE RIGHT ANGLE — certle.js
// =============================================
 
const QUESTIONS = [
  {
    id: 1,
    subject: 'Higher Maths — Algebra',
    text: 'The roots of the equation x² + bx + c = 0 are α and β. If α + β = −5 and αβ = 6, what is the value of α² + β²?',
    formula: 'x² + bx + c = 0',
    type: 'numerical',
    answer: 13,
    tolerance: 0,
    hint: 'Use the identity α² + β² = (α + β)² − 2αβ',
    solution: [
      { step: 1, text: 'Recall the identity connecting sum of squares to sum and product of roots.', formula: 'α² + β² = (α + β)² − 2αβ' },
      { step: 2, text: 'We are given α + β = −5 and αβ = 6. Substitute these values.', formula: 'α² + β² = (−5)² − 2(6)' },
      { step: 3, text: 'Evaluate the expression.', formula: 'α² + β² = 25 − 12 = 13' },
      { step: 4, text: 'Therefore α² + β² = 13.', formula: 'Answer: 13' },
    ]
  },
  {
    id: 2,
    subject: 'Higher Maths — Calculus',
    text: 'Find the x-coordinate of the local maximum of the function f(x) = x³ − 6x² + 9x + 2.',
    formula: 'f(x) = x³ − 6x² + 9x + 2',
    type: 'numerical',
    answer: 1,
    tolerance: 0,
    hint: "Differentiate, set f'(x) = 0, and use the second derivative test.",
    solution: [
      { step: 1, text: 'Differentiate f(x) with respect to x.', formula: "f'(x) = 3x² − 12x + 9" },
      { step: 2, text: "Set f'(x) = 0 to find stationary points.", formula: '3x² − 12x + 9 = 0  →  (x−1)(x−3) = 0' },
      { step: 3, text: 'So x = 1 or x = 3. Find the second derivative.', formula: "f''(x) = 6x − 12" },
      { step: 4, text: "At x = 1: f''(1) = −6 < 0, so x = 1 is a local maximum.", formula: 'Answer: x = 1' },
    ]
  },
  {
    id: 3,
    subject: 'Higher Maths — Probability',
    text: 'A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. What is the probability (as a fraction) that both are red? Enter the numerator only — the denominator is 15.',
    formula: 'P(both red) = ?/15',
    type: 'numerical',
    answer: 2,
    tolerance: 0,
    hint: 'P(both red) = (4/10) × (3/9). Simplify to have denominator 15.',
    solution: [
      { step: 1, text: 'Probability first ball is red: 4 red from 10 total.', formula: 'P(1st red) = 4/10' },
      { step: 2, text: 'Given first was red, 3 red remain from 9 total.', formula: 'P(2nd red | 1st red) = 3/9' },
      { step: 3, text: 'Multiply the probabilities.', formula: 'P(both red) = (4/10) × (3/9) = 12/90 = 2/15' },
      { step: 4, text: 'The numerator is 2 (with denominator 15).', formula: 'Answer: 2' },
    ]
  },
  {
    id: 4,
    subject: 'Higher Maths — Complex Numbers',
    text: 'Which of the following is equal to i²⁵, where i = √−1?',
    formula: 'i = √−1',
    type: 'mcq',
    options: { A: 'i', B: '−i', C: '1', D: '−1' },
    answer: 'A',
    solution: [
      { step: 1, text: 'The powers of i cycle with period 4.', formula: 'i¹=i, i²=−1, i³=−i, i⁴=1, i⁵=i ...' },
      { step: 2, text: 'Divide the exponent by 4 and find the remainder.', formula: '25 ÷ 4 = 6 remainder 1' },
      { step: 3, text: 'A remainder of 1 means i²⁵ = i¹ = i.', formula: 'Answer: A (i)' },
    ]
  },
  {
    id: 5,
    subject: 'Higher Maths — Sequences & Series',
    text: 'The first term of a geometric series is 3 and the common ratio is 2. What is the sum of the first 8 terms?',
    formula: 'Sₙ = a(rⁿ − 1) / (r − 1)',
    type: 'numerical',
    answer: 765,
    tolerance: 0,
    hint: 'Use Sₙ = a(rⁿ − 1) / (r − 1) with a = 3, r = 2, n = 8.',
    solution: [
      { step: 1, text: 'Identify the values: a = 3, r = 2, n = 8.', formula: 'Sₙ = a(rⁿ − 1) / (r − 1)' },
      { step: 2, text: 'Substitute into the formula.', formula: 'S₈ = 3(2⁸ − 1) / (2 − 1)' },
      { step: 3, text: 'Calculate 2⁸ = 256.', formula: 'S₈ = 3(255) / 1 = 765' },
      { step: 4, text: 'The sum of the first 8 terms is 765.', formula: 'Answer: 765' },
    ]
  },
];
 
const FAILURE_MESSAGES = [
  { emoji: '😬', title: 'Not quite!', msg: "That's not it. Check your working and try again!" },
  { emoji: '🤔', title: 'Hmm...', msg: 'Your maths teacher felt that one. Try again!' },
  { emoji: '📚', title: 'Almost!', msg: 'Close, but not close enough. One more go!' },
  { emoji: '🧮', title: 'Nope!', msg: 'The calculator disagrees. Have another think!' },
  { emoji: '😅', title: 'Not this time!', msg: 'Even Euler got things wrong. Probably. Try again!' },
];
 
const GAMEOVER_MESSAGES = [
  { title: 'Out of lives!', msg: 'Back to the books. Come back tomorrow for another shot! 📚' },
  { title: 'Eliminated!', msg: 'Your maths teacher is shaking their head. See you tomorrow! 😔' },
  { title: 'No lives left!', msg: 'Even Einstein had bad days. Probably. See you tomorrow!' },
  { title: 'Game over!', msg: 'The leaving cert waits for no one. Study up and try again tomorrow!' },
];
 
const WIN_MESSAGES = [
  { emoji: '🎉', title: 'Correct!', msg: "Brilliant! You've got what it takes for the H1!" },
  { emoji: '🌟', title: 'Nailed it!', msg: 'Outstanding work. The examiner would be impressed!' },
  { emoji: '🏆', title: 'Correct!', msg: "Top of the class! You solved today's CERTLE!" },
  { emoji: '🧠', title: 'Genius!', msg: 'Are you Einstein? That was seriously impressive!' },
];
 
const PERCENTILE_MESSAGES = [
  (p) => `You were faster than <strong>${p}%</strong> of players today. Not bad at all!`,
  (p) => `Only <strong>${100 - p}%</strong> of players beat your time. Impressive!`,
  (p) => p > 80 ? `You were quicker than <strong>${p}%</strong> of players. Are you Einstein?! 🧠` : `You finished faster than <strong>${p}%</strong> of players today. Keep it up!`,
];
 
// ---- STATE ----
let lives = 3;
let attempts = 0;
let gameOver = false;
let gameWon = false;
let timerInterval = null;
let elapsedSeconds = 0;
let currentQuestion = null;
 
// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  setDateDisplay();
  loadStreak();
 
  const playedDate = localStorage.getItem('certle_played_date');
  const today = new Date().toDateString();
 
  if (playedDate === today) {
    const result = localStorage.getItem('certle_today_result');
    if (result) {
      // Already played — set current question for solution viewing but show played screen
      selectTodaysQuestion(true);
      showAlreadyPlayed(result);
      return;
    }
  }
 
  // Fresh game
  selectTodaysQuestion(false);
});
 
function setDateDisplay() {
  const dateEl = document.getElementById('certle-date');
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString('en-IE', { weekday: 'short', day: 'numeric', month: 'short' });
}
 
function loadStreak() {
  const streak = getStreak();
  document.getElementById('streak-display').textContent = '🔥 ' + streak;
}
 
function selectTodaysQuestion(silentMode) {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const idx = dayOfYear % QUESTIONS.length;
  currentQuestion = QUESTIONS[idx];
  if (!silentMode) {
    renderQuestion(currentQuestion);
  }
}
 
function renderQuestion(q) {
  document.getElementById('q-type-tag').textContent = q.subject;
  document.getElementById('question-text').textContent = q.text;
 
  const formulaEl = document.getElementById('question-formula');
  if (q.formula) {
    formulaEl.textContent = q.formula;
    formulaEl.classList.add('visible');
  }
 
  if (q.type === 'mcq') {
    document.getElementById('mcq-options').classList.remove('hidden');
    document.getElementById('opt-a').textContent = q.options.A;
    document.getElementById('opt-b').textContent = q.options.B;
    document.getElementById('opt-c').textContent = q.options.C;
    document.getElementById('opt-d').textContent = q.options.D;
  } else {
    document.getElementById('num-input-wrap').classList.remove('hidden');
    document.getElementById('input-hint').textContent = q.hint || '';
    document.getElementById('num-answer').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitNumerical();
    });
  }
 
  startTimer();
}
 
function showAlreadyPlayed(result) {
  stopTimer();
  const card = document.getElementById('question-card');
  const won = result === 'won';
  card.innerHTML =
    '<div class="already-played">' +
    '<div class="already-played-icon">' + (won ? '✅' : '💀') + '</div>' +
    '<h3>' + (won ? "You already solved today's CERTLE!" : "You've already used all your lives today.") + '</h3>' +
    '<p>Come back tomorrow for a new question. Next question in:</p>' +
    '<div class="countdown-tomorrow" id="countdown-timer">--:--:--</div>' +
    '<button class="btn-primary" style="margin-top:0.5rem" onclick="showSolution()">See Today\'s Solution →</button>' +
    '</div>';
  startCountdownToMidnight();
}
 
function startCountdownToMidnight() {
  function update() {
    const el = document.getElementById('countdown-timer');
    if (!el) return;
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    el.textContent = h + ':' + m + ':' + s;
  }
  update();
  setInterval(update, 1000);
}
 
// ---- TIMER ----
function startTimer() {
  elapsedSeconds = 0;
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    const m = Math.floor(elapsedSeconds / 60);
    const s = String(elapsedSeconds % 60).padStart(2, '0');
    document.getElementById('game-timer').textContent = m + ':' + s;
  }, 1000);
}
 
function stopTimer() {
  clearInterval(timerInterval);
}
 
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = String(secs % 60).padStart(2, '0');
  return m + ':' + s;
}
 
// ---- SUBMISSION ----
function submitMCQ(selected) {
  if (gameOver || gameWon) return;
  attempts++;
  const correct = selected === currentQuestion.answer;
  const btn = document.querySelector('.mcq-btn[data-val="' + selected + '"]');
  if (correct) {
    btn.classList.add('correct');
    handleCorrect();
  } else {
    btn.classList.add('wrong');
    addAttemptRow(selected, false);
    handleWrong();
  }
}
 
function submitNumerical() {
  if (gameOver || gameWon) return;
  const input = document.getElementById('num-answer');
  const raw = input.value.trim();
  if (!raw) return;
  const userVal = parseFloat(raw);
  const correctVal = parseFloat(currentQuestion.answer);
  const tol = currentQuestion.tolerance || 0;
  attempts++;
  if (!isNaN(userVal) && Math.abs(userVal - correctVal) <= tol) {
    input.classList.add('correct');
    addAttemptRow(raw, true);
    handleCorrect();
  } else {
    input.classList.add('wrong');
    input.value = '';
    setTimeout(() => input.classList.remove('wrong'), 600);
    addAttemptRow(raw, false);
    handleWrong();
  }
}
 
function addAttemptRow(val, correct) {
  const history = document.getElementById('attempt-history');
  const row = document.createElement('div');
  row.className = 'attempt-row';
  row.innerHTML =
    '<span class="attempt-icon">' + (correct ? '✅' : '❌') + '</span>' +
    '<span class="attempt-val">' + val + '</span>' +
    '<span class="' + (correct ? 'attempt-result-correct' : 'attempt-result-wrong') + '">' + (correct ? 'Correct!' : 'Incorrect') + '</span>';
  history.appendChild(row);
}
 
// ---- CORRECT ----
function handleCorrect() {
  stopTimer();
  gameWon = true;
  const newStreak = incrementStreak();
  document.getElementById('streak-display').textContent = '🔥 ' + newStreak;
  localStorage.setItem('certle_played_date', new Date().toDateString());
  localStorage.setItem('certle_today_result', 'won');
  const msg = WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)];
  document.getElementById('win-emoji').textContent = msg.emoji;
  document.getElementById('win-title').textContent = msg.title;
  document.getElementById('win-msg').textContent = msg.msg;
  document.getElementById('win-time').textContent = formatTime(elapsedSeconds);
  document.getElementById('win-attempts').textContent = attempts + '/3';
  document.getElementById('win-streak').textContent = newStreak;
  const seed = new Date().toDateString().split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const percentile = 40 + (seed % 55);
  const pMsg = PERCENTILE_MESSAGES[Math.floor(Math.random() * PERCENTILE_MESSAGES.length)](percentile);
  document.getElementById('win-percentile').innerHTML = pMsg;
  updateYourLBRow(true, formatTime(elapsedSeconds));
  setTimeout(() => showPopup('win-popup'), 600);
}
 
// ---- WRONG ----
function handleWrong() {
  lives--;
  const allLives = document.querySelectorAll('.life:not(.lost)');
  if (allLives.length > 0) {
    const toLose = allLives[allLives.length - 1];
    toLose.classList.add('shake');
    setTimeout(() => { toLose.classList.remove('shake'); toLose.classList.add('lost'); }, 400);
  }
  document.getElementById('attempts-left').textContent = lives === 0 ? 'No lives left' : lives + ' remaining';
  if (lives <= 0) {
    stopTimer();
    gameOver = true;
    localStorage.setItem('certle_played_date', new Date().toDateString());
    localStorage.setItem('certle_today_result', 'lost');
    resetStreak();
    document.getElementById('streak-display').textContent = '🔥 0';
    updateYourLBRow(false, null);
    const msg = GAMEOVER_MESSAGES[Math.floor(Math.random() * GAMEOVER_MESSAGES.length)];
    document.getElementById('gameover-title').textContent = msg.title;
    document.getElementById('gameover-msg').textContent = msg.msg;
    setTimeout(() => showPopup('gameover-popup'), 500);
  } else {
    const msg = FAILURE_MESSAGES[Math.floor(Math.random() * FAILURE_MESSAGES.length)];
    document.getElementById('wrong-emoji').textContent = msg.emoji;
    document.getElementById('wrong-title').textContent = msg.title;
    document.getElementById('wrong-msg').textContent = msg.msg;
    const livesLeft = document.getElementById('popup-lives-left');
    livesLeft.innerHTML = Array.from({ length: lives }, () => '<span style="font-size:1.2rem;color:var(--gold)">∠</span>').join('');
    setTimeout(() => showPopup('wrong-popup'), 400);
  }
}
 
// ---- LEADERBOARD ----
function updateYourLBRow(won, timeStr) {
  document.querySelectorAll('.lb-you-row').forEach(row => {
    const statusEl = row.querySelector('.lb-status');
    if (won) {
      statusEl.textContent = '✓ ' + timeStr;
      statusEl.className = 'lb-status lb-correct';
    } else {
      statusEl.textContent = '✗ No lives';
      statusEl.className = 'lb-status lb-wrong';
    }
  });
}
 
function switchLB(tab) {
  document.getElementById('lb-friends').classList.toggle('hidden', tab !== 'friends');
  document.getElementById('lb-national').classList.toggle('hidden', tab !== 'national');
  document.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('lb-tab-active'));
  event.target.classList.add('lb-tab-active');
}
 
// ---- SOLUTION ----
function showSolution() {
  const q = currentQuestion;
  if (!q) return;
  const body = document.getElementById('solution-body');
  body.innerHTML = q.solution.map(s =>
    '<div class="sol-step">' +
    '<span class="sol-num">' + s.step + '</span>' +
    '<div class="sol-text"><p>' + s.text + '</p>' +
    (s.formula ? '<code class="sol-formula">' + s.formula + '</code>' : '') +
    '</div></div>'
  ).join('');
  document.getElementById('solution-panel').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
 
function hideSolution() {
  document.getElementById('solution-panel').classList.add('hidden');
  document.body.style.overflow = '';
}
 
// ---- SHARE ----
function shareResult() {
  const streak = getStreak();
  const hearts = '∠'.repeat(lives) + '✗'.repeat(3 - lives);
  const text = '∠ CERTLE — ' + new Date().toLocaleDateString('en-IE') + '\n' + hearts + '\nSolved in ' + formatTime(elapsedSeconds) + ' | Streak: 🔥' + streak + '\nthe-right-angle.vercel.app/certle.html';
  if (navigator.share) {
    navigator.share({ text });
  } else {
    navigator.clipboard.writeText(text).then(() => alert('Result copied to clipboard!'));
  }
}
 
// ---- POPUPS ----
function showPopup(id) {
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
 
function closePopup(id) {
  document.getElementById(id).classList.add('hidden');
  document.body.style.overflow = '';
}
 
document.querySelectorAll('.popup-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay && overlay.id === 'wrong-popup') closePopup('wrong-popup');
  });
});
 
// ---- STREAK ----
function getStreak() {
  return parseInt(localStorage.getItem('certle_streak') || '0');
}
 
function incrementStreak() {
  const lastPlayed = localStorage.getItem('certle_last_won');
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  let streak = getStreak();
  if (lastPlayed === yesterday) {
    streak += 1;
  } else if (lastPlayed === today) {
    // already incremented
  } else {
    streak = 1;
  }
  localStorage.setItem('certle_streak', streak);
  localStorage.setItem('certle_last_won', today);
  return streak;
}
 
function resetStreak() {
  localStorage.setItem('certle_streak', '0');
}
 
// ---- DEV RESET (remove before launch) ----
function devReset() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.replace(window.location.pathname);
}
 
