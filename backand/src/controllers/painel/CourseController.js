const Course = require('../models/course');

module.exports = {
  async index(request, response) {

    try {
      const curso = await Course.findAll(); 
      return response.send({'couse': curso});
    } catch (error) {
      console.error(error);
    }

    return response.send({'couse': curso});
  },

  async store(request, response) {
    const { title, description, validity, price, photo } = request.body;

    const curso = await Course.create({ title, description, validity, price, photo });

    return response.send(curso);
  },

  async show(request, response) {
    const { id } = request.params;

    const curso = await Course.findByPk(id); 

    return response.send(curso);
  }

}