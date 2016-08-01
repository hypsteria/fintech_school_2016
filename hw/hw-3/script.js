console.log(isStrict(this)); //false

function sum(a) {
	'use strict';
	console.log(isStrict(this)); // true

	var s = a;
	function inner(b) {
		if (b !== undefined) {
			s += b
			return inner;
		}
		return s;
	}

	inner.toString = function() {
		return s;
	}

	inner.valueOf = function() {
		return s;
	}

	return inner;
}



console.log(sum(1)(2)(3)(4));
console.log(sum(1)(2)(3)(4) + 10); // 20

function isStrict(obj) {
	return (obj === undefined);
}

(function(){
	'use strict';
	console.log(isStrict(this)); // true
}());

//---

Function.prototype.method = function(name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
		return this;
	}
}

Function.method('superBind', function(context) {
	var slice = Array.prototype.slice,
		args = slice.apply(arguments).slice(1), 
		that = this;

	return function() {
		return that.apply(context, args.concat(slice.apply(arguments)));
	};
});

var user = {
	name: "Alex",
	sayMyName: function() {console.log(this.name);}
};

setTimeout(user.sayMyName.superBind(user), 100); // Alex

function add(a, b) {
	return a + b;
}

var add2 = add.superBind(null, 2);

console.log('function add2:');
console.log(add2(1)); // 3
console.log(add2(2)); // 4

var add10 = add.superBind(null, 10);

console.log('function add10:');
console.log(add10(1)); // 11
console.log(add10(2)); // 12

var arr = ['one','two','three'];

arr.forEach(function(val, i) {
	console.log(this[i]); // one, two, three
}.superBind(arr));

