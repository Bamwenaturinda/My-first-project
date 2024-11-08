let cars =0
let totalCars =document.getElementById("car-count")
let carsRecorded=document.getElementById("save-txt")
function addCars(){
    cars +=1
    totalCars.textContent =cars
}
function save(){
    let carText =cars+" - "
    carsRecorded.textContent +=carText
    totalCars.textContent =0
    cars =0
}