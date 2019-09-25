var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
	service_name: {
		type : String,
		required :true,
		unique:1
	},
	description: {
		type : String,
		required :true,
	},
	developers: {
		type : String,
		required :true,
	},
	urlrepo: {
		type : String,
		required :true,
	},
	
});

module.exports = mongoose.model('Service', ServiceSchema);