const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const changeBtn = document.getElementById("changeBtn")
const colorDisplay = document.getElementById("color-el")


clickFunc()
changeBtn.addEventListener('click',clickFunc)

function clickFunc(){
    let hexCode = getRandomHex()
    document.body.style.backgroundColor = hexCode
    colorDisplay.textContent = hexCode
}

function getRandomHex(){
    let temp = '#'
    for(let i=0; i<6; i++){
        let t = getRandomNumber(hex.length)
        temp += hex[t]
    }
    return temp     
}

function getRandomNumber(n){
    let temp = Math.floor(Math.random() * n)
    return temp
}