var draggableElements = document.getElementsByClassName("fun-fact-card")

function makeElementsDraggable() {
    for(let element of draggableElements) {
        dragElement(element)
    }
}

function dragElement(element) {
    console.log(element)
    let newPosX = 0, newPosY = 0, startUpX = 0, startUpY = 0;
    if(element.firstChild.classList[0] == "fun-fact-card-top-bar") {
        element.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        console.log("hit1")
        e = e || window.event;
        e.preventDefault();
        startUpX = e.clientX;
        startUpY = e.clientY;
        console.log("FIRST: ", startUpX, startUpY)
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        moveElementsDown(element);
        element.style.zIndex = 99;
    }
    function elementDrag(e) {
        console.log("hit2")
        e = e || window.event;
        e.preventDefault();
        // console.log(e.clientX, e.clientY, startUpX, startUpY)
        newPosX = startUpX - e.screenX;
        newPosY = startUpY - e.screenY;
        // startUpX = e.clientX
        // startUpY = e.clientY
        // console.log(newPosX, newPosY, element.getBoundingClientRect().top, element.getBoundingClientRect().left)
        element.style.top = (-newPosY) + "px"
        element.style.left = (-newPosX) + "px"
    }
    function closeDragElement(e) {
        console.log("hit3")
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


//Clickable elements 


function moveElementsDown(currentElement) {
    console.log(currentElement)
    console.log(draggableElements)
    for(let t = 0; t < draggableElements.length; t++) {
        let curr = draggableElements[t]
        if(curr !== currentElement) {
            console.log(curr, curr.style.zIndex)
            curr.style.zIndex = 1;
        }   
    }
}