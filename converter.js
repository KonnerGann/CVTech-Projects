function toCelcius() 
    {let ogTemp = document.getElementById("temp").value;
    let output = (ogTemp - 32) * (5/9)
    document.getElementById("result").textContent = `${ogTemp}F is ${output}C.`;}
function toKelvin() 
    {let ogTemp = document.getElementById("temp").value;
    let output = (ogTemp - 32) * (5/9) + 273.15;
    document.getElementById("result").textContent = `${ogTemp}F is ${output}K.`;}