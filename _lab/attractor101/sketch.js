var max_distance;
var canvas

function setup() {
//
  //var boZipage = createCanvas(710, 400);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.class("lemon");
  max_distance = dist(0, 0, width, height);
}

function draw() {
  clear();
  background(2);

  for(var i = 0; i <= width; i += 20) {
    for(var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 50;
      ellipse(i, j, size, size);
      fill((mouseX*255)/height,(mouseY*255)/width,200);
    }
  }
}
