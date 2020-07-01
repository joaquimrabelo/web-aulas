const { verify } = require('jsonwebtoken');

require('dotenv').config();

module.exports = (request, response, next) => {

    const token = request.headers['x-access-token']; 

    if (!token) 
        return response.status(401).send({ auth: false, message: 'Token não informado.' }); 
    
    verify(token, process.env.SECRET_PAINEL, function(err, decoded) { 
        if (err) 
            return response.status(500).send({ auth: false, message: 'Token inválido.' }); 
        
        request.userId = decoded.id; 
        next(); 
    }); 
}