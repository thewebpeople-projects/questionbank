module.exports=function(bodyParser,model,jwt){
    return function(req,res){
        model.users.findOne({email:req.body.email}).exec()
            .then(doc=>{
            if(!doc){
                res.json({success:false,message:'Authentication failed. User not found'+req.body.email});
            }
            else{
                if(doc.password !=req.body.password){
                    console.log(req.body.password,req.body.email,doc.password);
                    res.json({success:false,message:'Authentication failed. Wrong Password'});
                }
                else{
                    var token = jwt.sign(doc, "questionbank");
                    res.status(200).json({
                        success:true,
                        message:'Authentication Successful',
                        token
                    })
                }
            }
        })
            .catch(err=>{
            res.json({message:'Error in Authenticating user'+req.body.email});
        })
    }
}