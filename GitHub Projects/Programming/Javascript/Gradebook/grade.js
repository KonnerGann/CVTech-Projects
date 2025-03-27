function Calculate() {
    //Variables//
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let grade1 = document.getElementById("grade1").value
    let grade2 = document.getElementById("grade2").value
    let grade3 = document.getElementById("grade3").value
    //display//
    Display(firstName,lastName,grade1,grade2,grade3,Average(grade1,grade2,grade3),LetterGrade(Average(grade1,grade2,grade3)))
    }
function Average(grade1,grade2,grade3)
    {let average = ((parseInt(grade1) + parseInt(grade2) + parseInt(grade3)) / 3)
        return average}
function LetterGrade (average) { let letterGrade
        if (average < 60) {letterGrade = "F"} 
        else if (average < 70) {letterGrade = "D"} 
        else if (average < 80) {letterGrade = "C"}
        else if (average < 80) {letterGrade = "C"}
        else if (average < 90) {letterGrade = "B"}
        else if (average < 100) {letterGrade = "A"}
    return letterGrade}
function Display(firstName,lastName,grade1,grade2,grade3,average,letterGrade) {
    document.getElementById("fullName").textContent = `Full Name: ${firstName} ${lastName}`
    document.getElementById("grade1R").textContent = `Grade 1: ${grade1}`
    document.getElementById("grade2R").textContent = `Grade 2: ${grade2}`
    document.getElementById("grade3R").textContent = `Grade 3: ${grade3}`
    document.getElementById("averageR").textContent = `Average: ${average}`
    document.getElementById("letterGradeR").textContent = `Letter Grade: ${letterGrade}`}