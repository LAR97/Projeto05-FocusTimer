const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonRaise = document.querySelector('.raise')
const buttonLower = document.querySelector('.lower')

let buttonForest = document.querySelector('.forest')
let buttonRain = document.querySelector('.rain')
let buttonCoffe = document.querySelector('.coffe')
let buttonFire = document.querySelector('.fire')

let iconForest = document.querySelector('.forest svg path')
let iconRain = document.querySelector('.rain svg path')
let iconCoffe = document.querySelector('.coffe svg path')
let iconFire = document.querySelector('.fire svg path')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


export {
    buttonPlay,
    buttonStop,
    buttonRaise,
    buttonLower,
    buttonForest,
    buttonRain,
    buttonCoffe,
    buttonFire,
    iconForest,
    iconRain,
    iconCoffe,
    iconFire,
    minutesDisplay,
    secondsDisplay
}