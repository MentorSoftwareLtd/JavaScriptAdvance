//Promise
var readFile = require('fs-readfile-promise');

readFile('files/number1.txt').then(function(fileContents) {
  return fileContents.toString();
}).then(function(data) {
  return readFile('files/number2.txt').then(function(fileContents) {
    return data+fileContents;
  })
}).then(function(data) {
  return readFile('files/number3.txt').then(function(fileContents) {
    return data+fileContents;
  })
}).then(function(data) {
  return readFile('files/number4.txt').then(function(fileContents) {
    return data+fileContents;
  })
}).then(function(data) {
  return readFile('files/number5.txt').then(function(fileContents) {
    return data+fileContents;
  })
}).then(function(data) {
  return readFile('files/number6.txt').then(function(fileContents) {
    return data+fileContents;
  })
}).then(function(data) {
  console.log("promise do something with it",data);
}).catch(function(err) {
  console.log("Problem to read file", err);
});
