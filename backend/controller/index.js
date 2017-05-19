var path = require('path');
var bodyParser = require('body-parser');
var multer  = require('multer');
var jwt = require('jsonwebtoken');



var model = require('../model');
var register = require('./routes/register');
var login=require('./routes/login');
var routeauth=require("../helper/routeauth");


module.exports=function(app){
    
    app.use( bodyParser.json() );
    app.use(multer({ dest: path.resolve(__dirname+'/../model/images/users/'),inMemory: true, includeEmptyFields: true}).any());
    app.use(bodyParser.urlencoded({     
        extended: true
    }));

    app.use(function (req, res, next) {
        if (req.headers['x-forwarded-proto'] === 'https') {
            res.redirect('http://' + req.hostname + req.url);

        } else {
            next();
        }
    });

    app.get('/',function(req,res){
        res.sendFile(path.resolve(__dirname+"/index.html"));
    });

    app.post('/register',register(bodyParser,model,path));

    app.post('/login',login(bodyParser,model,jwt));

    app.use(routeauth(jwt));

    app.get('/subject', (req, res) => {
        if(req.query.subject == '')
            return res.send([])
            model.subjects.find({name: {$regex: new RegExp('^'+req.query.search), $options : "-i"}}, (err, subjects) => {
                res.send(subjects);
            });
    });

    app.get('/college', (req, res) => {
        if(req.query.college == '')
            return res.send([])
            model.colleges.find({name: {$regex: new RegExp('^'+req.query.search), $options : "-i"}}, (err, colleges) => {
                res.send(colleges);
            });
    });    
}
