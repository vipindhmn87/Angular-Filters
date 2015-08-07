.filter('titleFormat', function() {
	return function(input) {
		var first = input.charAt(0).toUpperCase();
		input = input.substring(1, input.length);
		input = input.replace( /([a-z])([A-Z])/g, "$1 $2");
		return (first + input);
	};
});