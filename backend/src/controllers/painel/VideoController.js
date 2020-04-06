const Video = require('../../models/video');

module.exports = {
  async index(request, response) {

    try {
      const videos = await Video.findAll(); 
      return response.json({'videos': videos});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados dos videos.'});
    }
  },
  
  async show(request, response) {
    const { id } = request.params;
    
    try {
      const video = await Video.findByPk(id); 
      return response.json(video);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados do video.'});
    }
  },

  async store(request, response) {
    const { title, description, link, price, duration, photo = null } = request.body;

    try {
      const video = await Video.create({ title, description, link, price, duration, photo });
      return response.json({'video': video});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível inserir o video.'});
    }
  },

  async update(request, response) {
    const id = request.params.id;
    const { title, description, link, price, duration, photo = null } = request.body;

    try {
      const video = await Video.findByPk(id);
      if (!video) {
        return response.status(400).json({ auth: true, message: 'O video não foi encontrado.'});
      }
      video.update({ title, description, link, price, duration, photo });
      return response.json({ auth: true, message: 'O video foi atualizado!'});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível atualizar o video.'});
    }
  },

  async delete(request, response) {
    const id = request.params.id;

    try {
      const video = await Video.findByPk(id);
      if (!video) {
        return response.status(400).json({ auth: true, message: 'O video não foi encontrado.'});
      }
      video.destroy();
      return response.json({ auth: true, message: 'O video foi deletado!'});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível deletar o video.'});
    }
    
  }

}