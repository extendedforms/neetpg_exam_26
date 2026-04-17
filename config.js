// ==============================
// config.js
// ==============================

// ✅ Google Apps Script Web App URL
window.API_URL =
  "https://script.google.com/macros/s/AKfycbxvFcqf2Txf0cOVKL5t-e7T6tZdY6AL6WpMHmKyZiYEer-yyjWpe2spqCQpUTgQTkCX/exec";

// ✅ Exam settings
window.EXAM_DURATION_MIN = 180;
window.MARKS_CORRECT = 4;
window.MARKS_WRONG = -1;

// ==============================
// ✅ EXAM SCHEDULE (IST)
// ==============================
window.EXAM_TZ = "Asia/Kolkata";

// ✅ Fixed window (IST)
window.EXAM_START_IST = "2026-04-15T10:00:00+05:30";
window.EXAM_END_IST   = "2026-04-17T20:00:00+05:30";

// Parsed milliseconds (used by pages)
window.EXAM_START_MS = Date.parse(window.EXAM_START_IST);
window.EXAM_END_MS   = Date.parse(window.EXAM_END_IST);

// ✅ Show time in IST anywhere
window.formatIST = function formatIST(dateOrMs = Date.now()) {
  const d = typeof dateOrMs === "number" ? new Date(dateOrMs) : dateOrMs;
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: window.EXAM_TZ,
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(d);
};

// ✅ Check if now is within exam window
window.isWithinExamWindow = function isWithinExamWindow(nowMs = Date.now()) {
  if (!Number.isFinite(window.EXAM_START_MS) || !Number.isFinite(window.EXAM_END_MS)) return true;
  return nowMs >= window.EXAM_START_MS && nowMs <= window.EXAM_END_MS;
};
