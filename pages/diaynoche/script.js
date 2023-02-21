new p5(function(sketch) {
    let sol = {
        circleX: 10,
        circleY: 1,
        circleWidth: 100,
        circleColor: '#ffad21'
    }
    
    let luna = {
        circleX: 50,
        circleY: 10,
        circleWidth: 100,
        circleColor: '#ffad21'
    }
    
    // The line below adds autocompletion for p5.js which is very Helpful
    /// <reference path="./p5.d.ts" />
    
    // HELP: https://replit.com/@vogelino/P5js-Conditionals
    
    // Here are the docs for P5.js: https://p5js.org/reference/
    let isNight = false;
    
    // The setup function is called once at the beginning
    sketch.setup = () => {
        sketch.createCanvas(720, 360);
        sketch.background(255);
    
        // Decide to draw either the day or the night
        // based on the isNight variabl
    }
    
    
    sketch.draw = () => {
        if (!isNight) {
        sketch.background("#00029b");
        sketch.fill("#fff4a8");
        sketch.ellipse(luna.circleX, luna.circleY, luna.circleWidth)
        luna.circleX++;
        luna.circleY++;
        if (luna.circleX > (sketch.width + luna.circleWidth)) {
            luna.circleX = -50;
            luna.circleY = -60;
            
        }
        }
    }
}, 'diaynoche-canvas');    