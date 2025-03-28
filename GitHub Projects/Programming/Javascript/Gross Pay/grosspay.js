function Calculator() {
    let hrsWorked = document.getElementById("hrsWorked").value
    let hrlyWage = document.getElementById("hrlyWage").value
    let grossPay
    if (hrsWorked <= 40) (grossPay = parseInt(hrsWorked) * parseInt(hrlyWage))
        else if (hrsWorked > 40)(grossPay = (40 * hrlyWage) + ((hrsWorked - 40) * (hrlyWage * 1.5)))
        document.getElementById("result").textContent = `your gross pay would be ${grossPay}`
        }
