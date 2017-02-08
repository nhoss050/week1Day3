var returnObject = {

};

var userInput = process.argv[2];
function countLetters(userString)
{
//  console.log(userString);
  for(var j = 0; j < userString.length-1; j++) {
    var char = userString[j];
    if(returnObject[char]){
      returnObject[char]++;
    } else {
      returnObject[char] = 1;
    }
  }
}
console.log(returnObject);

