let dialogueRunning = false;
let currentBeb = "lizzy";
let pageLoadDialogue = "Welcome! Come meet the bebs : )"

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
        if (button == null) {
            typingDialogue(pageLoadDialogue);
        };
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
    const speed = 50;
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
            document.getElementById("pixel-art").src = cesObject.iconSrc;
            document.getElementById("pixel-art").alt = cesObject.iconAlt;
        }
        else if (person == "hannah"){
            document.getElementById("name").textContent = hannahObject.name;
            typingDialogue(hannahObject.startDialogue);
            document.getElementById("pixel-art").src = hannahObject.iconSrc;
            document.getElementById("pixel-art").alt = hannahObject.iconAlt;
        }
        else if (person == "lauren"){
            document.getElementById("name").textContent = laurenObject.name;
            typingDialogue(laurenObject.startDialogue);
            document.getElementById("pixel-art").src = laurenObject.iconSrc;
            document.getElementById("pixel-art").alt = laurenObject.iconAlt;
        }
        else if (person == "julia"){
            document.getElementById("name").textContent = juliaObject.name;
            typingDialogue(juliaObject.startDialogue);
            document.getElementById("pixel-art").src = juliaObject.iconSrc;
            document.getElementById("pixel-art").alt = juliaObject.iconAlt;
        }
        else if (person == "lizzy"){
            document.getElementById("name").textContent = lizzyObject.name;
            typingDialogue(lizzyObject.startDialogue);
            document.getElementById("pixel-art").src = lizzyObject.iconSrc;
            document.getElementById("pixel-art").alt = lizzyObject.iconAlt;
        };
    };
};

class personName{
    constructor(name, iconSrc, iconAlt, startDialogue, buttonDialogue1, buttonDialogue2, buttonDialogue3, closeDialogue, maxDialogue, minDialogue){
        this.name = name;
        this.iconSrc = iconSrc;
        this.iconAlt = iconAlt;
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
    "Ces", 
    "pixel-art/ces-img.png",
    "Pixel art of Ces",
    "Hi I'm Ces!",
    "My birthday's on 27th December, the same day as Hannah!", 
    "Cats ^_^", 
    "Ice skating~ I'm Level 4 Skate Excellent certified, not to brag...", 
    "( I don't think that button does anything... )", 
    "Sorry, she hasn't worked out how to make this box bigger yet.", 
    "Um, that button is under construction at the moment."
);


const hannahObject = new personName(
    "Hannah", 
    "pixel-art/hannah-img.png",
    "Pixel art of Hannah",
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
    "Pixel art of Lauren",
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
    "Pixel art of Julia",
    "Hi I'm Julia Joby Joobla Gazza Ellis.", 
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
    "Pixel art of Lizzy",
    "Lizzy start dialogue", 
    "Lizzy dialogue 1", 
    "Lizzy dialogue 2",
    "Lizzy dialogue 3", 
    "Lizzy close dialogue", 
    "Lizzy max dialogue", 
    "Lizzy min dialogue"
);