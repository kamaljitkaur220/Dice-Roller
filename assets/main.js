const numberofDice = document.querySelector('#dice')
const rollButton = document.querySelector('#roll')
const total = document.querySelector('#total-number')
const showAll = document.querySelector('#total-rolls')
const Result = document.querySelector('#Result')

let Rolls = 0
let dice = 0
let dieRolls = []
let reset = document.querySelector('#Reset-Button')



roll.addEventListener('click', function(){


    while (dice < numberofDice.value) {
    let Roll = Math.floor(Math.random() * 6) + 1
    Rolls += Roll

    console.log (Roll)
    dice+= 1
    dieRolls.push(Roll)
}
total.innerHTML =  +  Rolls

console.log ( dieRolls)

})

showAll.addEventListener ('click', function(){

 while (dieRolls.length > 0){
     const listItems = document.createElement('li')
     listItems.innerHTML =+ dieRolls.pop([0])
     Result.appendChild(listItems)
     dice += 1
 }
})

reset.addEventListener ('click', function(){
    dieRolls = []
    numberofDice.value = ''
    total.innerText =  ''
    Rolls = 0
    Result.innerHTML = ''
    dice = 0
    
    } )
    

