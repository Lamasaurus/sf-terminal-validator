const args = require('minimist')(process.argv.slice(2));
const validator = new (require("./bin/terminal-validator.js"))();

//Normal input
if(args._.length > 0)
	if(args._.length > 1)
		validator.validate_url(args._[0], args._[1]);
	else
		validator.validate_url(args._[0]);

//File input
if(args.file){
	var lineReader = require('readline').createInterface({
		input: require('fs').createReadStream(args.file)
	});

	lineReader.on('line', line => {
		var site_args = line.split(" ");
		if(site_args.length > 1)
			validator.validate_url(site_args[0], site_args[1]);
		else
			validator.validate_url(site_args[0]);
	});
}