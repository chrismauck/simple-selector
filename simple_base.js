/*! Simple Selector (simple_base.js) | GNU GPLv3 License | Copyright (c) 2019 Chris Mauck
    Source: https://github.com/chrismauck/simple-selector/
*/

let $ = window.$ || null;
!function (b, c, d, f) {
    'use strict';
    function _el(e) { c.push.apply(this, e && e.nodeType ? [e] : '' + e === e ? b.querySelectorAll(e) : f) }
    $ = (e) => { return (typeof e==='function') ? /c/.test(b.readyState) ? e() : $(b).on('DOMContentLoaded', e) : new _el(e) }
    $[d] = _el[d] = $.fn = _el.fn = {
        length: 0,
        on: function (e, b) { return this.each( c => { c.addEventListener(e, b); }) },
        off: function (e, b) { return this.each( c => { c.removeEventListener(e, b); }) },
        each: function (e, b) { c.forEach.call(this, e, b); return this; },
        sort: c.sort,
        splice: c.splice
    };
}(document, [], 'prototype');