/// <reference path="./p5.d.ts" />
// Here are the docs for P5.js: https://p5js.org/reference/

new p5(function(sketch) {

    let xoff = 0;
    let years = ["1990", "2000", "2010", "2020"];
    let selectedYear = 0;


    sketch.setup = () => {
        sketch.createCanvas(720, 360);
        sketch.frameRate(1)

    // First, we load the file
    
    }

    sketch.draw = () => {
    // If our json file hasn't been loaded yet, we skip the function by returning nothing
        sketch.background ("#b6d1ce")
        if (!biodiversityJson) {
            return
        }
        for (let country of Object.values(biodiversityJson)) {
            drawCountry(country, "1990")
            
        }

        sketch.fill("#485254")
        sketch.textSize(15)
        sketch.textFont("Martian Mono")
        sketch.textAlign(sketch.CENTER)
        sketch.text("Forest coverage in " + years[selectedYear], 10, 315, 710, 350)
        sketch.fill("#485254")
        sketch.textSize(10)
        sketch.textFont("Martian Mono")
        sketch.textAlign(sketch.CENTER)
        sketch.text("press the right and left arrow to navigate", 10, 335, 710, 350)
    }

    function drawCountry(country) {
        let countryX = (country.coordinates.long + 180) * 2
        let countryY = (country.coordinates.lat - 90) * -2
        let countrySize = Math.pow(country.area, 0.23) * 2
        //xoff += 0.0001
        //let perilNoise = map(noise(xoff), 0, 1, -10, 10)
        let forestSize = ((country.forestCoverage[years[selectedYear]] /* + perilNoise*/)  * countrySize ) / 100
    
        sketch.noFill()
        sketch.stroke ("#485254")
        sketch.circle(countryX, countryY, countrySize)

        sketch.noStroke()
        sketch.fill ("#288654")
        sketch.circle(countryX, countryY, forestSize)
    }

    sketch.keyPressed = () => {
        if (sketch.keyCode === sketch.LEFT_ARROW) {
            if (selectedYear === 0) {
                selectedYear = 3
            }
            else {
                selectedYear -= 1;
            }
            }
        else if (sketch.keyCode === sketch.RIGHT_ARROW) {
            if (selectedYear === 3) {
                selectedYear = 0;
            }
            else {
                selectedYear += 1;
            }
        }
    }

}, 'biodiversity-canvas');
