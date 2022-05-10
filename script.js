// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generate;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Bellows code creates constants out of id's that ive designated in my HTML file

const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeLowercase = document.getElementById
('includeLowercase')
const includeUppercase = document.getElementById
('includeUppercase')
const includeNumber = document.getElementById
('includeNumber')
const includeSpecialcharacter = document.getElementById
('includeSpecialcharacter')
const form = document.getElementById
('passwordOptionsForm')
const passwordDisplay = document.getElementById('generate')

//in order to give me all the options available for Character codes I created an array of the numbers associated with those codes to be understood by JS

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIALCHARACTER_CHAR_CODES = arrayFromLowToHigh(33,47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

//These functions bellow allow me to have code be used and generate a response on the webpage using the above constants

form.addEventListener('generate', e=> {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const uncludeLowercase = includeLowercaseElement.checked
  const includeNumber = includeNumberElement.checked
  const includeSpecialcharacter = includeSpecialcharacterElement.checked
  const password = generatePassword(characterAmountNumber, characterAmountRange, includeNumber, includeLowercase, includeUppercase,  includeSpecialcharacter)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumber, includeSpecialcharacter){
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSpecialcharacter) charCodes = charCodes.concat(SPECIALCHARACTER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0 <characterAmount; i++;) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i<= high; i++){
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value= e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}