const jwt=require('jsonwebtoken');
module.exports= (req, res,next) => {
try {
    const decoded = jwt.verify(req.body.token,"Secretin");  
} catch (error) {
    
}
    const decoded = jwt.verify(req.body.token,"Secretin")
    next();
};