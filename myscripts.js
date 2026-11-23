let dialogueRunning = false;
let currentBeb = "lizzy";

function newDialogue(button) {    
    if (dialogueRunning == false){
        switch(currentBeb){
            case "ces":
                dialogueOptions(cesObject);
                break;
            case "hannah":
                dialogueOptions(hannahObject);
                break;
            case "lauren":
                dialogueOptions(laurenObject);
                break;
            case "julia":
                dialogueOptions(juliaObject);
                break;
            case "lizzy":
                dialogueOptions(lizzyObject);
                break;
        };
    };

    function dialogueOptions(object){
        if (button == "birthday") {
            typingDialogue(object.buttonDialogue1);
        };
        if (button == "animal") {
            typingDialogue(object.buttonDialogue2)
        };
        if (button == "hobbies") {
            typingDialogue(object.buttonDialogue3);
        };
        if (button == "close") {
            typingDialogue(object.closeDialogue);
        };
        if (button == "max") {
                typingDialogue(object.maxDialogue);
        };
        if (button == "min") {
                typingDialogue(object.minDialogue);
        };
    };
};


function typingDialogue(newDialogue){
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
        }; 
    };
    
    function enableButton(){
        dialogueRunning = false;
        
    };

    dialogueRunning = true;

    let index = -1;
    const speed = 60;
    const funcTime = (speed * newDialogue.length) + (speed * 2);

    typingAnimation(newDialogue);
    setTimeout(enableButton, funcTime);
};

function switchPersonButton(person){
    currentBeb = person;

    if (dialogueRunning == false){
        if (person == "ces"){
            document.getElementById("name").textContent = cesObject.name;
            typingDialogue(cesObject.startDialogue);
            document.getElementById("pixel-art").src = cesObject.icon;
        }
        else if (person == "hannah"){
            document.getElementById("name").textContent = hannahObject.name;
            typingDialogue(hannahObject.startDialogue);
            document.getElementById("pixel-art").src = hannahObject.icon;
        }
        else if (person == "lauren"){
            document.getElementById("name").textContent = laurenObject.name;
            typingDialogue(laurenObject.startDialogue);
            document.getElementById("pixel-art").src = laurenObject.icon;
        }
        else if (person == "julia"){
            document.getElementById("name").textContent = juliaObject.name;
            typingDialogue(juliaObject.startDialogue);
            document.getElementById("pixel-art").src = juliaObject.icon;
        }
        else if (person == "lizzy"){
            document.getElementById("name").textContent = lizzyObject.name;
            typingDialogue(lizzyObject.startDialogue);
            document.getElementById("pixel-art").src = lizzyObject.icon;
        };
    };
};

class personName{
    constructor(name, icon, startDialogue, buttonDialogue1, buttonDialogue2, buttonDialogue3, closeDialogue, maxDialogue, minDialogue){
        this.name = name;
        this.icon = icon;
        this.startDialogue = startDialogue;
        this.buttonDialogue1 = buttonDialogue1;
        this.buttonDialogue2 = buttonDialogue2;
        this.buttonDialogue3 = buttonDialogue3;
        this.closeDialogue = closeDialogue;
        this.maxDialogue = maxDialogue;
        this.minDialogue = minDialogue;
    };
};

/* Beb Objects */
const cesObject = new personName(
    "Ces", "pixel-art/ces-img.png",
    "Hi I'm Ces!",
    "My birthday's on 27th December, the same day as Hannah!", 
    "Cats ^_^", "Ice skating~ I'm Level 4 Skate Excellent certified, not to brag...", 
    "( I don't think that button does anything... )", 
    "Sorry, she hasn't worked out how to make this box bigger yet.", 
    "Um, that button is under construction at the moment."
);


const hannahObject = new personName(
    "Hannah", 
    "pixel-art/hannah-img.png",
    "Hannah start dialogue", 
    "Hannah dialogue 1", 
    "Hannah dialogue 2",
    "Hannah dialogue 3", 
    "Hannah close dialogue", 
    "Hannah max dialogue", 
    "Hannah min dialogue"
);

const laurenObject = new personName(
    "Lauren", 
    "pixel-art/lauren-img.png",
    "Lauren start dialogue", 
    "Lauren dialogue 1", 
    "Lauren dialogue 2",
    "Lauren dialogue 3", 
    "Lauren close dialogue", 
    "Lauren max dialogue", 
    "Lauren min dialogue"
);

const juliaObject = new personName(
    "Julia", 
    "pixel-art/julia-img.png",
    "Julia start dialogue", 
    "Julia dialogue 1", 
    "Julia dialogue 2",
    "Julia dialogue 3", 
    "Julia close dialogue", 
    "Julia max dialogue", 
    "Julia min dialogue"
);

const lizzyObject = new personName(
    "Lizzy", 
    "pixel-art/lizzy-img.png",
    "Lizzy start dialogue", 
    "Lizzy dialogue 1", 
    "Lizzy dialogue 2",
    "Lizzy dialogue 3", 
    "Lizzy close dialogue", 
    "Lizzy max dialogue", 
    "Lizzy min dialogue"
);