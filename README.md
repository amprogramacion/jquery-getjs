# jquery-getjs

jquery-getjs is a jquery-based library that allows you to capture the GET parameters through the browser's URL. 

## Packet downloading

You can install the jquery-getjs library through the npm package manager:

	npm install jquery-getjs
	
Alternatively, you can download the latest version from the GitHub repository:

[https://github.com/amprogramacion/jquery-getjs.git](https://github.com/amprogramacion/jquery-getjs.git) 

## Dependencies

jquery-getjs works with jquery (tested with version 1.12.4) but it is strongly recommended to use the latest version available.

To install the necessary dependencies, just type:

	npm install
	
Inside the jquery-getjs directory.

## Installation

Include the JavaScript file in your HTML markup:

```html
<script src="dist/jquery-getjs.js"></script>
```

## How it works and examples

You can open the test.html file inside the tests folder to see how the examples are programmed.

First of all, the function has three parameters, two of them are optional:

```html
<script>
$(document).ready(function() {
	var name = $.getjs("name");
});
</script>
```

In the example, I pass by get the name parameter:

	test.html? name=drew
	
The parameters are:

- `param`: is the get parameter that you want to capture
- `callbackDone(param)`:  Optional function that returns the captured parameter (if it exists)
- `callbackFail`: Optional function when parameter does not exist

### Example 1, basic call

```javascript
/* First, call a function without callback */

var test1 = $.getjs("name"); //if get param is empty, it returns ""
alert("Test 1: Without callback. ?name=" + test1);
```

The function will return an empty if the parameter does not exist or is empty

### Example 2,  call with success callback

```javascript
/* Second call, with a success callback */

$.getjs("name", function (value) {  //Your own callback function
      alert("Test 2: Wow it works, " + value + "!");
 });
```
returns the *value* if it exists.

### Example 3, call with success and fail callback

```javascript
/* Third call, with fail callback */
                
$.getjs("surname", function(value) {
	alert("Test 3 (callbackDone): Your surname is "+value);
 }, function() {
	alert("Test 3 (callbackFail): You need to provide a surname");
 });
```
You can find these examples inside tests/test.html


## License

The JavaScript Templates script is released under the [MIT license](https://opensource.org/licenses/MIT).









