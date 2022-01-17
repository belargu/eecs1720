var w;

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  w = new Walker();
}

function draw() {
  background(51);
  // Update and display object
  w.update();
  w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    // Move Walker randomly
    var vel = createVector(random(-10, 10), random(-10, 10));
    this.pos.add(vel);
  }

  this.display = function() {
    // Draw Walker as circle
    fill(255,255,0);
    ellipse(this.pos.x, this.pos.y, 50, 50);
  }
}
