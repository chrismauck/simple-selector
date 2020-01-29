/*! Simple Selector (simple_swipe.js) | GNU AGPL-3.0 License | https://github.com/chrismauck/simple-selector/ */

/** .swipe()
 * @param {object=} opts optional user defined settings to replace defaults
 * @param {method} cb    callback function on swipe completion
 * Returns object with 'direction', 'distance' and 'duration'
 */
$.fn.swipe = function( opts, cb ) {
    let isTouch = 'ontouchstart' in window;
    let xDown, yDown, xUp, yUp, xDiff, yDiff, timeDown, startEl, finalEl;
    let starts={}, ends={},
        options = {
            threshold: opts.threshold || 100,
            timeout: opts.timeout || 1000,
            ignore: opts.ignore || 'data-swipe-ignore',
            strict: opts.strict || false
        },
        t = {
            start: isTouch ? 'touchstart' : 'mousedown',
            move: isTouch ? 'touchmove' : 'mousemove',
            end: isTouch ? 'touchend' : 'mouseup'
        };
        let $el = this;

    // Event Methods
    const handleTouchEnd = (e) => {
        // e.stopPropagation();
        let same = false, destEl=null;
        finalEl = document.elementFromPoint(xUp, yUp);
        if (finalEl===e.target || finalEl.parentNode===e.target) {
            same = true;
            destEl = (finalEl===e.target) ? finalEl : finalEl.parentNode;
        }
        if (options.strict && destEl !== e.target) return;

        let timeDiff = Date.now() - timeDown, eventResults = {};

        if (validateSwipeDistance() && timeDiff < options.timeout) {
            eventResults.direction = calculateDirection(starts, ends);
            eventResults.distance = calculateDistance(starts, ends);
            eventResults.duration = timeDiff;
        }
        if (eventResults.direction) {
            return (typeof opts === 'function') ? opts(eventResults) : (opts && typeof cb === 'function') ? cb(eventResults) : null;
        }

        xDown = yDown = xUp = yUp = timeDown = finalEl = null;
    }
    const handleTouchStart = (e) => {
        if (e.target.getAttribute(options.ignore) === 'true') return;
        let ev = (e.touches === []._) ? e : e.touches[0];
        startEl = e.target;
        timeDown = Date.now();
        xDown = starts.x = ev.clientX;
        yDown = starts.y = ev.clientY;
        xDiff = yDiff = 0;
    }
    const handleTouchMove = (e) => {
        if (!xDown || !yDown) return;
        let ev = (e.touches === []._) ? e : e.touches[0];
        xUp = ends.x = ev.clientX;
        yUp = ends.y = ev.clientY;
        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

    // Utility Methods
    const validateSwipeDistance = () => {
        let valid = !0;
        return null !== options.threshold && (valid = (Math.abs(xDiff) > options.threshold || Math.abs(yDiff) > options.threshold)), valid
    }
    const calculateAngle = (startPoint, endPoint) => {
        let x = startPoint.x - endPoint.x, y = endPoint.y - startPoint.y, r = Math.atan2(y, x), a = Math.round(180 * r / Math.PI);
        return 0 > a && (a = 360 - Math.abs(a)), a
    }
    const calculateDirection = (start, end) => {
        if (comparePoints(start, end)) return "none";
        const angle = calculateAngle(start, end);
        return 45 >= angle && angle >= 0 ? "left" : 360 >= angle && angle >= 315 ? "left" : angle >= 135 && 225 >= angle ? "right" : angle > 45 && 135 > angle ? "down" : "up"
    }
    const calculateDistance = (start, end) => Math.round(Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)))
    const comparePoints = (A, B) => A.x == B.x && A.y == B.y;

    $el.on(t.start, (e) => { handleTouchStart(e); });
    $el.on(t.move, (e) => { handleTouchMove(e); });
    $el.on(t.end, (e) => { handleTouchEnd(e); });
};
