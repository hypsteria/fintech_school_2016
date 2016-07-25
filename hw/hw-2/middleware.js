function logger(title, data) {
		if (arguments.length > 1) console.log(title + ': ', data);
		else console.log("\n%c" + title, "color:green;font-weight:bold;");
}