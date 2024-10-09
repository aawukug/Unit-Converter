// INITIALIZATION
const inputEl = document.getElementById("input-el");

const convertBtn = document.getElementById("convert-btn");

const convertText1 = document.getElementById("convert-text1");

const convertText2 = document.getElementById("convert-text2") ;

const convertText3 = document.getElementById("convert-text3")

const resetBTn = document.getElementById("reset-btn")


// CONVERT BTN EVENTLISTENER
convertBtn.addEventListener("click",function(){
    convertText1.innerHTML = `
    ${inputEl.value} meters = ${parseFloat(inputEl.value *3.281).toFixed(3)} feet | ${inputEl.value} feet = ${parseFloat(inputEl.value / 3.281).toFixed(3)}  meters
    `

    convertText2.innerHTML = `
    ${inputEl.value} liters = ${parseFloat(inputEl.value *0.264172).toFixed(3)} gallons | ${inputEl.value} gallons = ${parseFloat(inputEl.value / 0.264172).toFixed(3)}  liters
    `

    convertText3.innerHTML = `
    ${inputEl.value} kilos = ${parseFloat(inputEl.value *2.20462).toFixed(3)} pounds | ${inputEl.value} pounds = ${parseFloat(inputEl.value / 2.20462).toFixed(3)} kilos
    `
});



//RESET EVENTLISTENER
resetBTn.addEventListener("click", function() {
    location.reload();
})