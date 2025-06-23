

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const VALID_STACKS = ["backend", "frontend"];
const VALID_LEVELS = ["debug", "info", "warn", "error", "fatal"];
const BACKEND_PACKAGES = ["cache", "controller", "cron_job", "db", "domain", "handler", "repository", "route", "service"];
const SHARED_PACKAGES = ["auth", "config", "middleware", "utils"];

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjAzMDMxMjQwNzIxQHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc1MDY2NTI5OSwiaWF0IjoxNzUwNjY0Mzk5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDc4OTU2OGItMzA2Mi00YmY0LThiM2UtNzNmZjdlY2FiNzFkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaGltYW5zaHUga3VtYXIgZ3VwdGEiLCJzdWIiOiI5YzJkOGUxMy03NzJhLTQ0YmEtODlmYy02ZGEwNjQwNDY1YjgifSwiZW1haWwiOiIyMjAzMDMxMjQwNzIxQHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJoaW1hbnNodSBrdW1hciBndXB0YSIsInJvbGxObyI6IjIyMDMwMzEyNDA3MjEiLCJhY2Nlc3NDb2RlIjoiVFJ6Z1dNIiwiY2xpZW50SUQiOiI5YzJkOGUxMy03NzJhLTQ0YmEtODlmYy02ZGEwNjQwNDY1YjgiLCJjbGllbnRTZWNyZXQiOiJ0cWR1ZUFwQ1NERVd2UVlwIn0.8lmURTOWxQqu7_ZflRRttTqS2zjmuXoH0bhxyek59Tw";

function isValidPackage(stack, pkg) {
  if (stack === "backend") {
    return [...BACKEND_PACKAGES, ...SHARED_PACKAGES].includes(pkg);
  }
  return false;
}

async function log(stack, level, pkg, message) {
  const url = "http://20.244.56.144/evaluation-service/logs";

  if (!VALID_STACKS.includes(stack)) {
    console.error(" Invalid stack:", stack);
    return;
  }

  if (!VALID_LEVELS.includes(level)) {
    console.error("Invalid level:", level);
    return;
  }

  if (!isValidPackage(stack, pkg)) {
    console.error(`Invalid package "${pkg}" for backend`);
    return;
  }

  const body = {
    stack,
    level,
    package: pkg,
    message,
  };

  try {
    console.log("Sending log with headers:");
    console.log({
      "Content-Type": "application/json",
      Authorization: AUTH_TOKEN,
    });

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Log Sent:", data.logID);
    } else {
      console.error("Log Failed:", res.status, data.message);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

module.exports = { log };
