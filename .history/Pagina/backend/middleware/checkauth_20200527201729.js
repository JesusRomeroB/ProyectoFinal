const jwt=require('jsonwebtoken');
module.exports= (req, res,next) => {
try {
    const decoded = jwt.verify(req.body.token,"Secretin");  
} catch (error) {
    return res.status(401).json({
        message:'Authentication Failed'
    });
}
   
    next();
};