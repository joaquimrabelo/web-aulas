const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  async doPainelLogin(request, response) {

    const { email, password } = request.body;

    const user = await User.findOne({
      where: {'email': email}
    });

    if (!user) {
      return response.status(401).json({ auth: false, message: 'Usuário não encontrado!' });
    }

    if (bcrypt.compareSync(password, user.password)) {

      const token = jwt.sign({ id: user.id }, process.env.SECRET_PAINEL);

      return response.json({ auth: true, token: token });
    }

    return response.status(401).json({ auth: false, message: 'Senha incorreta!' });
  }
}