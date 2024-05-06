# categories.js: Filter by Categories

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Applies additive filters to a generic collection of content items.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/categories.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/categories.js"></script>
```

```js
requirejs([
	'js/categories.js'
], function(Categories) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {Categories} from "js/categories.js";
```

## How to start the script

```javascript
var categories = new Categories({
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

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
