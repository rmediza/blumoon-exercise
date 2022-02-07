const app = require('fastify')({ logger: true });
const routes = require('./authorRoute');

app.get('/', function (req, reply) {
  reply.send('welcome to author server');
});

routes.forEach((route, index) => {
  app.route(route);
});

app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
