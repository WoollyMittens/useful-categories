# useful.categories.js: Filter by Categories

Applies additive filters to a generic collection of content items.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-tiers">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="./css/useful-categories.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-categories.js"></script>
```

## How to start the script

```javascript
var categories = new useful.Categories({
	form : document.querySelector('#useful-categories-form'),
	elements : document.querySelectorAll('#useful-categories-list li'),
	active : 'none',
	title : 'Filter by:',
	labels : {
		empty : '---',
		first : 'Category ',
		prefix : 'Pick from '
	},
	filters : {
		'Location' : {
			'Malta' : 'malta.',
			'Australia' : 'australia.'
		},
		'Subject' : {
			'Scenery' : '.scenery.',
			'Fauna' : '.fauna.'
		},
		'Topic' : {
			'Water' : '.water',
			'Land' : '.land',
		}
	}
});
```

**form : {DOM element}** - A form element which will be filled with the selectors.

**elements : {DOM elements}** - The form elements to be filtered.
+ *data-key* - A keyword to search for.

**active : {string}** - The starting keyword to filter on.

**title : {string}** - The title of the selector section.

**labels : {object}** - A collection of text labels.
+ *empty* - The name of the empty top element of the selectors.
+ *first* - The name of the first category.
+ *prefix* - The prefix for the selectors' labels.

**filters : {object}** - The hierarchical list of categories to filter by.

## How to control the script

### Filter

```javascript
tiers.filter('keyword');
```

Applies a predefined keyword filter.

**keyword : {string}** - The keyword from the filters list to filter by.

### Reset

```javascript
tiers.reset();
```

Reset all filters.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
