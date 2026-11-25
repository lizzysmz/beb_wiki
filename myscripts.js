let dialogueRunning = false;
let currentBeb = "lizzy";
let pageLoadDialogue = "Welcome! Come meet the bebs : D"

function onLoadLayout(){
    newDialogue();
    document.getElementById("dialogueButton1").textContent = lizzyObject.buttonQuestion1;
            document.getElementById("dialogueButton2").textContent = lizzyObject.buttonQuestion2;
            document.getElementById("dialogueButton3").textContent = lizzyObject.buttonQuestion3;
}

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
        if (button == "dialogue1") {
            typingDialogue(object.buttonDialogue1);
        };
        if (button == "dialogue2") {
            typingDialogue(object.buttonDialogue2)
        };
        if (button == "dialogue3") {
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
            document.getElementById("dialogueButton1").textContent = cesObject.buttonQuestion1;
            document.getElementById("dialogueButton2").textContent = cesObject.buttonQuestion2;
            document.getElementById("dialogueButton3").textContent = cesObject.buttonQuestion3;
            document.getElementById("pixel-art").src = cesObject.iconSrc;
            document.getElementById("pixel-art").alt = cesObject.iconAlt;
        }
        else if (person == "hannah"){
            document.getElementById("name").textContent = hannahObject.name;
            typingDialogue(hannahObject.startDialogue);
            document.getElementById("dialogueButton1").textContent = hannahObject.buttonQuestion1;
            document.getElementById("dialogueButton2").textContent = hannahObject.buttonQuestion2;
            document.getElementById("dialogueButton3").textContent = hannahObject.buttonQuestion3;
            document.getElementById("pixel-art").src = hannahObject.iconSrc;
            document.getElementById("pixel-art").alt = hannahObject.iconAlt;
        }
        else if (person == "lauren"){
            document.getElementById("name").textContent = laurenObject.name;
            typingDialogue(laurenObject.startDialogue);
            document.getElementById("dialogueButton1").textContent = laurenObject.buttonQuestion1;
            document.getElementById("dialogueButton2").textContent = laurenObject.buttonQuestion2;
            document.getElementById("dialogueButton3").textContent = laurenObject.buttonQuestion3;
            document.getElementById("pixel-art").src = laurenObject.iconSrc;
            document.getElementById("pixel-art").alt = laurenObject.iconAlt;
        }
        else if (person == "julia"){
            document.getElementById("name").textContent = juliaObject.name;
            typingDialogue(juliaObject.startDialogue);
            document.getElementById("dialogueButton1").textContent = juliaObject.buttonQuestion1;
            document.getElementById("dialogueButton2").textContent = juliaObject.buttonQuestion2;
            document.getElementById("dialogueButton3").textContent = juliaObject.buttonQuestion3;
            document.getElementById("pixel-art").src = juliaObject.iconSrc;
            document.getElementById("pixel-art").alt = juliaObject.iconAlt;
        }
        else if (person == "lizzy"){
            document.getElementById("name").textContent = lizzyObject.name;
            typingDialogue(lizzyObject.startDialogue);
            document.getElementById("dialogueButton1").textContent = lizzyObject.buttonQuestion1;
            document.getElementById("dialogueButton2").textContent = lizzyObject.buttonQuestion2;
            document.getElementById("dialogueButton3").textContent = lizzyObject.buttonQuestion3;
            document.getElementById("pixel-art").src = lizzyObject.iconSrc;
            document.getElementById("pixel-art").alt = lizzyObject.iconAlt;
        };
    };
};

class personName{
    constructor(name, iconSrc, iconAlt, startDialogue, buttonQuestion1, buttonDialogue1, buttonQuestion2, buttonDialogue2, buttonQuestion3, buttonDialogue3, closeDialogue, maxDialogue, minDialogue){
        this.name = name;
        this.iconSrc = iconSrc;
        this.iconAlt = iconAlt;
        this.startDialogue = startDialogue;
        this.buttonQuestion1 = buttonQuestion1;
        this.buttonDialogue1 = buttonDialogue1;
        this.buttonQuestion2 = buttonQuestion2;
        this.buttonDialogue2 = buttonDialogue2;
        this.buttonQuestion3 = buttonQuestion3;
        this.buttonDialogue3 = buttonDialogue3;
        this.closeDialogue = closeDialogue;
        this.maxDialogue = maxDialogue;
        this.minDialogue = minDialogue;
    };
};

/* Beb Objects */
const hannahObject = new personName(
    "Hannah", 
    "pixel-art/hannah-img.png",
    "Pixel art of Hannah",
    "Hi~ What can I do for you? ", 
    "Do you like Monster Hunter?",
    "It's pretty good I guess... (she has 821 hours on Steam btw).", 
    "Any show recommendations?",
    "Please for the love of god watch Frieren. It's so good and these idiots aren't taking my recommendation :'(",
    "Lil guys?",
    "I have many... but it's still not enough... it'll never be enough...", 
    "Why are you trying to close me : (", 
    "... you do realise those don't work, right?", 
    "..."
);

const cesObject = new personName(
    "Ces", 
    "pixel-art/ces-img.png",
    "Pixel art of Ces",
    "Hi I'm Ces! What do you want to know?",
    "Montpelier cats...",
    "I thought you'd never ask! There's Pixie, who's a little sphinx cat, and Sadie who may or may not give you fleas, and Misty who is fluffy and...", 
    "You ice skate, huh?",
    "That's a massive understandment. I'm Level 4 Skate Excellent certified. You better get out of my way when you see me at the rink...", 
    "Boy's Planet",
    "빛나, 빛나, 빛나, 빛나, 빛나!", 
    "( I don't think that button does anything... )", 
    "Sorry, she hasn't worked out how to make this box bigger yet.", 
    "Um, that button is under construction at the moment."
);

const juliaObject = new personName(
    "Julia", 
    "pixel-art/julia-img.png",
    "Pixel art of Julia",
    "Hi I'm Julia Joby Joobla Gazza Ellis.", 
    "Julia Joby Joobla Gazza Ellis...?",
    "Did I fucking stutter? : )", 
    "I hear you make quizzes?",
    "I am the ultimate quiz master. If you can't distinguish the year by my eyebrows, you're in big trouble...",
    "Tell me a fact about you",
    "I've seen 114 movies so far this year, which is one every 3 days! I guess you could say I like movies : )", 
    "Joby!", 
    "Joobla!", 
    "Gazza!"
);

const laurenObject = new personName(
    "Lauren", 
    "pixel-art/lauren-img.png",
    "Pixel art of Lauren",
    "*In a fantastic Australian accent* Hi there, Lauren here! Shrimp on the barbie! ", 
    "What's with the accent?",
    "*In a flawless Australian accent* I don't know what you're talking about, mate. Emma!", 
    "What's your top emoji?",
    "I don't think I know it off the top of my head *tomato emoji*",
    "... Ginger?",
    "Is that seriously a question...", 
    "There's no escape.", 
    "Stop that.", 
    "That won't do anything."
);

const lizzyObject = new personName(
    "Lizzy", 
    "pixel-art/lizzy-img.png",
    "Pixel art of Lizzy",
    "Back again, huh? What do you want to know?", 
    "What is 'Meet the Bebs'?", 
    "It's a little project I made for my friends! I'm learning web development and wanted a fun project to work on.", 
    "Who is your secret santa?",
    "That's supposed to be a secret you know... I'll give you a hint though... it's someone on this screen (I've said too much).",
    ". . .",
    "If you don't say something I'm going to start talking about Taylor Swift.", 
    "Hey! Stop pressing random buttons and exposing that they don't do anything!", 
    "I don't know how to make that button work, okay!?", 
    "(Maybe if I stay very still they won't ask why the button isn't working)."
);