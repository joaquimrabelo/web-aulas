const Course = require('../../models/course');

module.exports = {
  async index(request, response) {

    try {
      const courses = await Course.findAll(); 
      return response.json({'courses': courses});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados dos cursos.'});
    }
  },
  
  async show(request, response) {
    const { id } = request.params;
    
    try {
      const course = await Course.findByPk(id, {
        include: [
          { association: 'videos', through: { attributes: [] } },
          { association: 'files', through: { attributes: [] } },
        ],
      }); 
      return response.json(course);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados do curso.'});
    }
  },

  async store(request, response) {
    const { title, description, validity, price, photo } = request.body;

    try {
      const course = await Course.create({ title, description, validity, price, photo });
      return response.json({'course': course});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível inserir o curso.'});
    }
  },

  

}