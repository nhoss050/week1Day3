var returnObject = {

};

var userInput = process.argv.slice(2).join(' ');
console.log(userInput);
function countLetters(userString)
{

  for(var j = 0; j < userString.length; j++) {
    var char = userString[j];
    if(returnObject[char]){
      returnObject[char].push(j);
    } else {
      returnObject[char] = [j];
    }
  }
}
countLetters(userInput);
//countLetters("lighthouse in tha house")
console.log(returnObject);

