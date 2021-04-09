
let userInput = process.argv;
for (let i = 2; i < userInput.length; i++) {
    
  setTimeout(() => {
    if (userInput[i] < 1) {
      return process.stdout.write('');
    }
    process.stdout.write('\x07');

  },userInput[i] * 1000);
 
}


//No numbers are provided: no beep
//An input is a negative number: ignore/skip
//An input is not a number: ignore/skip