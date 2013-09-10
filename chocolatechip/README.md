Chocolate Chip (Beta)
======================

I've removed the jekyll asset pipeline (because it didn't work with Jekyll 1x) and replaced it with a bunch of commands with Grunt.

###What's changed?

- Jekyll and SASS run together with grunt.

- CSS and JS are minified to files called styles.min.css and scripts.min.js respectivly.

- Chocolate chip supports liverealod (but it's really buggy).


##Install

This assumes you have already installed ruby on rails (check out [railsinstaller](http://railsinstaller.org/en) if you haven't) and [node.js](http://nodejs.org/) and node package manager(npm).


1. [Grunt](http://gruntjs.com/getting-started) needs to be installed first. Type this and hit **ENTER**

		npm install -g grunt-cli

2. Now we need to install all the dependencies

		npm install

3. You'll need two terminal tabs/powershell windows for this bit. In one of them type

		grunt

4. In the other type

		grunt watch



##Where to put new CSS and JS files

Any new CSS or Javascript files you want concatenated goes in the **package.json** file in the root.


	{
	  "name": "exampleLayout",
	  "version": "0.1.0",
	  "css": [
	    "css/jquery.fancybox.css",
	    "css/style.css"
	  ],
	  "js": [
	    "js/jquery.backstretch.min.js",
	    "js/jquery.fancybox.min.js",
	    "js/jquery.fancybox-media.js",
	    "js/jquery.fancybox.min.js",
	    "js/custom.js"
	  ],
	  "devDependencies": {
	    "grunt": "~0.4.1",
	    "grunt-contrib-uglify": "~0.2.2",
	    "grunt-contrib-cssmin": "~0.6.1",
	    "grunt-contrib-watch": "~0.5.3",
	    "grunt-bg-shell": "~2.1.0"
	  }
	}

Whilst your in **package.json** you can edit the name of the site and the verion but not the devDependencies.

_NOTE: The Grunt veterens will probably dislike me for using the package.json file but this method ran the scripts the fastest._


##Livereload

Livereload comes with 'grunt-contrib-watch' but is a bit buggy, I don't know if it's me or it's grunt.

To get it working open **Gruntfile.js** in the root and unc-ommment all of this code:

	// reload:{
	// 	options: {	livereload: true },
	// 	files: ['css/styles.min.css', 'index.html']
	// }						
	// 
	// put this above the </body> tag in default.html
	// <script src="http://localhost:35729/livereload.js"></script>

You'll notice the last line loads up some javascript. 

	<script src="http://localhost:35729/livereload.js"></script>

Remove this from **Gruntfile.js** and stick it before the closing body tag in **default.html** which is in the **_layouts** folder.

Sometimes it works, but most of the time it reloads the page but doesn't show your latest changes. Unless you refresh the browser manually, or trigger livereload again by re-saving your document. 

It only watches for changes in **index.html** and **_myStyle.css**, but you can change that here:

		files: ['css/styles.min.css', 'index.html']


####Have fun, break stuff, and let me know if you have any more suggestions.

####Peace Out!

