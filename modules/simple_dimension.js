/*! Simple Selector (simple_dimension.js) | GNU GPLv3 License | Copyright (c) 2019 Chris Mauck
    Source: https://github.com/chrismauck/simple-selector/
*/

['width','height'].forEach(( n, i ) => {
/** .width() and .height() Get or Set width or height on referenced selector object.
 * @param {*} c (null||bool||int)
 * - .width(null||bool||int)     null = get width, true = get outerWidth, int = set width in px
 * - .height(null||bool||int)    null = get height, true = get outerHeight, int = set height in px
 */
    $.fn[n] = function(c) {
        return (typeof c === 'number') ? this[0].style[n] = c+'px' : (typeof c === typeof true) ? this[0]['offset'+cap(n)] : parseInt(getComputedStyle(this[0], null)[n]);
    };
});
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);