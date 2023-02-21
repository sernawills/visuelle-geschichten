new p5(function(sketch) {
    let t = 0;

    sketch.setup = () => {
        sketch.createCanvas(740, 750);
    }

    sketch.draw = () => {
        sketch.background("black");
        sketch.translate(sketch.width / 2, sketch.height / 2);

        let radius = 300;
        sketch.beginShape();
        sketch.stroke("white");
        sketch.noFill();
        for (let angle = 0; angle < sketch.TWO_PI; angle += 0.1) {
            let xoff = sketch.map(sketch.cos(angle), -1, 1, 0, 2);
            let yoff = sketch.map(sketch.sin(angle), -1, 1, 0, 2);
            let r = radius + (50 * sketch.noise(xoff, yoff, t));
            let x = r * sketch.cos(angle);
            let y = r * sketch.sin(angle);
            sketch.vertex(x, y);
        }
        sketch.endShape(sketch.CLOSE);

        t += 0.01;
    }

}, 'homepage-canvas');