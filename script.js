window.onload = function() {
    animateCode();
    
}
window.addEventListener("scroll", function() {
    var aboutMeSection = document.getElementById("about-me-header")
    var learningSection = document.getElementById("learning-header")
    var projectSection = document.getElementById("project-header")
    // console.log(window.scrollY + ", " + projectSection.offsetHeight + ", " + projectSection.offsetTop)
    if(window.scrollY > (aboutMeSection.offsetTop - aboutMeSection.offsetHeight)) {
        animateAboutMe()
    }
    if(window.scrollY > (learningSection.offsetTop - learningSection.offsetHeight)) {
        animateLearningList()
    }
    if(window.scrollY > (projectSection.offsetTop - projectSection.offsetHeight - 300)) {
        animateProjects()
    }
})
let codeLineInput = document.getElementById("code-line-input")
codeLineInput.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        let inputValue = codeLineInput.value
        takeInCommand(inputValue)
    }
})

const timer = ms => new Promise(res => setTimeout(res, ms))
const timer2 = ms => new Promise(res => setTimeout(res, ms))
const timer3 = ms => new Promise(res => setTimeout(res, ms))
const timer4 = ms => new Promise(res => setTimeout(res, ms))

const funFacts = {
    "guitar": {
        topBar1: "fun_fact_1.txt",
        text: "I'm an avid guitar player, learning Ed Sheeran songs is what keeps me going!",
        topBar2: "guitar.png",
        img: './images/acoustic-guitar.png'
    },
    "basketball": {
        topBar1: "fun_fact_2.txt",
        text: "I love to play basketball, whether it'd be with a couple of friends at the park or on a intramural basketball team at college.",
        topBar2: "basketball.jpg",
        img: './images/acoustic-guitar.png'
    },
    "hiking": {
        topBar1: "fun_fact_hiking.txt",
        text: "Hiking, just like video games, is what keeps me social. Being able to exercise, conversate with people on a deeper level, and even see a great viewpoint at the end of it, is what makes hiking a great package deal for me.",
        topBar2: "hiking.jpg",
        img: './images/hiking.jpg'
    }
}


async function animateCode() {
    
    
    //Person writes Code 1
    for(i = 43; i >= 41; i--) {
        let currentCodeLine = document.getElementById("Vector_" + i)
        currentCodeLine.classList.add("typein")
        await timer(500)
    }
    //Stuck. Flips and goes to StackOverflow

    //Person & Hair
    let personElement = document.getElementById("Person")
    let hairElement = document.getElementById("Hair")
    personElement.classList.add("flip"); 
    hairElement.classList.add("flip");
    
    setTimeout(() => {
        let compMonitor = document.getElementById("Vector_28")
        compMonitor.classList.add("openBrowser")
        let stackOverflowPaths = document.getElementById("StackOverflow").childNodes
        for(i = 1; i <= 9; i+=2) {
            stackOverflowPaths[i].classList.add("typein")
        }
    }, 4000)
    setTimeout(() => {
        animateCode2()
    }, 9000)
}

async function animateCode2() {
    for(j = 40; j >= 30; j--) {
        let currentCodeLine = document.getElementById("Vector_" + j)
        currentCodeLine.classList.add("typein")
        await timer(250)
    }
}


var openedConsole = 0;
async function animateAboutMe() {
    let animateNumber;
    let inputElement = document.getElementById("about-me-input")
    if(openedConsole > 0) return;
    inputElement.value = ""
    
    for(animateNumber = 1; animateNumber < 13; animateNumber++) {
        let currentCodeLine = document.getElementById("am-line-" + animateNumber)
        currentCodeLine.style.display = 'block';
        if (animateNumber < 7) { await timer2(250); }
        else if(animateNumber == 7) { await timer2(250); clearCode(); }
        else { await timer2(500) }
    }
    openedConsole++;
}

function animateFunFacts(fact) {
    console.log(funFacts)
    console.log(funFacts["guitar"])

    let {topBar1, text, topBar2, img} = funFacts[fact]
    let newFunFactCard1 = document.createElement("div")
    newFunFactCard1.setAttribute("class", "fun-fact-card")
    let newTopBar1 = document.createElement("div")
    let newTextBox = document.createElement("div")
    newTopBar1.setAttribute("class", "fun-fact-card-top-bar")
    newTextBox.setAttribute("class", "fun-fact-text")
    newTopBar1.innerHTML = topBar1;
    newTextBox.innerHTML = text;
    newFunFactCard1.appendChild(newTopBar1)
    newFunFactCard1.appendChild(newTextBox)
    let newFunFactCard2 = document.createElement("div")
    newFunFactCard2.setAttribute("class", "fun-fact-card")
    let newTopBar2 = document.createElement("div")
    let newImg = document.createElement("div")
    newTopBar2.setAttribute("class", "fun-fact-card-top-bar")
    newImg.setAttribute("class", "fun-fact-img")
    newTopBar2.innerHTML = topBar2;
    newImg.innerHTML = `<img src=${img}>`;
    newFunFactCard2.appendChild(newTopBar2)
    newFunFactCard2.appendChild(newImg)

    for(let t = 0; t < 2; t++) {
        let deleteButton = document.createElement("a")
        deleteButton.setAttribute("class", "delete is-medium")
        deleteButton.setAttribute("id", "fun-fact-delete")
        let currentElement = (t == 0) ? newTopBar1 : newTopBar2
        currentElement.appendChild(deleteButton)
        currentElement.onclick = function(e) { deleteFile(e) }
    }



    let funFactArea = document.getElementById("facts-about-me-container")
    funFactArea.appendChild(newFunFactCard1)
    funFactArea.appendChild(newFunFactCard2)

   // <a class="delete is-medium" id="fun-fact-delete" onclick="deleteFile()"></a>
    

    newFunFactCard1.classList.add("popIn")
    setTimeout(() => {
        newFunFactCard2.classList.add("popIn")
    }, 500)

    for(let y = 0; y < 2; y++) {
        let left = Math.floor(Math.random() * 25)
        let top = Math.floor(Math.random() * 100)
        let currentCard = (y == 0) ? newFunFactCard1 : newFunFactCard2
        currentCard.style.left = `${left}%`
        currentCard.style.top = `${top}%`
    }
    makeElementsDraggable()
}

function clearCode() {
    let foreGroundElements = document.getElementById("about-me-foreground").childNodes
    let errorElements = document.getElementsByClassName("code-error-message")
    let codeLineInput = document.getElementById("code-line-input")
    for(let errorIndex = errorElements.length - 1; errorIndex >= 0; errorIndex--) {
        errorElements[errorIndex].remove()
    }
    for(let codeLine of foreGroundElements) {
        if(codeLine.nodeName == "#text") continue;
        if(codeLine.style.display == "none") continue;
        if(codeLine.nodeName == "PRE" && !codeLine.contains(codeLineInput)) {
            codeLine.style.display = 'none';
        }

    }
    
}

function deleteFile(e) {
    let elementToRemove = e.path[2]
    elementToRemove.remove();
}

function takeInCommand(newCommand) {
    let codeLineInput = document.getElementById("code-line-input")
    codeLineInput.value = ""
    command = newCommand.toString()
    console.log(typeof command)
    animateOutput(newCommand, "command")
    if(command.includes("guitar") || command == "1") {
        animateOutput("Guitars. huh?")
        animateFunFacts("guitar")
    }
    else if(command.includes("basketball") || command == "2") {
        animateOutput("Basketball. huh?")
        animateFunFacts("basketball")
    }
    else if(command.includes("hiking") || command == "3") {
        animateOutput("Hiking. huh?")
        animateFunFacts("hiking")
    }
    else if(command.includes("-clear")) {
        clearCode()
    }
    else if(command.includes("clinscott.getInfo()")) {
        animateOutput("Sorry, to watch the animation again will cost you one refresh.")
    }
    else if(command.includes("-help")) {
        animateOutput("Commands: \n      -clear: clears the console, same as the trashcan icon")
    }
    else {
        animateOutput("I don't know that command. Try -help.")
    }
}


function animateError() {
    let arrayOfErrors = [">>>   Error... Christopher Linscott too cool!", ">>>   Look there's a scroll bar man...quit it", ">>>   I guess errors aren't your thing..."]
    let newError = document.createElement("div")
    newError.setAttribute("class", "code-error-message")
    let newRandomContent = Math.floor(Math.random() * 3);
    let errorContent = document.createTextNode(arrayOfErrors[newRandomContent])
    newError.appendChild(errorContent)
    let aboutMeFG = document.getElementById("about-me-foreground")
    let nodes = aboutMeFG.childNodes
    let lastLine = nodes[nodes.length - 2]
    aboutMeFG.insertBefore(newError, lastLine)
}


function animateOutput(output, type) {
    let newLine = document.createElement("div")
    newLine.setAttribute("class", "code-output-message")
    let outputContent = (type == "command") ? document.createTextNode(">>>   " + output) : document.createTextNode("       " + output)
    newLine.appendChild(outputContent)
    let aboutMeFG = document.getElementById("about-me-foreground")
    let nodes = aboutMeFG.childNodes
    let lastLine = nodes[nodes.length - 2]
    aboutMeFG.insertBefore(newLine, lastLine)
}


async function animateLearningList() {  
    let learningList = document.getElementById("list-of-languages").childNodes
    let newList = Array.from(learningList).filter(element => element.nodeName !== "#text")
    for(let element of newList) {
        element.classList.add("slidein")
        await timer3(1000) 
    }
    
}

async function animateProjects() {
    let projectCards = document.getElementsByClassName("project-card")
    if(projectCards[0].classList.contains("zoomReverse")) { return; }
    for(let projectCard of projectCards) {
        projectCard.classList.add("popIn")
        await timer4(1000)
        projectCard.classList.remove("popIn")
        projectCard.classList.add("zoomReverse")
    }
}