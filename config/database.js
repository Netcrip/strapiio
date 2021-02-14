module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'freedb.tech'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'freedbtech_strapi_netcrip'),
        username: env('DATABASE_USERNAME', 'freedbtech_netcrip'),
        password: env('DATABASE_PASSWORD', 'Candidato88'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
