import {
    buttonPlay,
    buttonStop,
    buttonRaise,
    buttonLower,
    buttonForest,
    buttonRain,
    buttonCoffe,
    buttonFire,
} from "./elements.js"

import {
    forestAudio,
    rainAudio,
    coffeAudio,
    fireAudio
} from "./sounds.js"

import Color from "./colors.js"

const color = Color()

let playLock = 1

export default function ({timer}) {
    buttonPlay.addEventListener('click', function () {
        if (playLock == 1) {
            
            timer.countdown()

            playLock++
        }

    }) 
    
    buttonStop.addEventListener('click', function () {
        playLock =  1

        timer.reset()

        forestAudio.pause()
        rainAudio.pause()
        coffeAudio.pause()
        fireAudio.pause()
    
        color.originalForestColor()
        color.originalRainColor()
        color.originalCoffeColor()
        color.originalFireColor()
    })
    
    buttonRaise.addEventListener('click', function () {
        timer.addMinutes()
    })
    
    buttonLower.addEventListener('click', function () {
        timer.removeMinutes()
    })
    
    buttonForest.addEventListener('click', function () {
        forestAudio.play()
        rainAudio.pause()
        coffeAudio.pause()
        fireAudio.pause()
    
        color.buttonForestColor()
        color.originalRainColor()
        color.originalCoffeColor()
        color.originalFireColor()
    })
    
    buttonRain.addEventListener('click', function() {
        rainAudio.play()
        forestAudio.pause()
        coffeAudio.pause()
        fireAudio.pause()
    
        color.buttonRainColor()
        color.originalForestColor()
        color.originalCoffeColor()
        color.originalFireColor()
    })
    
    buttonCoffe.addEventListener('click', function() {
        coffeAudio.play()
        forestAudio.pause()
        rainAudio.pause()
        fireAudio.pause()
    
        color.buttonCoffeColor()
        color.originalForestColor()
        color.originalRainColor()
        color.originalFireColor()
    })
    
    buttonFire.addEventListener('click', function() {
        fireAudio.play()
        forestAudio.pause()
        rainAudio.pause()
        coffeAudio.pause()
    
        color.buttonFireColor()
        color.originalForestColor()
        color.originalRainColor()
        color.originalCoffeColor()
    })
    
}