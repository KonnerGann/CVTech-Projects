document.getElementById("Incrementor").addEventListener("submit", function (event) {event.preventDefault();
// Variables
const start = parseInt(document.getElementById("start").value);
const max = parseInt(document.getElementById("max").value);
const increment = parseInt(document.getElementById("increment").value);
let Result = document.getElementById("result");
let current = start;
let output = "Numbers: ";
// Loop
if (start < max) {
while (current <= max) {
output += current + " ";
current += increment;}} 
else if (start > max) {
while (current >= max) {
output += current + " ";
current -= increment;}}
Result.innerHTML = `${output}`;});