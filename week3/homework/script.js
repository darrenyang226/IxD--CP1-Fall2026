// Grab the elements we need
let bigImage = document.getElementById("bigImage")
let thumb1 = document.getElementById("thumb1")
let thumb2 = document.getElementById("thumb2")
let thumb3 = document.getElementById("thumb3")
let thumb4 = document.getElementById("thumb4")
let pauseBtn = document.getElementById("pauseBtn")
let playBtn = document.getElementById("playBtn")

let currentImage = 1    // which image is showing (1, 2, 3 or 4)
let timer = null        // will hold our setInterval so we can stop it later

// Show image number 1, 2, 3 or 4 in the big section
let showImage = (number) => {
    currentImage = number

    // Change the big picture
    if (number == 1) {
        bigImage.src = "images/Guinea_1.png"
        bigImage.alt = "Gulu and Megu chilling"
    }
    else if (number == 2) {
        bigImage.src = "images/Guinea_2.png"
        bigImage.alt = "Gulu craving strawberry"
    }
    else if (number == 3) {
        bigImage.src = "images/Guinea_3.png"
        bigImage.alt = "Dobby mewing"
    }
    else {
        bigImage.src = "images/Guinea_4.png"
        bigImage.alt = "Megu looking like Kirby"
    }

    // Take the outline off every thumbnail...
    thumb1.classList.remove("active")
    thumb2.classList.remove("active")
    thumb3.classList.remove("active")
    thumb4.classList.remove("active")

    // ...then put it on the one that is showing
    if (number == 1) {
        thumb1.classList.add("active")
    }
    else if (number == 2) {
        thumb2.classList.add("active")
    }
    else if (number == 3) {
        thumb3.classList.add("active")
    }
    else {
        thumb4.classList.add("active")
    }
}

// Each thumbnail gets its own small function
let clickedThumb1 = () => { showImage(1) }
let clickedThumb2 = () => { showImage(2) }
let clickedThumb3 = () => { showImage(3) }
let clickedThumb4 = () => { showImage(4) }

// Go to the next image, and loop back to 1 after 4
let showNext = () => {
    if (currentImage == 4) {
        showImage(1)
    }
    else {
        showImage(currentImage + 1)
    }
}

// Start the automatic switching (3000 milliseconds = 3 seconds)
let startSlideshow = () => {
    if (timer === null) {      // don't start a second timer by accident
        timer = setInterval(showNext, 3000)
    }
}

// Stop the automatic switching
let stopSlideshow = () => {
    clearInterval(timer)
    timer = null
}

thumb1.addEventListener("click", clickedThumb1)
thumb2.addEventListener("click", clickedThumb2)
thumb3.addEventListener("click", clickedThumb3)
thumb4.addEventListener("click", clickedThumb4)
pauseBtn.addEventListener("click", stopSlideshow)
playBtn.addEventListener("click", startSlideshow)

// When the page loads: show the first image and start the slideshow
showImage(1)
startSlideshow()