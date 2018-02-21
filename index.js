const tv = require("./bin/terminal-validator.js");

var validator = new tv();
validator.validate_url("https://linked.open.gent/parking");
validator.validate_url("https://www.pietercolpaert.be");