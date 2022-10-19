// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Draw Small Windows X-Axis
let smallRectangleX = 17;
// let rectangleRow1 = 
    for (let i = 0; i < 4; i ++) {
        smallRectangleX += 23
        ctx.fillStyle = "white";
        ctx. fillRect(smallRectangleX, 200, 10, 10);
    }

// Draw Thick Windows
let thickRectangleY = 334;
for (let i = 0; i < 6; i++) {
    thickRectangleY += 41;
    ctx.fillStyle = "white";
    ctx.fillRect(20, thickRectangleY, 110, 20);
}

// Draw Long Windows
let longRectangleX = 145;
for (let i = 0; i < 5; i++) {
    longRectangleX += 25;
    ctx.fillStyle = "white";
    ctx.fillRect(longRectangleX, 125, 10, 475);
}