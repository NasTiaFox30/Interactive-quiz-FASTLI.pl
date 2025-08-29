export const questions = [
{
id: "service",
text: "Jakiej usługi potrzebujesz?",
options: [
{ text: "Naprawa wody", category: "hydraulik", points: 2 },
{ text: "Naprawa prądu", category: "elektryk", points: 2 },
{ text: "Małe naprawy w domu", category: "złota_rączka", points: 2 },
{ text: "Strzyżenie", category: "fryzjer", points: 2 },
{ text: "Prace w ogrodzie", category: "ogrodnik", points: 2 },
],
},
{
id: "speed",
text: "Jak szybko potrzebujesz usługi?",
options: [
{ text: "Natychmiast", value: "natychmiast" },
{ text: "Do 2 dni", value: "szybko" },
{ text: "Elastycznie", value: "elastyczny" },
],
},
{
id: "budget",
text: "Jaki jest Twój budżet?",
options: [
{ text: "Niski", value: "niski" },
{ text: "Średni", value: "średni" },
{ text: "Wysoki", value: "wysoki" },
],
},
];