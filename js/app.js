document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("student-name").textContent = STUDENT.name;
  document.getElementById("student-avatar").textContent = STUDENT.avatar;

  const rank = document.getElementById("student-rank");
  const title = document.getElementById("student-title");
  const communication = document.getElementById("student-communication-power");
  const cefr = document.getElementById("student-cefr");

  rank.textContent = "🔒 Rank — locked for beta";
  title.textContent = "🔒 Title — locked for beta";
  communication.textContent = "🔒 Communication Power — locked for beta";
  cefr.textContent = "🔒 CEFR tracking — locked for beta";

  const stats = document.querySelectorAll(".stat-value");
  stats.forEach((el) => el.textContent = "🔒");
  document.getElementById("last-activity").textContent = "🔒";
  document.getElementById("week-time").textContent = "🔒";
  document.getElementById("month-time").textContent = "🔒";

  const moves = document.querySelectorAll(".move");
  STUDENT.nextMoves.forEach((move, i) => {
    const card = moves[i];
    if (!card) return;
    card.querySelector(".move-title").textContent = move.title;
    card.querySelector(".move-meta").innerHTML = `⏱ ${move.minutes} min &nbsp; | &nbsp; 🧠 Brain Load: ${move.brain} &nbsp; | &nbsp; ⚡ ${move.note}`;
    const start = card.querySelector(".start-button");
    if (start) start.onclick = () => startMission(move.title);
    const plan = card.querySelector("[data-calendar]");
    if (plan) plan.onclick = () => planCalendar(move.title, move.minutes);
  });
});
