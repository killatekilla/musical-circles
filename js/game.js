function randomColor(){
  //make a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //make a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //make a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}