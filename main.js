function setup() {
    canvas = createCanvas(620, 465);
    canvas.position(810, 295);
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 620, 465)
}