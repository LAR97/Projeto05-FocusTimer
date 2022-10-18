import {
    buttonForest,
    buttonRain,
    buttonCoffe,
    buttonFire,
    iconForest,
    iconRain,
    iconCoffe,
    iconFire
} from "./elements.js"

export default function () {
    function buttonForestColor() {
        buttonForest.style.backgroundColor = "#02799D"
        iconForest.style.fill = "white"
    }
    
    function buttonRainColor() {
        buttonRain.style.backgroundColor = "#02799D"
        iconRain.style.fill = "white"
    }
    
    function buttonCoffeColor() {
        buttonCoffe.style.backgroundColor = "#02799D"
        iconCoffe.style.fill = "white"
    }
    
    function buttonFireColor() {
        buttonFire.style.backgroundColor = "#02799D"
        iconFire.style.fill = "white"
    }
    
    function originalForestColor() {
        buttonForest.style.backgroundColor = "#E0E0E5"
        iconForest.style.fill = "#323238"
    }
    
    function originalRainColor() {
        buttonRain.style.backgroundColor = "#E5E5E5"
        iconRain.style.fill = "#323238"
    }
    
    function originalCoffeColor() {
        buttonCoffe.style.backgroundColor = "#E5E5E5"
        iconCoffe.style.fill = "#323238"
    }
    
    function originalFireColor() {
        buttonFire.style.backgroundColor = "#E5E5E5"
        iconFire.style.fill = "#323238"
    }

    return {
        buttonForestColor,
        buttonRainColor,
        buttonCoffeColor,
        buttonFireColor,
        originalForestColor,
        originalRainColor,
        originalCoffeColor,
        originalFireColor
    }
}