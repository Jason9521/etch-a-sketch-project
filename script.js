
// Global Variables

const container = document.getElementById("grid-container")
const penColor = document.getElementById("pen-color")
const penColorClass = document.querySelector(".pen-color")
const greyScale = document.getElementById("greyscale")
const gridSlider = document.getElementById("slider")
const toggleGrid = document.getElementById("grid-lines")
const rainbowMode = document.getElementById("rainbow")
const erase = document.getElementById("erase")
const clear = document.getElementById("clear")
const gridSize = document.getElementById("size-value")
const body = document.querySelector("body")

let colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

let penColorOn = true
let gridOn = true
let eraseOn = false
let greyScaleOn = false
let rainbowModeOn = false


// Grid and Grid Slider

for (let i = 1; i < 257; i++) {
    // Create new div element
    const gridBox = document.createElement("div")
    // Add "box" class to each new div
    gridBox.classList.add("box")
    // Add new div to container, along with it's assigned class
    container.appendChild(gridBox)
}

gridSlider.addEventListener("input", function() {

    // 16 x 16

    if (gridSlider.value == 1) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(16, 1fr)"
        container.style.gridTemplateRows = "repeat(16, 1fr)"
        gridSize.textContent = "16 x 16"

        for (let i = 1; i < 257; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "25px"
            gridBox.style.width = "25px"        
    }}

    // 24 x 24

    else if (gridSlider.value == 2) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(24, 1fr)"
        container.style.gridTemplateRows = "repeat(24, 1fr)"
        gridSize.textContent = "24 x 24"

        for (let i = 1; i < 577; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "16.7px"
            gridBox.style.width = "16.7px"
    }}

    // 30 x 30

    else if (gridSlider.value == 3) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(30, 1fr)"
        container.style.gridTemplateRows = "repeat(30, 1fr)"
        gridSize.textContent = "30 x 30"

        for (let i = 1; i < 901; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "13.4px"
            gridBox.style.width = "13.4px"
    }}

    // 36 x 36

    else if (gridSlider.value == 4) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(36, 1fr)"
        container.style.gridTemplateRows = "repeat(36, 1fr)"
        gridSize.textContent = "36 x 36"

        for (let i = 1; i < 1297; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "11.2px"
            gridBox.style.width = "11.3px"
    }}

    // 42 x 42

    else if (gridSlider.value == 5) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(42, 1fr)"
        container.style.gridTemplateRows = "repeat(42, 1fr)"
        gridSize.textContent = "42 x 42"
 
        for (let i = 1; i < 1765; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "9.54px"
            gridBox.style.width = "9.54px"
    }}

    // 48 x 48

    else if (gridSlider.value == 6) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(48, 1fr)"
        container.style.gridTemplateRows = "repeat(48, 1fr)"
        gridSize.textContent = "48 x 48"
       
        for (let i = 1; i < 2305; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "8.34px"
            gridBox.style.width = "8.34px"
    }}

    // 54 x 54

    else if (gridSlider.value == 7) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(54, 1fr)"
        container.style.gridTemplateRows = "repeat(54, 1fr)"
        gridSize.textContent = "54 x 54"

        for (let i = 1; i < 2917; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "7.42px"
            gridBox.style.width = "7.42px"
    }}

    // 60 x 60

    else if (gridSlider.value == 8) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(60, 1fr)"
        container.style.gridTemplateRows = "repeat(60, 1fr)"
        gridSize.textContent = "60 x 60"

        for (let i = 1; i < 3601; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "6.69px"
            gridBox.style.width = "6.69px"
    }}

    // 66 x 66

    else if (gridSlider.value == 9) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(66, 1fr)"
        container.style.gridTemplateRows = "repeat(66, 1fr)"
        gridSize.textContent = "66 x 66"    

        for (let i = 1; i < 4357; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "6.08px"
            gridBox.style.width = "6.08px"
    }}

    // 72 x 72

    else if (gridSlider.value == 10) {

        container.textContent = ""
        container.style.gridTemplateColumns = "repeat(72, 1fr)"
        container.style.gridTemplateRows = "repeat(72, 1fr)"
        gridSize.textContent = "72 x 72"

        for (let i = 1; i < 5185; i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("box")
            container.appendChild(gridBox)
            gridBox.style.height = "5.6px"
            gridBox.style.width = "5.6px"
    }}

    let boxes = document.querySelectorAll('div.box')

    if (gridOn) {
        boxes.forEach(function(box) {
        box.style.border = "black solid 1px"
    })} 
    
    else {
        gridOn = false
        boxes.forEach(function(box) {
            box.style.border = "none"
        })}
    } 
)


// Pen Color

penColor.addEventListener('click', function() {

    penColorOn = true

    penColorClass.style.backgroundColor = "rgb(60, 255, 0)"
    rainbowMode.style.backgroundColor = "rgb(2, 187, 2)"
    greyScale.style.backgroundColor = "rgb(2, 187, 2)"
    erase.style.backgroundColor = "rgb(2, 187, 2)"

    container.addEventListener("mouseover", function(e) {
        let color = penColor.value
        if (e.target.classList.contains("box") && penColorOn == true) {
            e.target.style.backgroundColor = color
        }
    })
})


// Greyscale Mode

greyScale.addEventListener('click', function() {

    greyScaleOn = true
    penColorOn = false

    greyScale.style.backgroundColor = "rgb(60, 255, 0)"
    rainbowMode.style.backgroundColor = "rgb(2, 187, 2)"
    erase.style.backgroundColor = "rgb(2, 187, 2)"
    penColorClass.style.backgroundColor = "rgb(2, 187, 2)"

    if (penColorOn == false) {

    container.addEventListener("mouseover", function(e) {
        
        if (e.target.classList.contains("box") && greyScaleOn == true) {
            let newColor = ""
            for (let i = 0; i < 2; i++) {
                newColor += colorArray[Math.floor(Math.random() * 15)]
            }
            e.target.style.backgroundColor = `#${newColor.repeat(3)}`
        }})
    }
})


// Toggle Grid 

toggleGrid.addEventListener("click", function() {
    
    let boxes = document.querySelectorAll('div.box')

    if (gridOn) {
        toggleGrid.style.backgroundColor = "rgb(60, 255, 0)"
        gridOn = false
        boxes.forEach(function(box) {
        box.style.border = "none"
    })} 
    
    else {
        toggleGrid.style.backgroundColor = "rgb(2, 187, 2)"
        gridOn = true
        boxes.forEach(function(box) {
            box.style.border = "black solid 1px"
        })}
    }
)


// Rainbow Mode

rainbowMode.addEventListener("click", function(e) {

    rainbowMode.style.backgroundColor = "rgb(60, 255, 0)"
    erase.style.backgroundColor = "rgb(2, 187, 2)"
    greyScale.style.backgroundColor = "rgb(2, 187, 2)"
    penColorClass.style.backgroundColor = "rgb(2, 187, 2)"

    penColorOn = false
    container.addEventListener("mouseover", function(e) {
        if (e.target.classList.contains("box") && penColorOn == false) {
            let randomColor = "#"
    
            for (let i = 0; i < 6; i++) {
                randomColor += colorArray[Math.floor(Math.random() * 15)]
            };
            e.target.style.backgroundColor = randomColor
        }
    })
})


// Eraser

erase.addEventListener('click', function() {
    penColorOn = true
    greyScaleOn = false

    erase.style.backgroundColor = "rgb(60, 255, 0)"
    rainbowMode.style.backgroundColor = "rgb(2, 187, 2)"
    greyScale.style.backgroundColor = "rgb(2, 187, 2)"
    penColorClass.style.backgroundColor = "rgb(2, 187, 2)"

    container.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains("box")) {
            e.target.style.backgroundColor = '#ffffff'
        }
    })
})


// Clear

clear.addEventListener('click', function() {
    eraseOn = false
    let boxes = document.querySelectorAll('div.box')
    boxes.forEach(function(box) {
        box.style.backgroundColor = "white"
    })
})


