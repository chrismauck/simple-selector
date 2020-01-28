# Simple Selector

Provides jQuery/Zepto style convenience methods for HTML document traversal and manipulation in the browser. 

**tl;dr;** This is just another JavaScript library to make writing code more efficient, etc.

## Overview

### Just the core
For simple selector methods only, you can use the [simple_base.js](https://github.com/chrismauck/simple-selector/tree/master/simple_base.js) file. This will allow you to achieve basic add/remove event listener along with a simple each method.

### Extensibility
Like other libraries in use today, there are a number of plugins that can easily be dropped into your JS along with the simple_base.js file. Each of those "modules" can be found in the [modules directory](https://github.com/chrismauck/simple-selector/tree/master/modules/) and the code is fully commented (though essentially minified).

### Fully Loaded
For the base library and all included modules, you can use [simple.js](https://github.com/chrismauck/simple-selector/tree/master/simple.js). This includes all DOM related modules, except things like swipe() and future touch related entries.

## Basic Usage
Load your selected version of the simple selector library followed by any modules, then load your custom scripts.

### Core methods only
**.on()**
Attach an event handler function for one or more events to the selected elements. Expects standard CSS selector.

    /** .on( event, callback)
    * @param {string} event Events such as click, mousedown, blur, etc.
    * @param {method} callback Method to fire on event
    */

Example usage:

    $('body').on('click', ( e ) => {
	    console.log("Clicked");
	});

**.off()**
Remove an event handler. Expects standard CSS selector.

    /** .off( event, callback)
    * @param {string} event Events such as click, mousedown, blur, etc.
    * @param {method} callback Method included with .on()
    */

Example usage:

    $('body').off('click', ( e ) => {
	    console.log("Clicked");
	});

**.each()**
Iterate over a selector object, executing a function for each matched element.

    /** .each(callback)
    * @param {method} callback Method to fire on each element referenced in the selector object loop
    */

Each time the callback runs, it is passed the current loop iteration, beginning from 0. The callback is fired in the context of the current DOM element, so the keyword `this` refers to the element.

Example usage:

    $('li').each(( index ) => {
        console.log( 'My index is: ' + index);
    });

For more extensible use and iteration over DOM elements values, attributes, etc. Please check out the [modules directory](https://github.com/chrismauck/simple-selector/tree/master/modules/).