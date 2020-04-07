const Course = require('../../models/course');
const Video = require('../../models/video');
const File = require('../../models/file');

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
          { association: 'videos' }, //, through: { attributes: ['ordem'] }
          { association: 'files' },
        ],
      });
      return response.json(course);
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível recuperar dados do curso.'});
    }
  },

  async store(request, response) {
    const { title, description, validity, price, promo_price = null, photo } = request.body;
    console.log(request.body)
    try {
      const course = await Course.create({ title, description, validity, price, promo_price, photo });
      /* const video = await Video.findByPk(1);
      const file = await File.findByPk(1);
      if (video) {
        course.addVideos(video, {ordem: 1});
      }
      if (file) {
        course.addFiles(file, {ordem: 1});
      } */
      return response.json({'course': course});
    } catch (error) {
      console.log(error)
      return response.status(400).json({ auth: true, message: 'Não foi possível inserir o curso.'});
    }
  },

  async update(request, response) {
    const id = request.params.id;
    const { title, description, validity, price, promo_price = null, photo } = request.body;

    try {
      const course = await Course.findByPk(id);
      if (!course) {
        return response.status(400).json({ auth: true, message: 'O curso não foi encontrado.'});
      }
      course.update({ title, description, validity, price, promo_price, photo });
      return response.json({ auth: true, message: 'O curso foi atualizado!'});
    } catch (error) {
      return response.status(400).json({ auth: true, message: 'Não foi possível atualizar o curso.'});
    }
  },

  async delete(request, response) {
    const id = request.params.id;

    try {
      const course = await Course.findByPk(id);
      if (!course) {
        return response.status(400).json({ auth: true, message: 'O curso não foi encontrado.'});
      }
      course.destroy();
      return response.json({ auth: true, message: 'O curso foi deletado!'});
    } catch (error) {
      console.log(error);
      return response.status(400).json({ auth: true, message: 'Não foi possível deletar o curso.'});
    }
    
  }  

}