// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//bellow is the function i created in order to provide a generated password. Using the if and else statements and by creating variables for each adjustable element and variable


function generatePassword() {
    var characterAmount = window.prompt('How many numbers would you like?')

    console.log(characterAmount, includeUppercase, includeLowercase, includeNumber, includeSpecialCharacter)

    if (characterAmount < 8 || characterAmount > 128) {
        generatePassword()
    } else {

        var includeUppercase = window.confirm('Do you want an Upper case letter?')
        var includeLowercase = window.confirm('Do you want an lower case')
        var includeNumber = window.confirm('Do you want a number?')
        var includeSpecialCharacter = window.confirm('Do you want a special character?')

    
        var arrayofCharacters = []
        var password = ''
        // if statement for upper / lower / special characters - define arrrays of characters

        if (includeNumber) {
            var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            arrayofCharacters.push(...numberCharacter)
        }

        if (includeLowercase) {
            var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            arrayofCharacters.push(...lowercaseCharacters)
        }

        if (includeUppercase) {
            var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            arrayofCharacters.push(...uppercaseCharacters)
        }

        if (includeSpecialCharacter) {
            var specialCharacter = ["/", ".", ",", "-", "!", "#", "$", "%", "*", "&"];
            arrayofCharacters.push(...specialCharacter)
        }
                        // if this is true then lets push an array of uppercase letters to to the array of characters l31
        console.log(arrayofCharacters)
     }

        for (let i = 0; i < characterAmount; i++) {
            var randomPosition = Math.floor(Math.random() * arrayofCharacters.length)
            password += arrayofCharacters[randomPosition]
                        // create var for random position inside of array of characters
         }
    return password
        }

                



