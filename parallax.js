class ParallaxController {
    constructor() {
        this.scrollCallbacks = [];
        window.addEventListener('scroll', () => {
            this.scrollCallbacks.forEach((cb) => cb());
        });
        this.resizeCallbacks = [];
        window.addEventListener('resize', () => {
            this.resizeCallbacks.concat(this.scrollCallbacks).forEach((cb) => cb());
        });
    }

    _getParallaxScalar(element, horizontal = false) {
        const rect = element.getBoundingClientRect();
        if (horizontal) {
            const w = document.body.clientWidth;
            if (rect.left > w) return 0;
            if (rect.right < 0) return 1;
            return 1 - (rect.left + rect.width) / (w + rect.width);
        } else {
            const h = document.body.clientHeight;
            if (rect.top > h) return 0;
            if (rect.bottom < 0) return 1;
            return 1 - (rect.top + rect.height) / (h + rect.height);
        }
    }

    _getParallaxValue(element, min, max, horizontal = false) {
        const scalar = this._getParallaxScalar(element, horizontal);
        return min + scalar * (max - min);
    }

    registerScrollCallback(callback) {
        callback();
        this.scrollCallbacks.push(callback);
    }

    registerResizeCallback(callback) {
        callback();
        this.resizeCallbacks.push(callback);
    }

    registerParallax(element, min, max, setProperty, horizontal = false) {
        this.registerScrollCallback(() => {
            const value = this._getParallaxValue(element, min, max, horizontal);
            setProperty(value);
        });
    }

    registerHorizontalScroller(element) {
        // setup & wrapping in container
        const container = document.createElement('div');
        container.style.position = 'relative';
        container.style.width = element.style.width;
        container.style.overflow = 'hidden';

        element.style.position = 'absolute';
        element.style.width = '';

        element.parentNode.replaceChild(container, element);
        container.appendChild(element);

        let innerRect;
        let outterRect;
        let absoluteTop;
        let maxOffset;

        this.registerResizeCallback(() => {
            innerRect = element.getBoundingClientRect();
            outterRect = container.getBoundingClientRect();
            absoluteTop = outterRect.top + window.scrollY;

            maxOffset = innerRect.width - outterRect.width;
            if (maxOffset < 0) maxOffset = 0;
            container.style.height = maxOffset + innerRect.height;
            console.log(container.style.height)
        });

        this.registerScrollCallback(() => {
            let offset = window.scrollY - absoluteTop;
            if (offset < 0) offset = 0;
            if (offset > maxOffset) offset = maxOffset;

            element.style.top = offset;
            element.style.left = -offset;
        });

    }

}
