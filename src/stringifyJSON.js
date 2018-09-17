// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
/*
If the value has a toJSON() method, it's responsible to define what data will be serialized.
Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.
If undefined, a Function, or a Symbol is encountered during conversion it is either omitted (when it is found in an object) or censored to null (when it is found in an array). JSON.stringify() can also just return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).
All Symbol-keyed properties will be completely ignored, even when using the replacer function.
The instances of Date implement the toJSON() function by returning a string (the same as date.toISOString()). Thus, they are treated as strings.
The numbers Infinity and NaN, as well as the object null, are all considered null.
All the other Object instances (including Map, Set, WeakMap, and WeakSet) will have only their enumerable properties serialized.
*/

  if (obj === true) {
    return 'true';
  } else if (obj === false) {
    return 'false';
  } else if (typeof(obj) === 'number') {
    return String(obj);
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    var returnString = '';
    for (var i = 0; i < obj.length; i++) {
      returnString += stringifyJSON(obj[i]) + ',';
    }

    if (returnString[returnString.length - 1] === ',') {
      returnString = returnString.slice(0, returnString.length - 1);
    }
    return '[' + returnString + ']';
  } else if (typeof(obj) === 'object') { // its an object
    var returnString = '';
    for (var key in obj) {
      if (key === 'functions' || key === 'undefined') {
        returnString += '';
      } else {
        returnString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }

    if (returnString[returnString.length - 1] === ',') {
      returnString = returnString.slice(0, returnString.length - 1);
    }
    return '{' + returnString + '}';   
  } else if (typeof(obj) === 'function' || obj === undefined) {
    return '';
  }

};

