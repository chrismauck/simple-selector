# Simple Selector Modules

Additional convenience methods for HTML document traversal and manipulation in the browser to be used with the Simple Selector JavaScript library. Like other libraries in use today, there are a number of plugins/modules that can easily be dropped into your JS along with the [simple_base.js](https://github.com/chrismauck/simple-selector/tree/master/simple_base.js) file.

**tl;dr** These are the modules that can be added to the Simple Selector JavaScript library to make writing code more efficient, etc.

## Overview

### Fully Loaded
If you would rather use the base library with modules included by default, you can use [simple.js](https://github.com/chrismauck/simple-selector/tree/master/simple.js). This includes all DOM related modules, except things like swipe() and future touch related entries.

## Basic Usage
For simplified/custom setups, you can begin with the [simple_base.js](https://github.com/chrismauck/simple-selector/tree/master/simple_base.js) file. This will allow you to achieve basic add/remove event listener along with a simple each method. Then load any of the modules from this directory, followed by your custom scripts.

### Modules are grouped
The module scripts are grouped by type in this directory. For example, simple_attributes.js is a single file, but it includes 4 modularized methods and one helper method. You can copy one of the methods from this file and simply copy into your code after Simple Selector - or you can just load the whole JS file. The files are all very small.

## Module Descriptions
### simple_attributes.js

---
**.attr()**

Get or set the value of an attribute associated with an selector object.

    /** .attr(n, v)
    * Element attribute getter and setter
    * @param  {string}  n Attribute name, if v ommitted will return value
    * @param  {string=}  v Optional value, if included will apply value to named attribute
    */

Example usage:

    // Get attribute value
    $(selector).attr('title');
    // Set attribute value
    $(selector).attr('title', 'New Title')

---
**.hasAttr()**

Check for the existence of an attribute value on a selector object.

    /** .hasAttr(n)
    * Element attribute validation with boolean return
    * @param  {string}  n Attribute name to search for
    */

Example usage:

    $(selector).hasAttr('title')

---
**.removeAttr()**

Remove an attribute value from a selector object.

    /** .removeAttr(n)
    * Element attribute removal
    * @param  {string}  n Attribute name for value to be removed
    */

Example usage:

    $(selector).removeAttr('id');

---
**.data()**

Similar to standard attribute getter and setter, but simplifies the namespace by using the attribute key without *data-* preceding it.

    /** .data(n, v)
    * Data attribute getter and setter
    * @param  {string}  n Attribute name, if v omitted will return value
    * @param  {string}  v Optional value, if included will apply value to named attribute
    */

Example usage:

    // Get data attribute value
    $(selector).data('category');
    // Set data attribute value
    $(selector).data('category', 'Supplies');

---
---
### simple_class.js

Class management methods.

---
**.addClass()**

    /** .addClass(c)
    * @param {string} c  Class name to add to selector object
    */

Example usage:

    // Add 'active' class to the selector object
    $(selector).addClass('active');

---
**.hasClass()**


    /** .hasClass(c)
    * @param {string} c  Class name to validate exists on selector object
    */

Example usage:

    // Check if 'active' class exists on the selector object
    $(selector).hasClass('active');

---
**.removeClass()**


    /** .removeClass(c)
    * @param {string} c  Class name to remove from selector object
    */

Example usage:

    // Remove 'active' class from the selector object
    $(selector).removeClass('active');

---
**.toggleClass()**


    /** .toggleClass(c)
    * @param {string} c  Class name to add or remove from selector object
    */

Example usage:

    // Add 'active' class to the selector object if it doesn't exist or 
    // remove it if it does exist
    $(selector).toggleClass('active');

---
---
### simple_dimension.js

Get or Set width and/or height on referenced selector object.

---
**.width()**

    /** .width(null||bool||int)
    * @param {*} c (null||bool||int)
    */

Example usage:

    // Get width
    $(selector).width();
    // Get outerWidth
    $(selector).width(true);
    // Set width - to 500px
    $(selector).width(500);

---
**.height()**

    /** .height(null||bool||int) 
    * @param {*} c (null||bool||int)
    */

Example usage:

    // Get height
    $(selector).height();
    // Get outerHeight
    $(selector).height(true);
    // Set height - to 500px
    $(selector).height(500);

---
---
### simple_display.js

Methods for display properties including fadeIn() and fadeOut().

---
**.hide()**

Hides the referenced selector object

    /** .hide() Hides the referenced selector object.
    * Accepts no parameters. For speed and callback options, use .fadeOut()
    */

Example Usage:

    $(selector).hide();

---
**.show()**

Shows the referenced selector object.

    /** .show()
    * Accepts no parameters. For speed and callback options, use .fadeIn()
    */

Example Usage:

    $(selector).show();

---
**.flex()**

Shows the referenced selector object, display using 'flex' instead of 'block'

    /** .flex()
    * Accepts no parameters.
    */

Example Usage:

    $(selector).flex();

---
**.toggle()**

Toggles display of the referenced selector object.

    /** .toggle()
    * Accepts no parameters.
    */

Example Usage:

    $(selector).toggle();

---
**.fadeOut()**

Decreases the opacity over time, then sets display none on referenced selector object.

    /** .fadeOut(d, fn)
    * @param {integer=} d  optional - duration of transition, default is 400
    * @param {method=} fn  optional - callback function
    */

Example Usage:

    // Fade out over the course of 1000ms (1 sec)
    $(selector).fadeOut(1000, ( e ) => {
        alert("I've faded away...");
    });

---
**.fadeIn()**

Unsets display property then increases the opacity over time on referenced selector object.

    /** .fadeIn(d, fn) 
    * @param {integer=} d  optional - duration of transition, default is 400
    * @param {method=} fn  optional - callback function
    */

Example Usage:

    // Fade in over the course of 1000ms (1 sec)
    $(selector).fadeIn(1000, ( e ) => {
        alert("I've appeared for you to see!");
    });

---
---
### simple_dom_mods.js

---
***DOM Modification***

---
**.append()**

Insert content, specified by the parameter, to the end of each element in the set of matched elements.

    /**.append(e)
    * @param {string} e Content to append
    */

Example Usage:

    $(selector).append('<p>Goodbye cruel world!</p>');

---
**.prepend()**

Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

    /** .prepend()
    * @param {string} e Content to prepend
    */

Example Usage:

    $(selector).prepend('<p>Hello World!</p>');

---
**.clone()**

Create a deep copy of the set of matched elements.

    /** .clone()
    * Accepts no parameters
    */

Example Usage:

    $(selector).clone();

---
***DOM traversal***

---
**.first()**

Reduce the set of matched elements to the first in the set.

    /** .first()
    * Accepts no parameters
    */

Example Usage:

    $('ul li').first();

---
**.last()**

Reduce the set of matched elements to the final one in the set.

    /** .last()
    * Accepts no parameters
    */

Example Usage:

    $('ul li').last();

---
**.eq()**

Reduce the set of matched elements to the one at the specified index.

    /** .eq(i)
    * @param {integer} i Value representing the index being requested
    */

Example Usage:

    $('#teams li').eq(10);

---
**.children()**

Get the children of each element in the set of matched elements.

    /** .children(e)
    * @param {string} e CSS selector
    */

Example Usage:

    $(selector).children('div');

---
---
### simple_listeners.js
Additional event listeners on top of the default on() and off()

---
**.one()**

Only allow single use of event listener and immediately remove.

    /** .one(e, b)
    * @param {string} e    Event name
    * @param {string} ev   Method to fire on event
    */

Example Usage:

    $(selector).one('click', ( e ) => {
        alert('Hello and goodbye!');
    });

---
**.{{custom}}()**

Methods defined in evt[], utilized like .click(cb), .keydown(cb), etc. where cb = callback function.

    /** evt(cb)
    * @param {string} cb   Method to fire on event
    */

Possible event pass throughs:
'blur','focus','focusin','focusout','resize','scroll','click','dblclick','mousedown','mouseup','mousemove','mouseover','mouseout','mouseenter','mouseleave','change','select','submit','keydown','keypress','keyup','contextmenu'

Example Usage:

    $(selector).focus(( e ) => {
        alert('Woah, focus!');
    });

---
---
### simple_pinch.js
Additional method for simple pinch in and out events.

---
**.pinch()**

Method to allow for pinch event on selector object allowing for a callback method. Option for duration can be set to prevent action if pinch takes too long. Default is 1000ms (1 sec).

Returns object with 'scale', 'zoom', 'action' and 'duration'.

    /** .pinch()
    * @param  {object=}  opt optional user defined settings to replace defaults
    * @param  {method}  cb callback function on swipe completion
    */

Example Usage:

    $(selector).pinch(( results ) => {
    	var msg = "scale: " + results.scale + ", action: " + results.action + "<br><small>zoom: " + results.zoom + ", duration: " + results.duration + "ms</small>";
        $(selector).html(msg);
    });

---
---
### simple_position.js

Position management methods

---
**.position()**

Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.

    /** .position()
    * Accepts no parameters
    * Returns an object containing 'top' and 'left' parameters
    */

Example Usage:

    var left = $(selector).position().left;


---
**.offset()**

Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.

    /** .offset()
    * Accepts no parameters
    * Returns an object containing 'top' and 'left' parameters
    */

Example Usage:

    var left = $(selector).offset().left;


---
**.pos()**

Simply returns an object containing x and y scroll position.

    /** .pos()
    * Accepts no parameters
    * Returns an object containing 'x' and 'y' parameters
    */

 Example Usage:

     var scroll = $(selector).pos().y

---
---
### simple_scrollto.js

Additional method for the addition of smooth scrollTo functionality.

---
**.scrollTo()**

Method to allow for smooth scrolling when clicking on a link. Allows for a callback method and optional configuration settings.

    /** .scrollTo()
    * @param  {*}  trg optional user defined settings to replace defaults options are
    * - {object} object can define 'offset', 'target' and 'callback
    * - {callback} pass a callback method directly
    * - {string} solely define the target element ID
    */

Example usage:

   Assuming that there is a link in the body of your page with a class of 'scroll'.
    
    <a href="#CTA" class="scroll">Call to Action</a> 
    
    $('.scroll).on('click', function() {
	    $(this).scrollTo();
	    // by default, the href value will be used as the target
	});
	
Assuming that you are clicking on a `div` that wouldn't have an *href* attribute associated with it. Simply use `data-target="YOUR_TARGET_ID"`
	
	<div class="scroll" data-target="#CTA">Call to Action</div>
	
	$('.scroll).on('click', function() {
	    $(this).scrollTo();
	    // by default, if no href value data-target will be used as the target
	});

***parameters***

**.scrollTo( object );**
You can insert a custom object to set specific properties of scrollTo
    
    $('.item').on('click', function() {
	    $(this).scrollTo({
		    'target'  : '#enroll_now',
		    'offset'  : 100,
		    'callback': () => {
			    console.log("scrolled!");
			}
		});
    });

**target** is of type `{string}` and must be preceded by a '#'
**offset** is of type `{number}`, the larger the value, the further from the top the scroll will conclude
**callback** is a `{method}` to run when scrolling is complete

**.scrollTo( method );**
You can insert a callback method to run after the default scrolling completes.

    $('.item').on('click', function() {
        $(this).scrollTo(() => {
		    console.log("scrolled!");
    	});
    });

**.scrollTo( string );**
You can specify a string to use as the target ID of your scrollTo. Simply precede the string with a '#'. This will override any other targets that may be associated with the link; including `href` or `data-target`.

     $('.item').on('click', function() {
        $(this).scrollTo('#enroll_now');
    });

---
---
### simple_swipe.js

Additional method for handling swipe gestures. Option for `duration` can be set to prevent action if swipe takes too long. Default is 1000ms (1 sec). Option for `threshold` can be set to ignore a swipe if it does not meet the minimum distance. Default is 100px.

---
**.swipe()**

Method to allow for swipe event on selector object allowing for a callback method.

Returns object with 'direction', 'distance' and 'duration'

    /** .swipe()
    * @param {object=} opts optional user defined settings to replace defaults
    * @param {method} cb    callback function on swipe completion
    */

Example Usage:

    $(selector).swipe((res) => {
        var msg = "swiped: " + res.direction + ", distance: "+ res.distance +"px, duration: " + res.duration + "ms";
        $(selector).html(msg);
    });
---
---

### simple_values.js

Text, HTML and Val getter and setters along with empty() and remove() methods

---
 **.text()**

Text content getter and setter

    /** .text(t)
    * @param {string} t    Optional text value to set, if ommitted will return value
    */

Example Usage:

    // Get text content from object selector
    $(selector).text();
    // Set text content of object selector
    $(selector).text('Hello World!');

---
**.html()**

HTML content getter and setter

    /** .html(h)
    * @param {string} h    Optional HTML or Text value to set, if ommitted will return value
    */

Example Usage:

    // Get HTML content from object selector
    $(selector).html();
    // Set HTML content of object selector
    $(selector).html('<span>Hello World!</span>');

---
**.empty()**

Empty HTML content from selector object

    /** .empty()
    * Accepts no parameters
    */

Example Usage:

    $(selector).empty();

---
**.remove()**

Remove selector object node from the DOM

    /** .remove()
    * Accepts no parameters
    */

Example Usage:

    $(selector).remove();

----
**.val()**

Input value getter and setter

    /** .val(v)
    * @param {*} v    Optional value to set, if ommitted will return current value
    */

Example Usage:

    // Get value from input selector object
    $(input selector).val();
    // Set the value of the referenced input selector object
    $(input selector).val('Foo');

