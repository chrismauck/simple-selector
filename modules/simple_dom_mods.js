/*! Simple Selector (simple_dom_mods.js) | GNU GPLv3 License | Copyright (c) 2019 Chris Mauck
    Source: https://github.com/chrismauck/simple-selector/
*/

/* DOM Modification */
/**.append(e)
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * @param {string} e Content to append 
 */
$.fn.append = function(e) {
    return this.each( c => { c.append(e.cloneNode(true)), e.remove() });
};

/** .prepend(e)
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * @param {string} e Content to prepend
 */
$.fn.prepend = function(e) {
    return this.each( c => { c.prepend(e.cloneNode(true)), e.remove() });
};

/** .clone(e)
 * Create a deep copy of the set of matched elements.
 */
$.fn.clone = function(e) {
    return e === []._ ? this[0].cloneNode(true) : this[0].cloneNode(false);
};

/* DOM traversal */
/** .first()
 * Reduce the set of matched elements to the first in the set.
 * - Usage: $('#ul li').first()
 */
$.fn.first = function() {
    return $(this[0]);
};

/** .last()
 * Reduce the set of matched elements to the final one in the set.
 * - Usage: $('#ul li').last()
 */
$.fn.last = function() {
    return $(this[this.length - 1]);
};

/** .eq(n)
 * Reduce the set of matched elements to the one at the specified index.
 * @param {integer} n Value representing the index being requested
 */
$.fn.eq = function(i) {
    return $(this[i]);
};

/** .children(e)
 * Get the children of each element in the set of matched elements.
 * @param {string} e CSS selector
 * - Usage: $(selector).children('div')
 */
$.fn.children = function(e) {
    let a = this[0].map( x => x.queryAll(e));
    return [].concat(...a);
}