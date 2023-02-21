/// <reference path="./p5.d.ts" />
// Here are the docs for P5.js: https://p5js.org/reference/

new p5(function(sketch) {
    const container = document.getElementById("collective-healing-canvas");
    xoff = 0;

    sketch.setup = () => {
        sketch.createCanvas(720, 360);
        sketch.colorMode(sketch.HSL)
    }

    sketch.draw = () => {
        if (container.style.visibility === "hidden") {
            return;
        }
        
        sketch.background(243, 70, 95)  
        for (let waveObject of brainWavesJson.slice(90)) {
            createWave(waveObject)
        }

        xoff += 0.6

    }

    function createWave(waveObject) {
        let y = sketch.map(waveObject.waveAverage, 0, 100, 0, sketch.height) // maps the wave avarage to a place in the canvas
        let lightScalar = sketch.map(waveObject.waveAverage, 0, 100, 30, 80)
        let saturationScalar = sketch.map(waveObject.waveAverage, 0, 100, 50, 100)
        let scalar = 100 - waveObject.waveAverage
        let offset = xoff + waveObject.waveOffset

        for (let x = 0; x < sketch.width; x++) {
            sketch.strokeWeight(2)
            sketch.stroke(113, saturationScalar, lightScalar )
            sketch.point(x, sketch.noise((x - offset)*0.09) * scalar + y)
        }
    }
}, 'collective-healing-canvas');