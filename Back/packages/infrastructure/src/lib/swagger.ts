import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Crédito Asociado - OPA SAS',
      version: '1.0.0',
      description: 'Documentación de la prueba técnica para la gestión de créditos',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],

    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Ingresa el token JWT obtenido en /api/auth/login',
        },
      },
    },

    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: [
    './packages/infrastructure/src/routes/**/*.ts',
    './packages/infrastructure/src/**/*.yaml'
  ], 
};

export const swaggerSpec = swaggerJsdoc(options);