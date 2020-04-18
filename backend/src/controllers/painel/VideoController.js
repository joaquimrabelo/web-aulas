const Video = require('../../models/video');

module.exports = {
  async index(request, response) {

    try {
      const videos = await Video.findAll(); 
      return response.json(videos);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados dos vídeos.'});
    }
  },
  
  async show(request, response) {
    const { id } = request.params;
    
    try {
      const video = await Video.findByPk(id); 
      return response.json(video);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados do vídeo.'});
    }
  },

  async store(request, response) {
    const { title, description, link, price, duration, photo = null } = request.body;

    try {
      const video = await Video.create({ title, description, link, price, duration, photo });
      return response.json(video);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível inserir o vídeo.'});
    }
  },

  async update(request, response) {
    const id = request.params.id;
    const { title, description, link, price, duration, photo = null } = request.body;

    try {
      const video = await Video.findByPk(id);
      if (!video) {
        return response.status(400).json({ auth: true, message: 'O vídeo não foi encontrado.'});
      }
      video.update({ title, description, link, price, duration, photo });
      return response.json({ auth: true, message: 'O vídeo foi atualizado!'});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível atualizar o vídeo.'});
    }
  },

  async delete(request, response) {
    const id = request.params.id;

    try {
      const video = await Video.findByPk(id);
      if (!video) {
        return response.status(400).json({ auth: true, message: 'O vídeo não foi encontrado.'});
      }
      video.destroy();
      return response.json({ auth: true, message: 'O vídeo foi deletado!'});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível deletar o vídeo.'});
    }
    
  }

}