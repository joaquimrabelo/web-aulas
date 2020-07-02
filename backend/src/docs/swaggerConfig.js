const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

//var routes = require('./src/routes');

const routePaths = require('./swagger.json');

const swaggerDefinition = {
  swagger: "2.0",
  info: {
    title: "API Web Aulas",
    version: "1.0.0",
    description: "Documentação para o back-end do Web Aulas",
  },
  host: 'localhost:3333',
  basePath: '/',
  schemes: [
    "http",
    "https"
  ],
  securityDefinitions: {
    tokenauth: {
      type: "apiKey",
      name: "x-access-token",
      in: "header"
    },
    basecauth: {
      type: "basic"
    }
  },
  paths: routePaths
};
const options = {
  swaggerDefinition,
  apis: ['./src/routes.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: false, 
    customCss: '.swagger-ui .topbar { display: none}',
  }));
  //app.use('/api/v1', routes);
  /* app.use(function(err, req, res, next) {
    if (err.isBoom) {
      return res.status(err.output.statusCode).json(err.output.payload);
    }
  }); */
}


