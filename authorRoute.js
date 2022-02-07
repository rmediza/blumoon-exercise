const authorController = require('./author_controller');

const routes = [
  {
    method: 'GET',
    url: '/authors',
    handler: authorController.getAuthors
  },
  {
    method: 'POST',
    url: '/author',
    handler: authorController.addAuthors
  },
  {
    method: 'PUT',
    url: '/put/:id',
    handler: authorController.putAuthors
  },
  {
    method: 'DELETE',
    url: '/del/:id',
    handler: authorController.deleteAuthors
  }
];

module.exports = routes;
