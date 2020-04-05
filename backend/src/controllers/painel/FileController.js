const File = require('../../models/file');

module.exports = {
  async index(request, response) {

    try {
      const files = await File.findAll(); 
      return response.json(files);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados dos arquivos.'});
    }
  },
  
  async show(request, response) {
    const { id } = request.params;
    
    try {
      const file = await File.findByPk(id); 
      return response.json(file);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados do arquivo.'});
    }
  },

  async store(request, response) {
    const { title, description, file, free = 0 } = request.body;

    try {
      const arquivo = await File.create({ title, description, file, free });
      return response.json(arquivo);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível inserir o arquivo.'});
    }
  },

  async update(request, response) {
    const id = request.params.id;
    const { title, description, file, free = 0 } = request.body;

    try {
      const arquivo = await File.findByPk(id);
      if (!arquivo) {
        return response.status(400).json({ auth: true, message: 'O arquivo não foi encontrado.'});
      }
      arquivo.update({ title, description, file, free });
      return response.json({ auth: true, message: 'O arquivo foi atualizado!'});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível atualizar o arquivo.'});
    }
  },

  async delete(request, response) {
    const id = request.params.id;

    try {
      const file = await File.findByPk(id);
      if (!file) {
        return response.status(400).json({ auth: true, message: 'O arquivo não foi encontrado.'});
      }
      file.destroy();
      return response.json({ auth: true, message: 'O arquivo foi deletado!'});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível deletar o arquivo.'});
    }
  }

}