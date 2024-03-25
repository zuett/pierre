let names;
let sampleName;

let num1;
let num2;

let alpha1;
let alpha2;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
    createCanvas(windowWidth, windowHeight);
  
    rectMode(CENTER);
    angleMode(DEGREES);
    names = loadTable("names.csv", "csv", "header");
  }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
    canvas.style('z-index', '-1');

    background(23);


  let alphabet = names.getColumn("alphabet");
  let frequency = names.getColumn("freq");

  sampleName = "P,M";

  let splitString = split(sampleName, ",");

  alpha1 = splitString[0];
  alpha2 = splitString[1];
}

function draw() {
    // // changing background color
    // var r = map(sin(frameCount), -1, 1, 50, 255);
    // var g = map(cos(frameCount / 2), -1, 1, 50, 255);
    // var b = map(sin(frameCount / 9), -1, 1, 50, 255);
    // background(r,g,b)
    background(30);
    noFill();
  
    // posisiton of the rect
    translate(width / 2, height / 2);
  
    for (var i = 0; i < 200; i++) {
      push();
      //rotation (100 is the rotation speed)
      rotate(sin(frameCount + i) * 100);
  
      // rect stroke colors
      var r = map(sin(frameCount), -1, 1, 50, 255);
      var g = map(cos(frameCount / 6), -1, 1, 50, 255);
      var b = map(sin(frameCount / 2), -1, 1, 50, 255);
  
      stroke(r, g, b);
  
      num1 = getValue(alpha1);
      num2 = getValue(alpha2);
  
      // the 2 layers of animation
      rect(0, 0, num1 - i * 1, num2 - i * 3, 200 - i);
      rect(0, 0, num2 - i * 4, num1 - i * 3, 200 - i);
  
      pop();
    }
  }

  function getValue(targetAlphabet) {
    let alphabet = names.getColumn("alphabet");
    let frequency = names.getColumn("freq");
    let rowNum = names.getRowCount();
  
    for (let i = 0; i < rowNum; i++) {
      if (alphabet[i] === targetAlphabet) {
        return frequency[i];
      }
    }
  }