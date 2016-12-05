function sum() {
		var i, s=0;
		for (i = 0; i < arguments.length; i += 1) { // access the arguments array

s += arguments[i]; 
}
 console.log(s);
}

sum(7,5,4,3);