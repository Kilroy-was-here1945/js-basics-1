const readline = require('readline');
const internal = require('stream');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let password = 'dallinjohnson'
console.log('welcome to the password validator tool')

reader.question("Password", function(input){
    const tokens = input.split(' ');
    if(input.length >= 10){

    if(input === password){
        console.log('correct')
    }
    if(input != password){
        console.log('incorrect')
    }
}
    if(input.length < 10){
        console.log('incorrect')
    }

    const mathSymbol = tokens[0];
    const num1 = Number(tokens[1]);
    const num2 = Number(tokens[2]);
    // This line closes the connection to the command line interface.
    reader.close()

});

