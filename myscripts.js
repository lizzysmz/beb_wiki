function buttonFunction(button) {
    if (button == "birthday") {
        document.getElementById("dialogue").innerText = "My birthday's on 27th December, the same day as Hannah!";
    }
    if (button == "animal") {
        document.getElementById("dialogue").innerText = "Cats ^_^";
    }
    if (button == "hobbies") {
        document.getElementById("dialogue").innerText = "Ice skating~ I'm Level 4 Skate Excellent certified, not to brag...";
    }
    if (button == "close") {
        document.getElementById("dialogue").innerText = "( I don't think that button does anything... )";
    }
    if (button == "max") {
        document.getElementById("dialogue").innerText = "Sorry, she hasn't worked out how to make this box bigger yet";
    }
    if (button == "min") {
        document.getElementById("dialogue").innerText = "Um, that button is under construction at the moment";
    }
}
