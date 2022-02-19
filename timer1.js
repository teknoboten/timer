const timer = () => {
//accepts a number or series of numbers & beeps after each number of ms has passed
//would be helpful to add a flag to set units of time (ms, seconds, min etc)

  const beepAt = process.argv.slice(2).sort((a, b) => a - b).filter(c => c > 0).filter(d => !Number.isNaN(d));
  //capture command line input as an array, sort numerically and filter out negative & !numbers

  // const beep = () => process.stdout.write('\x07');       <- not working
  const fakeBeep = () => process.stdout.write(`beep!\n`);   //impressive workaround

  if (beepAt.length < 1) {
    process.stdout.write(`i need a number, please. \n`);    //no input given - return an error
  }

  for (const x of beepAt) {  //iterate over beepAt and pass beep to setTimeout

    setTimeout(() => {      //setTimeout calls beep at requested ms
      fakeBeep();
    }, x);
  }
};

timer();










// osascript -e "beep beep beep"