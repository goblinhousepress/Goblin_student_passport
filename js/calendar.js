function planCalendar(title, minutes) {
  const now = new Date();
  const start = new Date(now.getTime() + 60 * 60 * 1000);
  const end = new Date(start.getTime() + minutes * 60 * 1000);

  function formatDate(date) {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  }

  const calendarURL =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent("Lexical Worlds — " + title) +
    "&details=" + encodeURIComponent("Lexical Worlds learning mission. Estimated time: " + minutes + " minutes.") +
    "&dates=" + formatDate(start) + "/" + formatDate(end);

  window.open(calendarURL, "_blank", "noopener,noreferrer");
}
