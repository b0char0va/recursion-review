// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

  function charCount(str) {
  var characterDict = {'\'': 0, '[': 0, ']': 0, '{' : 0, '}': 0, '"': 0};
  for (var i = 0; i < json.length; i++) {
    if (json[i] in characterDict) {
      characterDict[json[i]]++;
    }
  }

  if (characterDict['\'']%2 !== 0) {
    return false;
  } else if (characterDict['"']%2 !== 0) {
    return false;
  } else if(characterDict['['] !== characterDict[']']) {
    return false;
  } else if(characterDict['{'] !== characterDict['}']) {
    return false;
  } else {
    return true;
  }
}

var parseJSON = function(json) {
  // your code goes here
  if (json[0] === '[' && json[json.length - 1] === ']') {
    if (json.length === 2) {
      return [];
    }

    var result = [];
    var index = 1;
    for (var i = 1; i < json.length; i++) {
        if (json[i] === ',') {
          var subString = json.substring(index, i);
          if(charCount(substring))
        }
    }

  } else if (json === 'true') {
      return true;
  } else if (json === 'false') {
    return false;
  } else if (typeof(json.substring(1, json.length - 1)) === 'string') {
    return json.substring(1, json.length-1);
  } else if (Number(json) !== NaN) {
    return Number(json);
  } 
};



console.log(parseJSON('["one", "two"]'));


