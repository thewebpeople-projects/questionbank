var fs= require('fs');


module.exports=function(bodyParser,model,path){
    return function(req,res){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Method","'GET, POST, OPTIONS, PUT, PATCH, DELETE'");
//        const tmp_path=String(req.body.image);
//        const target_path=path.resolve(__dirname+'/../model/images/users/'+req.body.email);
//        source=fs.createReadStream(tmp_path);
//        const dest=fs.createWriteStream(target_path);
//        source.pipe(dest);
//        source.on('end',function(){
//            fs.unlink(tmp_path, function(err){
//                if(err) throw err;
//            });
//            res.send(target_path);
//        });
//        source.on('error',function(){
//            console.log("Error");
//        });
        const target_path="sss";

        const user={
            "name":req.body.name,
            "email":req.body.email,
            "password":req.body.password,
            "gender":req.body.gender,
            "phone":req.body.phone,
            "college":req.body.college,
            "branch":req.body.branch,
            "image":target_path        
        };
        console.log(user);

        model.users.findOne({"email":req.body.email}).exec()
            .then(doc=>{
            if(doc == null){
                return model.users.create(user);
            }else{
                res.send({success:false,message:"User already found"});
            }
        })
            .then(doc=>{
            res.send({success:true,message:"Successfully registered"});
        })
            .catch(err=>{
            res.send(err);
        })
    }
}