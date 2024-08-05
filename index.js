/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let kilogramEl = document.getElementById("kilogram-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
const feetToMeter = 3.281
const gallonToLiters = 3.785
const poundToKilogram = 2.205

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(meterToFeet * baseValue).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / feetToMeter).toFixed(3)} meters`;

    volumeEl.textContent = `${baseValue} liter = ${(literToGallon * baseValue).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue * gallonToLiters).toFixed(3)} liters`;

    kilogramEl.textContent = `${baseValue} kilogram = ${(kilogramToPound * baseValue).toFixed(3)} pounds | ${baseValue} pound = ${(baseValue / poundToKilogram).toFixed(3)} kilograms`;
})