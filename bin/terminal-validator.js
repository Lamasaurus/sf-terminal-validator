const sfvalidator = new (require('sfvalidator'))();
const chalk = require('chalk');
const cli_table = require('cli-table');

class TerminalValidator{
	constructor(){
	}

	validate_url(url, alias=""){
		sfvalidator.validate_url(url).then(result => { this.construct_output(result) });
	}

	construct_output(report){
		var table = new cli_table({
			head: [chalk.white('Attribute'), chalk.white('Message')]
		});

		for(var key in report){
			this.add_value_to_table(report, key, table);
		}

		console.log(table.toString());
	}

	add_value_to_table(report, key, table){
		switch (report[key].score){
			case 1:
				table.push([chalk.green(key), chalk.green(this.get_message(report[key].message))]);
				break;
			case 0:
				table.push([chalk.yellow(key), chalk.yellow(this.get_message(report[key].message))]);
				break;
			case -1:
				table.push([chalk.bgRed(key), chalk.bgRed(this.get_message(report[key].message))]);
				break;
		}
	}

	get_message(m){
		var string = '';
		if(m instanceof Set){
			for (var val of m)
				if(val instanceof String)
					string += val + "\n";
				else
					string += val.hydra + " : " + val.link + "\n";
		}else{
			string = m;
		}

		return string;
	}
}

module.exports = TerminalValidator;