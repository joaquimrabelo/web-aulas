const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = (request, response, next) => {
  console.log('check auth painel');

  const token = request.headers['x-access-token']; 
  if (!token) 
      return response.status(401).send({ auth: false, message: 'Token não informado.' }); 
  
  jwt.verify(token, process.env.SECRET_PAINEL, function(err, decoded) { 
      if (err) 
          return response.status(500).send({ auth: false, message: 'Token inválido.' }); 
      
      request.userId = decoded.id; 
      console.log("User Id: " + decoded.id)
      next(); 
  }); 
}