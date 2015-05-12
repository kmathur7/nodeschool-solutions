var fs = require('fs');
module.exports = function (directory,extention,callback){
	var data = [];
	fs.readdir(directory, function(err,list){
		if(err){
			return callback(err);
		}
		for(var i = 0; i<list.length;i++){
			var element = list[i].split("."+extention);
			//console.log(element);
			if(element.length >1){
				data.push(list[i]);
				}
			}
		return callback(err, data);
		});

	
};
