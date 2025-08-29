import { specialists } from "./data/specialists";

export function calculateResult(answers) {
const scoreMap = {};

  // points system 
answers.forEach((a) => {
if (a.category) {
scoreMap[a.category] = (scoreMap[a.category] || 0) + (a.points || 0);
}
});

  
// RULES based on speed and budget
const speed = answers.find((a) => a.key === "speed")?.value;
const budget = answers.find((a) => a.key === "budget")?.value;

// RULES
if (speed === "natychmiast" && budget === "niski") {
scoreMap["złota_rączka"] = (scoreMap["złota_rączka"] || 0) + 3;
}

if (speed === "natychmiast" && budget === "wysoki") {
scoreMap["hydraulik"] = (scoreMap["hydraulik"] || 0) + 2;
scoreMap["elektryk"] = (scoreMap["elektryk"] || 0) + 2;
}

if (speed === "szybko" && budget === "średni") {
scoreMap["hydraulik"] = (scoreMap["hydraulik"] || 0) + 1;
scoreMap["elektryk"] = (scoreMap["elektryk"] || 0) + 1;
}

if (speed === "elastyczny" && budget === "wysoki") {
scoreMap["fryzjer"] = (scoreMap["fryzjer"] || 0) + 2;
scoreMap["ogrodnik"] = (scoreMap["ogrodnik"] || 0) + 2;
}


return keys.reduce((a, b) => (scoreMap[a] > scoreMap[b] ? a : b));
}