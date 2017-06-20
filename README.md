# intro-to-p5
The very basic of creative coding using the p5.js library.

##Setup

First make sure that you have a code editor and modern browser installed on your machine. I recommend [Atom](https://atom.io/) for the editor, and [Chrome](https://www.google.com/chrome/browser/desktop/index.html) for the browser.

Once you have that, create a folder wherever you want to store your code and start by creating a file called index.html
For this, open Atom, go to File > New File, and then save it in the folder you created.
Hint: Once you have index.html is saved, you can type `html` in Atom. This is a shortcut to automatically write the basic html layout to your document.
You should now have something like this:
```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title></title>
   </head>
   <body>

   </body>
</html>
```
The next step is to create the JavaScript file where you will write your sketch. Call it sketch.js and place it in the same folder as index.html

Now let's write the basic layout of a p5 sketch:
```JavaScript
function setup(){

}

function draw(){

}
```

Then, download the p5.js library. Go to https://p5js.org/download/ and select p5.js.min
This file is simply a minified version of the library that will take less space and load faster when loading it to a browser.
Place p5.js.min in your project folder.

Finaly, let's link the JavaScript files to the html. Write the following link tags in the `<head>` of index.html:
```html
<script src="p5.min.js" charset="utf-8"></script>
<script src="sketch.js" charset="utf-8"></script>
```
Note: It is important that you have all your files in the same folder, otherwise the html link will not work.
Note2: It is also important that you link to the p5 library before you link to your sketch. Since we are using p5 and its built-in functions, the browser needs to recognize them before we actually use them in our sketch.

That's it! You are now all set to do creative coding. You sketch has nothing in it though, so if you open index.html in your browser you wont see anything. So let's go ahead and draw simple shapes to the canvas!




















df
