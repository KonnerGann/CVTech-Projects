document.getElementById("numberForm")
.addEventListener("submit", function (event) {
    event.preventDefault();
    const number = parseInt(document.getElementById("number").value);
    const resultElement = document.getElementById("result");
    if (number % 2 === 0) {resultElement.textContent = `${number} is even.`;} else 
    {resultElement.textContent = `${number} is odd.`;}
});