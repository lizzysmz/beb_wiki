let dialogue_running = false;

function newDialogue(button, buttonId) {
    if (button == "birthday") {
        if (dialogue_running == false){
            typingDialogue(CesObject.buttonDialogue1, buttonId);
        };
    }
    if (button == "animal") {
        if (dialogue_running == false){
            typingDialogue(CesObject.buttonDialogue2, buttonId)
        };
    }
    if (button == "hobbies") {
        if (dialogue_running == false){
            typingDialogue(CesObject.buttonDialogue3, buttonId);
        };
    }
    if (button == "close") {
        if (dialogue_running == false){
            typingDialogue(CesObject.closeDialogue, buttonId);
        };
    }
    if (button == "max") {
        if (dialogue_running == false){
            typingDialogue(CesObject.maxDialogue, buttonId);
        };
    }
    if (button == "min") {
        if (dialogue_running == false){
            typingDialogue(CesObject.minDialogue, buttonId);
        };
    }
}

function typingDialogue(newDialogue, buttonId){
    function typingAnimation(){
        if (index>-1 && index < newDialogue.length){
            document.getElementById('dialogue').textContent += newDialogue.charAt(index);
            index++;
            console.log(newDialogue.charAt(index))
            setTimeout(typingAnimation, speed);
            
        }
        else if (index == -1){
            document.getElementById('dialogue').textContent = "";
            index++;
            setTimeout(typingAnimation, speed);
        }
        
    };
    
    function enableButton(){
        dialogue_running = false;
        
    }

    dialogue_running = true;

    let index = -1;
    const speed = 60;
    const funcTime = (speed * newDialogue.length) + (speed * 2);

    typingAnimation(newDialogue);
    setTimeout(enableButton, funcTime);
}


class PersonName{
    constructor(name, buttonDialogue1, buttonDialogue2, buttonDialogue3, closeDialogue, maxDialogue, minDialogue){
        this.name = name;
        this.buttonDialogue1 = buttonDialogue1;
        this.buttonDialogue2 = buttonDialogue2;
        this.buttonDialogue3 = buttonDialogue3;
        this.closeDialogue = closeDialogue;
        this.maxDialogue = maxDialogue;
        this.minDialogue = minDialogue;
    }
}

/* Ces dialogue */
const CesObject = new PersonName(
    "Ces","My birthday's on 27th December, the same day as Hannah!", 
    "Cats ^_^", "Ice skating~ I'm Level 4 Skate Excellent certified, not to brag...", 
    "( I don't think that button does anything... )", 
    "Sorry, she hasn't worked out how to make this box bigger yet.", 
    "Um, that button is under construction at the moment.");