// The line below adds autocompletion for p5.js which is very Helpful
/// <reference path="./p5.d.ts" />

// HELP: https://replit.com/@vogelino/P5js-Loops

// Here are the docs for P5.js: https://p5js.org/reference/

new p5(function(sketch) {
    let gridElements = [
    {
        x: 10,
        y: 10,
        w: 150,
        h: 170
    },
    {
        x: 170,
        y: 10,
        w: 120,
        h: 170
    },
    {
        x: 300,
        y: 10,
        w: 230,
        h: 170
    },
    {
        x: 10,
        y: 190,
        w: 120,
        h: 170
    },
    {
        x: 140,
        y: 190,
        w: 230,
        h: 170
    },
    {
        x: 380,
        y: 190,
        w: 150,
        h: 170
    },
    {
        x: 10,
        y: 370,
        w: 230,
        h: 170
    },
    {
        x: 250,
        y: 370,
        w: 150,
        h: 170
    },
    {
        x: 410,
        y: 370,
        w: 120,
        h: 170
    },
    ]


    // The setup function is called once at the beginning
    sketch.setup = () => {
        sketch.createCanvas(540, 550);
        sketch.background("purple");
        sketch.angleMode(sketch.DEGREES);
        sketch.translate(200, );
        sketch.frameRate(0);

        drawGrid(gridElements);
        drawEllipse(gridElements[4])
        drawLines(gridElements[0])

        drawEllipse(gridElements[2])
        drawLines(gridElements[1])

        drawEllipse(gridElements[3])
        drawLines(gridElements[5])

        drawEllipse(gridElements[6])
        drawLines(gridElements[7])

        drawEllipse(gridElements[8])
    }

    function drawGrid(gridElements) {
        for (let element of gridElements) {
            console.log("hehe", element)
            sketch.fill("black")
            sketch.rect(element.x, element.y, element.w, element.h)
        }
    }

    function drawEllipse(element) {
        let centerX = element.x + element.w / 2;
        let centerY = element.y + element.h / 2;
        let initialW = element.w - 7;
        let initialH = element.h - 7;

        for (let i = 1; i <= 5; i++) {
            sketch.stroke("white")
            sketch.ellipse(centerX, centerY, (initialW / i), (initialH / i))
        }
    }

    function drawLines(element) {
        for (let i = 0; i < 30; i++) {
            sketch.line(
                element.x + Math.random() * element.w,
                element.y + Math.random() * element.h,
                element.x + Math.random() * element.w,
                element.y + Math.random() * element.h
            );
        }
    }
}, 'tic-tac-toe-canvas');