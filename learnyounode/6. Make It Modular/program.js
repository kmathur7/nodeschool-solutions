var fs = require('fs');
var mymodule = require('./mymodule.js');
var directoryLocation = process.argv[2];
var fileExtention = process.argv[3];
mymodule(directoryLocation,fileExtention,function(err,data){
	if(err){
		console.log(err);
	}
	else{
		for(var i= 0;i<data.length;i++){
			console.log(data[i]);
		}
	}
})