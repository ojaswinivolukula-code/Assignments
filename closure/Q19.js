// 1.
let age = 20;

// 2.
function displayAge() {
    console.log("Age inside displayAge():", age);
}

// 3. 
function changeAge() {
    age = 25;
    console.log("Age after changeAge() updates it:", age);
}


displayAge();
changeAge();
displayAge(); 
