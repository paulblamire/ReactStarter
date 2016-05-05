/* */ 
var createPadding = require('./_createPadding'),
    stringSize = require('./_stringSize'),
    toInteger = require('./toInteger'),
    toString = require('./toString');
var nativeCeil = Math.ceil,
    nativeFloor = Math.floor;
function pad(string, length, chars) {
  string = toString(string);
  length = toInteger(length);
  var strLength = length ? stringSize(string) : 0;
  if (!length || strLength >= length) {
    return string;
  }
  var mid = (length - strLength) / 2;
  return (createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars));
}
module.exports = pad;