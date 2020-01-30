/*! Simple Selector (simple_scrollto.js) | GNU GPLv3 License | Copyright (c) 2019 Chris Mauck
    Source: https://github.com/chrismauck/simple-selector/
*/

/** .scrollTo()
 * @param {*} a   optional user defined settings to replace defaults options are
 * -    {object}    object can define 'offset', 'target' and 'callback
 * -    {callback}  pass a callback method directly
 * -    {string}    solely define the target element ID
 */
$.fn.scrollTo = function (a = null) {
    let t, fn, w = window, o = 0;
    return isObj(a) ? (o = a.offset || 0, t = a.target || null, fn = a.callback || null) : isFunc(a) ? fn = a : !isFunc(a) && !isObj(a) && (t = a),
        this.each(e => {
            const _top = e => Math.floor($(e).offset().top - o),
                _trgt = t ? t : $(e).attr('href') && 1 < $(e).attr('href').length ? $(e).attr('href') : $(e).data('target'),
                _dest = document.querySelector(_trgt);
            if (!_dest) return;
            w.scrollBy({ top: _top(_dest), left: 0, behavior: 'smooth' });
            let i = setInterval(() => {
                let _bottom = w.innerHeight + w.pageYOffset >= document.body.offsetHeight - 2;
                (0 === _top(_dest) || _bottom) && (w.history.pushState('', '', _trgt), 'function' == typeof fn ? fn.apply() : '', clearInterval(i))
            }, 100)
        });
};

const isFunc = f => f && {}.toString.call(f) === '[object Function]';
const isObj = f => o && {}.toString.call(o) === '[object Object]';

