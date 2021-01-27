var  createError=require('http-errors');
var   express=require('express');
var app=express();
var cors=require('cors');
var path=require('path');
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors);
//app.use(express.static(path.join(__dirname,'public')));

let createuserRoute=require('./routes/create');
let finduserRoute=require('./routes/find');
let updateuserRoute=require('./routes/update');
let deleteuserRoute=require('./routes/delete');

app.use('/createuser',createuserRoute);
app.use('/getuser',finduserRoute);
app.use('/updateuser',updateuserRoute);
app.use('/deleteuser',deleteuserRoute);



app.use(function(res,req,next){
     console.log("going to start server ?");
     next(createError(404));

} );

app.listen(3000,function(res,req){
     console.log('Server Started !!! ');
});