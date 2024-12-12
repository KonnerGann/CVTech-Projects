document.getElementById("PhonebookForm").addEventListener("submit", function (event) 
{
    event.preventDefault();
    //First Name 
    const firstName = (document.getElementById("FirstName").value);
    const firstNameResult = document.getElementById("FirstNameResult");
    if (toString(firstName)) {firstNameResult.textContent = `${firstName}`;}
    //Last Name
    const lastName = document.getElementById("LastName").value;
    const lastNameResult = document.getElementById("LastNameResult");
    if (toString(lastName)) {lastNameResult.textContent = `${lastName}`;}
    //Phone Number
    const phoneNumber = document.getElementById("PhoneNumber").value;
    const phoneResult = document.getElementById("PhoneResult");
    if (toString(phoneNumber)) {phoneResult.textContent = `${phoneNumber}`;}});
