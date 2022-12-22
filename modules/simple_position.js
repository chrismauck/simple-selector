/*! Simple Selector (simple_position.js) | GNU GPLv3 License | Copyright (c) 2019 Chris Mauck
    Source: https://github.com/chrismauck/simple-selector/
*/

/* Position Management */

/** .position()
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 */
$.fn.position = function() {
    return { top: this[0].offsetTop, left: this[0].offsetLeft };
};
/** .offset()
 * Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.
 */
$.fn.offset = function() {
    var r = this[0].getBoundingClientRect(), db = document.body;
    return { top: r.top + db.scrollTop, left: r.left + db.scrollLeft };
};

/** .pos()
 * Simply returns an object containing x and y scroll position.
 */
$.fn.pos = () => { return { 'x': window.scrollX, 'y': window.scrollY }; };