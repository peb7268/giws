#How to use dynamic functoin names JavaScript:
In this short article we are going to examine how to write less conditional block and make use of the dynamic nature of JavaScript to write cleaner code. The concepts below just demonstrate the technique, I make no claims to best practices or security aspects of such code. So without further ado, take a look at the code snippet below and we'll discuss it.

```JavaScript
/*
* Dynamically Delegates to one of the scroll methods.
*/
self.pan = function($element){
	var direction  = settings.scrollDirection.charAt(0).toUpperCase() + settings.scrollDirection.slice(1);
	var method = 'pan' + direction;
	self[method]($element);
};
self.panUp = function($element){
	.....
}
self.panDown = function($element){
	.....
}
```
Ok so in many situations, developers have to make decisions on which branch of code they must invoke. In most cases this is done with a switch statement of an if block, but wouldn't it be nice if you could just tell your code what to do instead of asking? Let me explain the context of the code above and then you'll get it.

The code above is a snippet from a parallax plugin i've been working on. As you scroll it keeps track of a few values. One thing it watches is the scroll direction. It knows *up* or *down*. When it comes time to parallax an element, I dont have to ask *if this then that*. I just call the *pan* method and it takes care of the rest. I'm able to leverage this technique because I can use dynamic function names. Let's see how that works.

In above snippet, pay specific attention to the *self.pan* method, it's where the magic happens. This method takes an element ( a jquery object ) to be precise, and then dynamically generates the method name to call based on the scroll direction. Using the array notation or subscript syntax, you can pass a string in that is the property name and then invoke it just like you would a normal method.

I like this technique alot because it eliminates unnecessary conditional code and logic. It also happens to scale pretty well. If you have more questions or feedback just leave a comment.