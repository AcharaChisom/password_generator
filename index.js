let characterList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
                    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
                    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"]

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let password4El = document.getElementById("password4-el")

function getRandomCharacter() {
    return characterList[Math.floor(Math.random() * 75)]
}                    

function getPassword() {
    let password = ""
    for (let i = 0; i < length; i ++) {
        password += getRandomCharacter()
    }
    return password
}

function generatePassword() {
    password1El.textContent = getPassword()
    password2El.textContent = getPassword()
    password3El.textContent = getPassword()
    password4El.textContent = getPassword()
}

let name = window.prompt("What is your name?")
let length = Number(window.prompt(`Hey ${name}, How long do you want your passwords to be?`))
alert("CLick on the green button to generate your buttons.")