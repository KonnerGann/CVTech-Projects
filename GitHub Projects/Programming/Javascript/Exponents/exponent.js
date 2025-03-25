function exponentiate() {
    //Variables//
    let Coefficient = document.getElementById("coefficient").value
    let Exponent = document.getElementById("exponent").value
    //calculations//
    let Output = (Coefficient ** Exponent)
    document.getElementById("result").textContent = `${Coefficient} to the power of ${Exponent} is ${Output}.`
}
