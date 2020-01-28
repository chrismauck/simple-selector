/*! Simple Selector (simple_attributes.js) | GNU AGPL-3.0 License | https://github.com/chrismauck/simple-selector/ */

/** .attr(n, v)
 * Element attribute getter and setter
 * @param {string} n    Attribute name, if v ommitted will return value
 * @param {string} v    Optional value, if included will apply value to named attribute
 * Usage: get - $(selector).attr('title'), set - $(selector).attr('title', 'New Title')
 */
$.fn.attr = function (n, v) { 
    return v === []._ ? this[0].getAttribute(n) : this.each( c => { c.setAttribute(n, v); }); 
}

/** .hasAttr(n)
 * Element attribute validation with boolean return
 * @param {string} n    Attribute name to search for
 * Usage: $(selector).hasAttr('title')
 */
$.fn.hasAttr = function (n) { return this[0].hasAttribute(n); };

/** .removeAttr(n)
 * Element attribute removal
 * @param {string} n    Attribute name for value to be removed
 * Usage: $(selector).removeAttr('id')
 */
$.fn.removeAttr = function (n) {
    return this.each( b => { b.removeAttribute(n); });
};

/** .data(n, v)
 * Data attribute getter and setter
 * @param {string} n    Attribute name, if v ommitted will return value
 * @param {string} v    Optional value, if included will apply value to named attribute
 * Usage: get - $(selector).data('category'), set - $(selector).data('category', 'Supplies')
 */
function camel(s) { return s.replace(/-+(.)?/g, char => char ? char.toUpperCase() : ''); }
$.fn.data = function(n, v) {
    if (typeof n === 'string' && v === []._) {
        var el = this.nodeType ? this : this[0];
        return el && 'dataset' in el ? el['dataset'][camel(n)] : undefined;
    }
    return this.each( el => { el['dataset'][camel(n)] = v; });
};