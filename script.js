function preload() {
    halo= loadImage("halo.png")
}
function setup() {
    canvas= createCanvas(600, 450);
    canvas.position(430, 220);

    camera= createCapture(VIDEO);
    camera.hide();
}
function draw() {
    image(camera, 0, 0, 600, 450);
}