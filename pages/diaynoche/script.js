new p5(function(sketch) {
    // PARAMETERS
    // canvas size
    const width = 720;
    const height = 360;
    // orbit resolution
    const resolution = 1000;
    // colors
    const colorSun = [52, 34, 100];
    const colorMoon = [55, 56, 100];
    const colorDay = [210, 49, 100];
    const colorNight = [210, 100, 65];


    // RELATIVE VALUES
    // orbit
    const radius = height / 3 * 2;
    const centerX = width / 2;
    const centerY = height;
    // sun/moon
    const bodyDiameter = height / 4;

    // time is 0..<resolution & loops
    let time = 0;

    const drawSky = (time) => {
        const factor = Math.sin(time / resolution * 2 * Math.PI);
        const dayFactor = factor / 2 + 0.5;
        const nightFactor = factor / -2 + 0.5;

        const color = colorDay.map((c, i) =>
            c * dayFactor + colorNight[i] * nightFactor
        );
        sketch.background(...color);
    }

    const drawBody = (color, time) => {
        const x = centerX + Math.cos(time / resolution * 2 * Math.PI) * radius;
        const y = centerY + Math.sin(time / resolution * 2 * Math.PI) * radius;
        sketch.fill(...color);
        sketch.ellipse(x, y, bodyDiameter);
    }
    const drawSun = (time) => drawBody(colorSun, time);
    const drawMoon = (time) => drawBody(colorMoon, (time - resolution / 2) % resolution);
    
    sketch.setup = () => {
        sketch.createCanvas(width, height);
        sketch.colorMode(sketch.HSB);
        sketch.noStroke();
    }
    
    sketch.draw = () => {
        drawSky(time);
        drawSun(time);
        drawMoon(time);
        time = (time + 1) % resolution;
    }
}, 'diaynoche-canvas');