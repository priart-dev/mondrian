function setup() {
    //create a large square canvas
    createCanvas(800, 800);
}

function draw() {
    //set the fill colour to red
    fill(255, 0, 0);

    //set a thick stroke weight for the black lines
    strokeWeight(12);

    //draw the red rectangle
    rect(100, 50, 600, 600);

    fill(255, 255, 255);
    rect(100, 50, 135, 200);

    fill(255, 255, 255);
    rect(100, 260, 135, 230);

    fill(0, 0, 255);
    rect(100, 490, 135, 160);

    fill(255, 255, 255);
    rect(235, 490, 390, 160);

    fill(255, 255, 255);
    rect(625, 490, 75, 70);

    fill(255, 255, 0);
    rect(625, 570, 75, 80);
}