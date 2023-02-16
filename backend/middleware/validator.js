const validator=(req,res,next)=>{
    const {email,first_name,last_name,password}=req.body
    if(!email || !first_name || !last_name || !password){
        res.send("Please fill all required details")
    }else if(password.length<8){
        res.send("Password must be at least 8 characters")
    }
        else{
        next()
    }
}

module.exports ={validator}