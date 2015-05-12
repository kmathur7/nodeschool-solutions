var fs = require('fs');
var directoryLocation = process.argv[2];
var fileExtention = process.argv[3];
fs.readdir(directoryLocation,function(err,list){
	for(var i = 0; i<list.length;i++){
		var element = list[i].split("."+fileExtention);
		//console.log(element);
		if(element.length >1){
			console.log(list[i])
		}
	}
});