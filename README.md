# Adventure Generator

This is a work in progress, but it's an attempt at a JavaScript implementation
of the ["Choose Your Own Adventure"](http://samizdat.cc/cyoa/) or "gamebook"
story form.

## How to use

In an HTML page, set aside an empty element (likely a `<div>`) for the
adventure to populate. Include `adventure.min.js` (from the `dist` directory)
in the `<head>` and then call `Adv.load` with the following two arguments:

* A string containing the ID of the aforementioned empty element.

* An object containing the adventure content. The object should contain the
  following items:
  
  * `decisions`, which is an object with each question the user might have to
    answer.
    
    The key for each is an arbitrary string and must be unique; by convention,
    this is the letter `d` followed by an integer.
    
    The value for each is an array with two elements:
    
    * The first element is a string with the wording of the question. HTML is
      acceptable.
    
    * The second element is an array of arbitrary length; each element of this
      array is a string equal to a key in the `choices` object described below.
  
  * `choices`, which is an object with each choice the user might select when
    presented with a decision.
    
    The key for each is an arbitrary string and must be unique; by convention,
    this is the letter `c` followed by an integer.
    
    The value for each is an array with two elements:
    
    * The first element is a string with the wording of the choice. HTML is
      acceptable.
    
    * The second element is a string equal to a key in either the `decisions`
      object described above (i.e., selecting this choice leads to another
      question the user must answer) or the `endGames` object described below
      (i.e., selecting this choice leads the user directly to one of the game's
      possible endings).
  
  * `endGames`, which is an object with each possible ending in the game.
    
    The key for each is an arbitrary string and must be unique; by convention,
    this is the letter `e` followed by an integer.
    
    The value for each is a string with the final text to display. HTML is
    acceptable.
  
  * `start`, which is a string equal to a key in the `decisions` object
    described above in order to specify which question the user must answer
    first.

For examples, look in the `examples` directory; you'll probably want to start
with `examples/food.html`.

Individual decision, endgame and choice wordings may be styled as desired. For
an example of this, check out `examples/typeface.html`.

## To do

This is a good start, but it's obviously still a bit rough around the edges.

* An alternative way to lay out an adventure such as this one might be to
  scroll to different parts of a very long page rather than to empty and
  rerender the contents of the adventure's parent element. That ought to be
  implemented.

* There ought to be an easier way to generate those configuration objects than
  to write them all out by hand. Some basic scaffolding exists in
  `src/generator` and `dist/generator.*`, but there's not much of anything yet.

## Contributing

This uses the [grunt](http://gruntjs.com/) build system for JavaScript and
requires the [grunt-contrib-jst](https://npmjs.org/package/grunt-contrib-jst)
package in order to compile HTML templates. Installing both of these requires
[Node.js](http://nodejs.org/); after installing Node, install `grunt` with `npm
install -G grunt` and install `grunt-contrib-jst` with `npm install
grunt-contrib-jst`.

## Browser support

This is intended to support IE 8 and above as well as the latest Firefox and
Chrome versions. That said, it's only been tested on Chrome 23.0.1271.95 on Mac
OS X 10.8.2. You've been warned.
