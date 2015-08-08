angular.module('wordFilters', [])

.filter('capitalizeFirstLetter', function () {
	return function (word) {
		var firstLetter = word.charAt(0),
			restOfWord = word.slice(1);

		return firstLetter.toUpperCase() + restOfWord;
	};
});

