new p5(function(sketch) {

    let insideColor, outsideColor;
    const shapeSize = 100;
    const padding = 3;
    const spacing = shapeSize + 1 * padding;
    const columns = 5;
    const rows = 5;
    // The setup function is called once at the beginning
    sketch.setup = () => {
        sketch.createCanvas(600, 600);
        sketch.background(255, 80, 5);
        sketch.frameRate(1);
    }
    // The draw function is called on each frame!
    sketch.draw = () => {
        sketch.background(255, 80, 5);
        for (let x = 0; x <= columns; x++) {
            for (let y=0; y <= rows; y++){
            sketch.stroke('#ffffff')
            sketch.noFill();
            if (sketch.second() % 2 == 0) {
                sketch.circle(x * spacing, y * spacing, shapeSize);
                outsideColor = sketch.color('#42f584');
                insideColor = sketch.color(66, 87, 245);
            }
            else {
                insideColor = sketch.color(255, 204, 100);
                outsideColor = sketch.color('#7CA2D7');
                sketch.square(x * spacing, y * spacing, shapeSize);
            }
            }
    }
    
    sketch.fill(outsideColor);
    sketch.stroke('#fffff');
    sketch.arc(300, 200, 200, 200, Math.PI / 180 * -90, Math.PI / 180 * 90,)
    sketch.arc(300, 400, 200, 200, Math.PI / 180 * 90, Math.PI / 180 * -90,)

    sketch.fill(insideColor);
    sketch.stroke('#fffff');
    sketch.arc(300, 200, 100, 200, Math.PI / 180 * -90, Math.PI / 180 * 90,)
    sketch.arc(300, 400, 100, 200, Math.PI / 180 * 90, Math.PI / 180 * -90,)

    }
}, 'zero-canvas');
