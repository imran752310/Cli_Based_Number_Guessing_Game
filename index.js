import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgYellow('Welcome to the Guessing Number Game'));
console.log(chalk.magenta(` 
     ___________________
    |                   |
    |   Guessing Number |
    |        Game       |
    |    ___ ___ ___    |
    |   | 7 | 8 | 9 |   |
    |   |___|___|___|   |
    |   | 4 | 5 | 6 |   |
    |   |___|___|___|   |
    |   | 1 | 2 | 3 |   |
    |   |___|___|___|   |
    |___________________| 
    
    +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+
    |D|e|v|e|l|o|p| |B|y| |I|m|r|a|n| |K|h|a|n|
    +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+`));
function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function playGame() {
    const targetNumber = generateRandomNum(1, 10);
    console.log(chalk.bold('Start to Guess the number between 1 and 10.'));
    var score = 10;
    while (true) {
        const userGuess = await inquirer.prompt({
            type: "number",
            name: "number",
            message: "Enter the Gussing Number",
        });
        if (userGuess.number === targetNumber) {
            console.log(chalk.bgGreenBright(`Congratulations! You guessed the number is ${targetNumber} You WIN`));
            console.log(chalk.bgWhite(`Your score is: ${score}`));
            break;
        }
        else {
            console.log(chalk.red('Wrong guess. Try again To Win.'));
            score -= 1;
            if (userGuess.number < targetNumber) {
                console.log('Try a higher number.');
            }
            else {
                console.log('Try a lower number.');
            }
            if (score <= 0) {
                console.log('Sorry, The Game IS over!');
                console.log(`The correct number was: ${targetNumber}`);
                break;
            }
        }
    }
}
playGame();
