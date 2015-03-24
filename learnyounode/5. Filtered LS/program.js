var fs = require('fs');
fs.readdir(process.argv[2],function(err,list){
	for (i=0;i<list.length;i++){
		var fileparts = list[i].split('.');
		var extention = fileparts[1];
		if(extention == process.argv[3]){
			console.log(list[i]);
		}
	}
})