/*! Simple Selector (simple_display.js) | GNU AGPL-3.0 License | https://github.com/chrismauck/simple-selector/ */

/** .hide() Hides the referenced selector object.
 * - Accepts no parameters.
 * - For speed and callback options, use .fadeOut()
 */
$.fn.hide = function() {
    return this.each( e => { e.style.display = 'none'; });
};

/** .show() Shows the referenced selector object.
 * - Accepts no parameters. 
 * - For speed and callback options, use .fadeIn()
 */
$.fn.show = function() {
    return this.each( e => { e.style.display = 'block'; });
};

/** .flex() Shows the referenced selector object with display flex instead of block
 * - Accepts no parameters. 
 */
$.fn.flex = function() {
    return this.each( e => { e.style.display = 'flex'; });
};

/** .toggle() Toggles display of the referenced selector object.
 * - Accepts no parameters.
 */
$.fn.toggle = function() {
    return this.each( e => { e.style.display = e.style.display === 'block' ? 'none' : 'block'; });
};


/** .fadeOut() Decreases the opacity over time, then sets display none on referenced selector object.
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

/** .fadeIn() Unsets display property then increases the opacity over time on referenced selector object.
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