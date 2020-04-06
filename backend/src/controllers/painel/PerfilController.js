const Course = require('../../models/course');
const Video = require('../../models/video');
const File = require('../../models/file');
const User = require('../../models/user');
//const File = require('../../models/client');

module.exports = {
  async index(request, response) {
    
    const id = request.userId;
    try {
      const countCursos = await Course.count(); 
      const countVideos = await Video.count();
      const countFiles = await File.count();

      const countClients = 0;

      const user = await User.findByPk(id, { attributes: ['id', 'name', 'email'] } );

      if (!user) {
        return response.status(401).json({ 'auth': false, 'message': 'Usuário não encontrado.'});
      }

      return response.json({
        countCursos,
        countVideos,
        countFiles,
        countClients,
        user
      });
    } catch (error) {
      return response.json({'auth': true, 'message': 'Não foi possível recuperar os dados.'});
    }
  },

}