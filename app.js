var express=require('express');
var app=express();
	port=process.env.PORT || 1000;
app.get ('/',function(req,res){
	res.send("RESTful with Expressss");
});
app.listen(port,function(){
	console.log('app is running on port:' +port)
});
