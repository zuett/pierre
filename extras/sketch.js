let num1;
let num2;

let alpha1;
let alpha2;

// Hardcoded frequency values to replace CSV
const frequencyData = {
  'A': 623, 'B': 343, 'C': 518, 'D': 472, 'E': 383, 'F': 144, 'G': 231, 'H': 219,
  'I': 118, 'J': 447, 'K': 367, 'L': 480, 'M': 554, 'N': 168, 'O': 136, 'P': 136,
  'Q': 11, 'R': 324, 'S': 405, 'T': 326, 'U': 13, 'V': 138, 'W': 119, 'X': 6,
  'Y': 41, 'Z': 60
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
    // rectMode(CENTER);
    // angleMode(DEGREES);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
    canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('pointer-events', 'none');

    background(23);

  sampleName = "P,M";

  let splitString = split(sampleName, ",");

  alpha1 = splitString[0];
  alpha2 = splitString[1];

  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
    background(30);
    noFill();
  
  // position of the rect
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
  return frequencyData[targetAlphabet] || 100; // Default to 100 if not found
  }