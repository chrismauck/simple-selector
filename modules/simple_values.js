/*! Simple Selector (simple_values.js) | GNU GPLv3 License | Copyright (c) 2019 Chris Mauck
    Source: https://github.com/chrismauck/simple-selector/
*/

/** .text(t)
 * Text content getter and setter
 * @param {string} t    Optional text value to set, if omitted will return value
 * - Usage: get - $(selector).text(), set - $(selector).text('Hello World!')
 */
$.fn.text = function (t) {
    return t === []._ ? this[0].textContent : this.each( b => { b.textContent = t; });
};

/** .html(h)
 * HTML content getter and setter
 * @param {string} h    Optional HTML or Text value to set, if omitted will return value
 * - Usage: get - $(selector).html(), set - $(selector).html('<span>Hello World!</span>')
 */
$.fn.html = function (h) { return h === []._ ? this[0].innerHTML : this.each( b => { b.innerHTML = h; }); };

/** .empty()
 * Empty HTML content from selector object
 * - Usage: $(selector).empty()
 */
$.fn.empty = function () { return this.each( b => { b.innerHTML = ''; }); };

/** .remove()
 * Remove selector object node from the DOM
 * - Usage: $(selector).remove()
 */
$.fn.remove = function() { return this.each( b => { b.parentNode.removeChild(b); }); };

/** .val(v)
 * Input value getter and setter
 * @param {*} v    Optional value to set, if omitted will return current value
 * - Usage: get - $(input selector).val(), set - $(input selector).val('Foo')
 */
$.fn.val = function (v) { return v === []._ ? this[0].value : this.each( b => { b.value = v; }); };
