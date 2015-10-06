//Callback
var fs=require('fs');
var sum="";

  fs.readFile('files/number1.txt', function doneReading(err, fileContents) {
    sum += fileContents.toString();
    fs.readFile('files/number2.txt', function doneReading(err, fileContents) {
      if (err) {
        console.log("Problem to read file", err);
        //throw new Error("Problem to read a file " + err);
        return;
      }
      sum += fileContents.toString();
      fs.readFile('files/number3.txt', function doneReading(err, fileContents) {
        if (err) {
          console.log("Problem to read file", err);
          return;
        }
        sum += fileContents.toString();
        fs.readFile('files/number4.txt', function doneReading(err, fileContents) {
          if (err) {
            console.log("Problem to read file", err);
            return;
          }
          sum += fileContents.toString();
          fs.readFile('files/number5.txt', function doneReading(err, fileContents) {
            if (err) {
              console.log("Problem to read file", err);
              return;
            }
            sum += fileContents.toString();
            fs.readFile('files/number6.txt', function doneReading(err, fileContents) {
              if (err) {
                console.log("Problem to read file", err);
                return;
              }
                sum += fileContents.toString();
                console.log("callback do something with it", sum);
            })
          })
        })
      })
    })
  });
console.log("Sum ",sum);