const validator=(req,res,next)=>{
    const {email,first_name,last_name,password}=req.body
    if(!email || !first_name || !last_name || !password){
        res.send("Please fill all required details")
    }else{
        next()
    }
}

module.exports ={validator}