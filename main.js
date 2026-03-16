let mainShader;

function preload() {
  mainShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  shader(mainShader);
  mainShader.setUniform("u_time", millis() / 1000.0);
  mainShader.setUniform("u_res", [width, height]);
  mainShader.setUniform("u_mouse", [
    mouseX,
    height - mouseY,
    mouseIsPressed ? 1 : 0,
    mouseIsPressed ? 1 : 0,
  ]);
  rect(-width / 2, -height / 2, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
