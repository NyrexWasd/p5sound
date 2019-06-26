var frames = 250;
var num = 50;
var theta = 20;
var amplitude;
var mic;
var smoothMicLevel = 0;
var c = ["#ffff00", "#00ffff", "#9933ff", "#ff33bb"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  mic = new p5.AudioIn();
  mic.start();
}
function draw() {
  background('black'); fill(random(c));
  stroke(random(c));
  var vol = mic.getLevel();
  translate(width / 2, height / 2);
  var diam1 = map(vol, 0, 1, 10, height)
  var diam2 = map(vol, 0, 1, 4, height)
  var diam3 = map(vol, 0, 1, 2, height)
  for (var i = 0; i < num; i++) {
    strokeWeight(diam1/30)
    push();
    let offSet = TWO_PI / num * i;
    rotate(offSet);
    sz = 200;
    x = map(cos(theta), -1, 1, sz, width * .2);
    translate(x, 90);
    push();
    rotate(theta);
    if (i % 2 == 0) {
      fill(30, 0.000001);
      rect(diam1/10 , diam1/10 , sz, sz * 1);
    }
    else {
      stroke('#42d6f7');
      line(diam1 / 10, 5000, diam1 / 10, 0.001);
    }
    pop();
    pop();
  }
  for (var i = 0; i < num; i++) {
    strokeWeight(diam2/30)
    push();
    let offSet = TWO_PI / num * i;
    rotate(offSet);
    sz = 100;
    x = map(sin(theta), -1, 1, sz, width * .2);
    translate(x, 90);
    push();
    rotate(theta);
    if (i % 2 == 0) {
      fill(30, 0.000001);
      rect(diam2/10 , diam2/10 , sz, sz * 1);
    }
    else {
      stroke('#00ff00');
      line(diam2 / 10, 5000, diam2 / 10, 0.001);
    }
    pop();
    pop();
  }
  for (var i = 0; i < num; i++) {
    strokeWeight(diam3/30)
    push();
    let offSet = TWO_PI / num * i;
    rotate(offSet);
    sz = 50;
    x = map(tan(theta), -1, 1, sz, width * .2);
    translate(x, 90);
    push();
    rotate(theta);
    if (i % 2 == 0) {
      fill(30, 0.000001);
      rect(diam3/5 , diam3/5 , sz, sz * 1);
    }
    else {
      stroke('#00ff00');
      line(diam3 / 5, 5000, diam3 / 5, 0.001);
    }
    pop();
    pop();
  }
  theta += TWO_PI / frames;
}

function mousePressed() {
  toggleListen()
  mic.stop()
}



function toggleListen() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    text('listening to audio', width / 2, height / 2);
    button.html("Stop");
  } else {
    text('click Play button to start', width / 2, height / 2);

    button.html("Listen");
  }
}
