var mongoose = require('mongoose');
mongoose.Promise=require('bluebird');

var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/qbank");

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});

module.exports.users=mongoose.model('Users', new Schema({
    name:String,
    email:String,
    password:String,
    gender:String,
    phone:String,
    college:String,
    branch:String,
    image:String
})
);

module.exports.colleges = mongoose.model('Colleges',new Schema({
    name:String,
    type:String
}));

module.exports.subjects = mongoose.model('Subjects', new Schema({
    branch:String,
    name:String,
    sem:String
}));