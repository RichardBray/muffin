# ![HTML5 Muffin](http://richbray.me/muffin/img/logo-github.png)

Muffin
============

A design focused front-end web development template using SASS and Jekyll.

Muffin takes advantage of common practices from [Bootstrap](http://twitter.github.com/bootstrap/), [Boilerplate](http://html5boilerplate.com/), [inuit.css](http://inuitcss.com/) and other libaries to let you get straight into coding straight away. 

Fill site [here](http://richbray.me/muffin/)


Different Flavours
------------------

###Apple

Good for single page websites. 

Contains:

* Twitter Botstrap
* Font Awesome
* Color Me SASS



###Blueberry

Simple Jekyll setup for multipage site.

Contains:

* Everything in Apple
* Jekyll file layout



###Chocolate Chip

For the developer interested in a fast multipage site.

Contains:

* Everything in Blueberry
* Jekyll asset pipeline layout
* YUI compression for CSS and Javascript files
* .htaccess file for caching and gzipping
* SVG plugin for Jekyll
* SVGeezy.js for svg fallback




Getting Started
------------------

If you're a designer who avoids the terminal/command line at all costs and has no interest in openning it up, then this isn't really for you. Joke. Don't worry it's like two commands, you'll be fine.

1. Install Ruby on Rails. If you're on mac or windows just download [RailsInstaller](http://railsinstaller.org/). That does all the hard work.

2. If you're using Apple do step 4, if not, then jump straight to step 5.

3. [cd](http://ss64.com/osx/cd.html) to your directory.

4. Install the SASS gem.
	
Annnnnnd, you're done. Dont forget to watch your SASS if you want to make changes.

5. Run 'bundle' and hit Enter.

6. Run 'jekyll' to make changes to the html.

And I tink that's it. Enjoy.


Side notes
----------

* Whatever flavour you're using make sure you losslessly compress all you images (unless you're using .svg). Check out [kraken](http://kraken.io/), probably the best online image compressin site it've used.

* Be sure to use [Font Awesome](http://fortawesome.github.com/Font-Awesome/) at all costs. It's svg and much better than the free glyphicoins you get with Bootstrap.


Running SASS
------------

To watch your sass just run

	$ sh watch.sh

If you files are in a different directory you'll have to edit watch.sh accordingly.

	sass --watch [where your scss file is].scss:[where you want your css to go].css --style compressed


Liscense
----------

Color Me SASS is licensed under the [☺ license.](http://licence.visualidiot.com/)

You, the licensee, are hereby granted free usage in both personal and commerical environments, without any obligation of attribution or payment (monetary or otherwise). The licensee is free to use, copy, modify, publish, distribute, sublicence, and/or merchandise the work, subject to the licensee inflecting a positive message unto someone. This includes (but is not limited to): smiling, being nice, saying “thank you”, assisting other persons, or any similar actions percolating the given concept.


The above copyright notice serves as a permissions notice also, and may optionally be included in copies or portions of the work.


The work is provided “as is”, without warranty or support, express or implied. The author(s) are not liable for any damages, misuse, or other claim, whether from or as a consequence of usage of the given work.



Todos
-------

* Get it working with guard reload
* Muffin with node.js
