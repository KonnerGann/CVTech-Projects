function Store() {
        //Adding new cells
    let phoneTable = document.getElementById("phoneTable").rows.length;
    let rows = phoneTable++;
    let row = document.getElementById("phoneTable").insertRow(rows);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    //First Name 
    const firstName = (document.getElementById("FirstName").value);
    cell1.innerHTML = firstName;
    //Last Name
    const lastName = document.getElementById("LastName").value;
    cell2.innerHTML = lastName;
    //Phone Number
    const phoneNumber = document.getElementById("PhoneNumber").value;
    cell3.innerHTML = phoneNumber;}
