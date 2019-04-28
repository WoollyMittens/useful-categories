/*
	Source:
	van Creij, Maurice (2018). "tiers.js: Tiered Filtering", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Categories = function (config) {

	// PROPERTIES

	// METHODS

	this.init = function (config) {
		// store the config
		this.config = config;
		// create the interface
		var form = this.config.form;
		form.addEventListener('submit', this.onFormSubmitted.bind(this));
		// add the fieldset
		this.fieldset = document.createElement('fieldset');
		form.appendChild(this.fieldset);
		// add the fields to the fieldset
		this.updateFieldset();
		// return the object
		return this;
	};

	this.applyFilter = function (fallback) {
		// get the keyword to go with the active filter
		var element, result,
			active = this.config.active;
		// construct a keyword test for all selectors
		var keyword = new RegExp(this.getKeywords(fallback));
		// filter all elements based on the keyword
		for (var a = 0, b = this.config.elements.length; a < b; a += 1) {
			element = this.config.elements[a];
			result = keyword.test(element.getAttribute('data-key'));
			element.className = (result) ?
				element.className.replace(/-hide/, '-show'):
				element.className.replace(/-show/, '-hide');
		}
	};

	this.resetFilter = function () {
		// for all selectors
		var options, selectors = this.fieldset.getElementsByTagName('select');
		for (var a = 0, b = selectors.length; a < b; a += 1) {
			// reset the selector
			selectors[a].selectedIndex = 0;
			// for all options in the selectors
			options = selectors[a].getElementsByTagName('option');
			for (var c = 0, d = options.length; c < d; c += 1) {
				options[c].selected = false;
			}
		}
		// re-apply the filters
		this.applyFilter();
	};

	this.getKeywords = function (fallback) {
		var regex = '', selectors = this.fieldset.getElementsByTagName('select'), options, values = [];
		// for all selectors
		for (var a = 0, b = selectors.length; a < b; a += 1) {
			// for all options in the selectors
			values = [];
			options = selectors[a].getElementsByTagName('option');
			for (var c = 0, d = options.length; c < d; c += 1) {
				// add its keyword to the regular expression
				if (options[c].selected) { values.push(options[c].value); }
			}
			// add the term to the regexp
			regex += '(?=.*' + values.join('|.*') + ')';
		}
		// construct the regexp
		console.log('regex: ', regex);
		// return the regular expression
		return fallback || regex;
	};

	this.updateFieldset = function () {
		// empty the fieldser
		this.fieldset.innerHTML = '';
		// add the legend
		var legend = document.createElement('legend');
		legend.innerHTML = this.config.title;
		this.fieldset.appendChild(legend);
		// for all filters
		var title, label, selector, count = 0;
		for (title in this.config.filters) {
			// create the label
			label = document.createElement('label');
			label.innerHTML = title;
			// add the selector
			selector = this.addSelector(this.config.filters[title], count);
			label.appendChild(selector);
			// insert the label into the fieldset
			count += 1;
			this.fieldset.appendChild(label);
		}
	};

	this.addSelector = function (options, count) {
		var name, value, option;
		// construct the selector of the filter tier
		var select = document.createElement('select');
		select.setAttribute('name', 'multi_' + count);
		select.setAttribute('multiple', this.config.multiple);
		select.addEventListener('change', this.onSelectChanged.bind(this));
		// add the empty option in single item selectors
		if (!this.config.multiple) {
			option = this.addOption(this.config.labels.empty, '');
			select.appendChild(option);
		}
		// add the matching options to the selector
		for (name in options) {
			// the option to the selector
			value = options[name];
			option = this.addOption(name, value);
			select.appendChild(option);
		}
		// return the selector
		return select;
	};

	this.addOption = function (name, value) {
		// create an option with the given name and value
		var option = document.createElement('option');
		option.setAttribute('value', value);
		option.innerHTML = name;
		return option;
	};

	// PUBLIC

	this.filter = function (keywords) {
		// apply the keyword to the collection
		this.applyFilter(keywords);
	};

	this.reset = function () {
		// reset the filter
		this.resetFilter();
	};

	// EVENTS

	this.onFormSubmitted = function (evt) {
		// cancel the click
		evt.preventDefault();
		// apply the filter
		this.applyFilter();
	};

	this.onSelectChanged = function (evt) {
	// apply the filter
		this.applyFilter();
	};

	this.init(config);

};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return Categories });
if (typeof module != 'undefined') module.exports = Categories;
