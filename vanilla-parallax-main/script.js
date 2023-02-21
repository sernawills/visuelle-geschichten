function setup() {
    const p = new ParallaxController();

    const spinner = document.getElementById('spinner');
    p.registerParallax(spinner, 0, 1000, (value) => {
        spinner.style.transform = `rotate(${value}deg)`
    })

    const horizontalScrollContent = document.getElementById('horizontalScrollContent');
    p.registerHorizontalScroller(horizontalScrollContent);

    const horizontalMover = document.getElementById('horizontal-mover');
    p.registerParallax(horizontalMover, 20, 70, (value) => {
        horizontalMover.style.transform = `translateY(${value}vh)`
    }, true)
}
