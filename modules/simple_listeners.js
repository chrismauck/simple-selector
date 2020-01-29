/*! Simple Selector (simple_listeners.js) | GNU GPLv3 License | Copyright (c) 2019 Chris Mauck
    Source: https://github.com/chrismauck/simple-selector/
*/

/** .one(e, b)
 * Only allow single use of event listener and immediately remove.
 * @param {string} e    Event name
 * @param {string} ev   Method to fire on event
 * - Usage: $(selector).one('click', function() {alert('Welcome!');});
 */
$.fn.one = function(e, ev) {
    this.each( function(c) {
        c.addEventListener(e, function(el) { el.target.removeEventListener(el.type, arguments.callee); return ev.apply(c, arguments); });
    });
};

/* EVENT methods/ listener pass throughs */
const evt = ['blur','focus','focusin','focusout','resize','scroll','click','dblclick','mousedown','mouseup','mousemove','mouseover','mouseout','mouseenter','mouseleave','change','select','submit','keydown','keypress','keyup','contextmenu'];
evt.forEach(( n, i ) => {
/** evt[n](cb)
 * Methods defined in evt[], utilized like .click(cb), .keydown(cb), etc. where cb = callback function.
 * @param {string} cb   Method to fire on event
 * - Usage: $(selector).focus(function() {alert('Woah, focus!');});
 */
    $.fn[n] = function(cb) { return this.on(n, cb); };
});