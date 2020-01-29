/*! Simple Selector (simple_pinch.js) | GNU GPLv3 License | Copyright (c) 2019 Chris Mauck
    Source: https://github.com/chrismauck/simple-selector/
*/

/** .pinch()
 * @param {object=} opt  optional user defined settings to replace defaults
 * @param {method} cb    callback function on swipe completion
 * Returns object with 'scale', 'zoom' and 'action'
 */

$.fn.pinch = function( opt, cb ) {
    let $el = this;
    let isTouch = 'ontouchstart' in window;
    let PROPS_CLIENT_XY = ['clientX', 'clientY'];
    let theStart, theEnd, timeDown, isGest = 'ongesturestart' in window;
    let t = {
        start: isGest ? 'gesturestart' : 'touchstart',
        move: isGest ? 'gesturechange' : 'touchmove',
        end: isGest ? 'gestureend' : 'touchend'
    },
    options = {
        timeout: opt.timeout || 1000,
        strict: opt.strict || false
    };

    const handleGStart = (e) => {
        if (!isTouch) return;
        e.preventDefault();
        e.stopPropagation();
        let ev = (e.touches === []._) ? e : e.touches;
        timeDown = Date.now();
        theStart = ev;
    };

    const handleGChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let ev = (e.touches === []._) ? e : e.touches;
        theEnd = ev;
    };

    const handleGEnd = (e) => {
        if (!isTouch) return;
        if (!isGest) { 
            PROPS_CLIENT_XY = ['clientX', 'clientY'];
            e.scale = getScale(theStart, theEnd);
        }

        let timeDiff = Date.now() - timeDown;
        let eventResults = {};
        if (e.scale !== 1 && timeDiff < options.timeout) {
            eventResults.scale = e.scale.toFixed(1);
            eventResults.zoom = (e.scale < 1) ? "out" : (e.scale > 1) ? "in" : "none";
            eventResults.action = (e.scale < 1) ? "pinch" : (e.scale > 1) ? "flick" : "none"; 
            eventResults.duration = timeDiff;
        }

        if (eventResults.duration) {
            return (typeof opt === 'function') ? opt(eventResults) : (opt && typeof cb === 'function') ? cb(eventResults) : null;
        }

    };

    const getDistance = (p1, p2, props) => {
        if (!props) { props = ['x', 'y']; }
        let x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
    }

    const getScale = (start, end) => {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }
    $el.on(t.start, (e) => { handleGStart(e); });
    $el.on(t.move, (e) => { handleGChange(e); });
    $el.on(t.end, (e) => { handleGEnd(e); });
};