/*! Simple Selector (simple.js) | GNU AGPL-3.0 License | https://github.com/chrismauck/simple-selector/ */

let $ = window.$ || null;
!function (b, c, d, f) {
    'use strict';
    function _el(e) { c.push.apply(this, e && e.nodeType ? [e] : '' + e === e ? b.querySelectorAll(e) : f) }
    function camel(s) { return s.replace(/-+(.)?/g, char => char ? char.toUpperCase() : ''); }
    $ = function (e) { return (typeof e==='function') ? /c/.test(b.readyState) ? e() : $(b).on('DOMContentLoaded', e) : new _el(e) }
    $[d] = _el[d] = $.fn = _el.fn = {
        length: 0,
        on: function (e, b) { return this.each(function (c) { c.addEventListener(e, b); }) },
        off: function (e, b) { return this.each(function (c) { c.removeEventListener(e, b); }) },
        each: function (e, b) { c.forEach.call(this, e, b); return this; },
        one: function(e, b) {
            this.each( function(c) {
                c.addEventListener(e, function(el) { el.target.removeEventListener(el.type, arguments.callee); return b.apply(c, arguments); });
            });
        },
        // DOM traversal
        first: function() { return $(this[0]); },
        last: function() { return $(this[this.length - 1]); },
        eq: function(i) { return $(this[i]); },
        children: function(e) { var a = this[0].map( x => x.queryAll(e)); return [].concat(...a);},
        // DOM modification
        append: function(e) { return this.each( c => { c.append(e.cloneNode(true)), e.remove() }); },
        prepend: function(e) { return this.each( c => { c.prepend(e.cloneNode(true)), e.remove() }); },
        clone: function(e) { return e === []._ ? this[0].cloneNode(true) : this[0].cloneNode(false); },
        // manipulation - get/set text, html or input values
        text: function (e) { return e === []._ ? this[0].textContent : this.each( b => { b.textContent = e; }); },
        html: function (e) { return e === []._ ? this[0].innerHTML : this.each( b => { b.innerHTML = e; }); },
        empty: function () { return this.each( b => { b.innerHTML = ''; }); },
        remove: function() { return this.each( b => { b.parentNode.removeChild(b); }); },
        val: function (e) { return e === []._ ? this[0].value : this.each( b => { b.value = e; }); },
        // manipulate attributes
        attr: function (e, b) { return b === []._ ? this[0].getAttribute(e) : this.each( c => { c.setAttribute(e, b); }); },
        removeAttr: function (e) { return this.each( b => { b.removeAttribute(e); }); },
        hasAttr: function (e) { return this[0].hasAttribute(e); },
        // class
        hasClass: function(e) { return this[0].classList.contains(e); },
        data: function(k, v) {
            if (typeof k === 'string' && v === []._) { var el = this.nodeType ? this : this[0]; return el && 'dataset' in el ? el['dataset'][camel(k)] : undefined; } return this.each( el => { el['dataset'][camel(k)] = v; }); },
        // visibility
        hide: function() { return this.each( e => { e.style.display = 'none'; }); },
        show: function() { return this.each( e => { e.style.display = 'block'; }); },
        flex: function() { return this.each( e => { e.style.display = 'flex'; }); },
        toggle: function() { return this.each( e => { e.style.display = e.style.display === 'block' ? 'none' : 'block'; }); },
        position: function() { return { top: this[0].offsetTop, left: this[0].offsetLeft }; },
        offset: function() { 
            var r = this[0].getBoundingClientRect(), db = document.body;
            return { top: r.top + db.scrollTop, left: r.left + db.scrollLeft }; },
        pos: function() { return { 'x': window.scrollX, 'y': window.scrollY }; },
        sort: c.sort,
        splice: c.splice
    };
    const props = ['addClass', 'removeClass', 'toggleClass'], maps = ['add', 'remove', 'toggle'];
    props.forEach(function(p, i) { $.fn[p] = function(e) { return this.each( b => { b.classList[maps[i]](e); }); }; });
    ['width','height'].forEach(function( n, i ) {
        $.fn[n] = function(c) {
            return (typeof c === 'number') ? this[0].style[n] = c+'px' : (typeof c === typeof true) ? this[0]['offset'+cap(n)] : parseInt(getComputedStyle(this[0], null)[n]);
        };
    });
    const evt = ['blur','focus','focusin','focusout','resize','scroll','click','dblclick','mousedown','mouseup','mousemove','mouseover','mouseout','mouseenter','mouseleave','change','select','submit','keydown','keypress','keyup','contextmenu'];
    evt.forEach(function( n, i ) { $.fn[n] = function(cb) { return this.on(n, cb); }; });
}(document, [], 'prototype');

/** .fadeOut()
 * @param {integer} d   optional - duration of transition, default is 400
 * @param {method} fn   optional - callback function
 */
$.fn.fadeOut = function(d=400, fn) {
    var tick = 0, frm = 16.5, dur;
    if (typeof d !== 'function') { dur = frm / parseInt(d, 10); } else { dur = (frm/400); fn = d; }
    return this.each( e => {
        e.style.opacity = 1;
        function run() {
            e.style.opacity -= dur;
            if (e.style.opacity < 0) { tick = 1, e.style.opacity = 0, e.style.display = 'none', (typeof fn ==='function') ? fn.apply() : ''; }
            if (!tick) requestAnimationFrame(run);
        }
        run();
    });
};

/** .fadeIn()
 * @param {integer} d   optional - duration of transition, default is 400
 * @param {method} fn   optional - callback function
 */
$.fn.fadeIn = function(d=400, fn) {
    var tick = 0, frm = 16.5, dur;
    if (typeof d !== 'function') { dur = frm / parseInt(d, 10); } else { dur = (frm/400); fn = d; }
    return this.each( e => {
        e.style.opacity = 0;
        e.style.display = '';
        function run() {
            e.style.opacity =+ parseFloat(e.style.opacity) + dur;
            if (e.style.opacity > 1) { tick = 1; e.style.opacity = 1; (typeof fn ==='function') ? fn.apply() : ''; }
            if (!tick) requestAnimationFrame(run);
        }
        run();
    });
};

// $.fn.fadeTo = function(d=400, o=0, fn) {
//     var tick = 0, dur, co = this.style.opacity;
//     if (typeof d !== 'function') { dur = frm / parseInt(d, 10); } else { dur = (frm/400); fn = d; }
//     return this.each( e => {
//         (co===1) ? e.style.opacity = 1 : e.style.opacity = 0, e.style.display = '';
//         function run() {
//             if (o > co) {
//                 e.style.opacity =+ parseFloat(e.style.opacity) + dur;//0.1;
//                 if (e.style.opacity > o) { tick = 1, e.style.opacity = o, (typeof fn ==='function') ? fn.apply() : ''; }
//             } else {
//                 e.style.opacity -= dur;
//                 if (e.style.opacity < o) { tick = 1, e.style.opacity = o, e.style.display = 'none', (typeof fn ==='function') ? fn.apply() : ''; }
//             }
//             if (!tick) requestAnimationFrame(run);
//         }
//         run();
//     });
// };

/** .swipe()
 * @param {object=} opts optional user defined settings to replace defaults
 * @param {method} cb    callback function on swipe completion
 * Returns object with 'direction', 'distance' and 'duration'
 */
$.fn.swipe = function( opts, cb ) {
    var isTouch = 'ontouchstart' in window;
    var xDown, yDown, xUp, yUp, xDiff, yDiff, timeDown, startEl, finalEl;
    var starts={}, ends={},
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
    var $el = this;

    // Event Methods
    const handleTouchEnd = (e) => {
        // e.stopPropagation();
        var same = false, destEl=null;
        finalEl = document.elementFromPoint(xUp, yUp);
        if (finalEl===e.target || finalEl.parentNode===e.target) {
            same = true;
            destEl = (finalEl===e.target) ? finalEl : finalEl.parentNode;
        }
        if (options.strict && destEl !== e.target) return;

        var timeDiff = Date.now() - timeDown, eventResults = {};

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
        var ev = (e.touches === []._) ? e : e.touches[0];
        startEl = e.target;
        timeDown = Date.now();
        xDown = starts.x = ev.clientX;
        yDown = starts.y = ev.clientY;
        xDiff = yDiff = 0;
    }
    const handleTouchMove = (e) => {
        if (!xDown || !yDown) return;
        var ev = (e.touches === []._) ? e : e.touches[0];
        xUp = ends.x = ev.clientX;
        yUp = ends.y = ev.clientY;
        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

    // Utility Methods
    const validateSwipeDistance = () => {
        var valid = !0;
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

cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);