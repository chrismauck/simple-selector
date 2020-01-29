/*! Simple Selector (simple_class.js) | GNU AGPL-3.0 License | https://github.com/chrismauck/simple-selector/ */

/** Class Managment
 * .hasClass('name')
 * .addClass('name')
 * .removeClass('name')
 * .toggleClass('name')
 */
$.fn.hasClass = function(e) { return this[0].classList.contains(e); };
const props = ['addClass', 'removeClass', 'toggleClass'], maps = ['add', 'remove', 'toggle'];
props.forEach((p, i) => { $.fn[p] = function(e) { return this.each( b => { b.classList[maps[i]](e); }); }; });
