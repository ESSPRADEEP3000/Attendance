import jwt from 'jsonwebtoken';
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');
  
    jwt.verify(token, 'Bravestone7481', (err, user) => {
      if (err) return res.status(403).send({msg:'Invalid Token',recieved:token});
      req.user = user;
      next();
    });
  };
  export default authenticateToken;