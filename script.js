
function setupParallax() {
    const p = new ParallaxController();

    for (const scroller of document.getElementsByClassName('parallax-horizontalScroll')) {
        p.registerHorizontalScroller(scroller);
    }

    for (const canvasScroller of document.getElementsByClassName('canvas-scroll-container')) {
        const canvasContainer = canvasScroller.getElementsByClassName('canvas-container')[0];
        p.registerParallax(canvasScroller, -2, 2, (value) => {
            const scale = Math.min(1, 2 - Math.abs(value));
            if (scale) {
                canvasContainer.style.visibility = "visible"  
                canvasContainer.style.transform = `translate(-50%, -50%) scale(${scale})`;
            } else {
                canvasContainer.style.visibility = "hidden"
            }
        });
    }
}

var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
    document.getElementById("nav-bar").classList.remove("hidden");
    } 
    else {
    document.getElementById("nav-bar").classList.add("hidden");
    }
    prevScrollPos = currentScrollPos;
});