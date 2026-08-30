function startMission(title) {
  const move = (STUDENT.nextMoves || []).find(m => m.title === title);
  if (move && move.link) {
    window.open(move.link, "_blank", "noopener,noreferrer");
    return;
  }
  alert("This mission is not linked yet. Your teacher will add the activity here.");
}

function locked(feature) {
  alert(feature + " is locked in Beta. Your teacher will activate it when it is ready.");
}

function openMap() { window.location.href = "maps/worlds.html"; }
function openQuests() { window.location.href = "maps/quests.html"; }
function openToolkits() { window.location.href = "maps/toolkits.html"; }
function openFoundation() { locked("Foundation Repair"); }
function openGrammarMap() { locked("The complete Grammar Map"); }
function openSkillsMap() { locked("The complete Skills Map"); }
function openTools() { locked("Learning Tools"); }

function openLibrary(topic) {
  const topics = {
    memory: "Memory & Brain — reference material coming soon.",
    vocabulary: "Vocabulary — reference material coming soon.",
    notes: "Note-taking — reference material coming soon.",
    revision: "Revision — reference material coming soon.",
    executive: "Executive Function — reference material coming soon."
  };
  alert(topics[topic] || "This library item is not ready yet.");
}

function help(type) {
  const responses = {
    understand: "Try asking your teacher or use the Learning Library when it is unlocked.",
    remember: "The Memory & Brain tools are coming soon.",
    say: "Try the relevant Toolkit when it is unlocked.",
    write: "Writing support will be connected here later.",
    learn: "Learning strategies will be connected here later.",
    start: "Pick one small Next Move. You can also put it in Google Calendar.",
    stuck: "You're stuck. That's useful information — ask your teacher for help."
  };
  alert(responses[type] || "Ask your teacher for help.");
}
