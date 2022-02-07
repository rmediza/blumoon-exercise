// Demo data
let topAuthor = [
  {
    id: 1,
    author: 'Stephen King'
  },
  {
    id: 2,
    author: 'J.K Rowling'
  },
  {
    id: 3,
    author: 'John Grisham'
  },
  {
    id: 4,
    author: 'Dan Brown'
  }
];

// Handlers
const getAuthors = async (req, reply) => {
  // const id = Number(req.params.id); // author ID
  // const author = topAuthor.find(author => author.id === id);
  // return author;
  reply.send(topAuthor);
};

const addAuthors = async (req, reply) => {
  const id = topAuthor.length + 1; // generate new ID
  const newAuthor = {
    id,
    author: req.body.author
  };

  topAuthor.push(newAuthor);
  return newAuthor;
};

const putAuthors = async (req, reply) => {
  const id = Number(req.params.id);
  topAuthor = topAuthor.map(author => {
    if (author.id === id) {
      return {
        id,
        author: req.body.author
      };
    }
  });

  return {
    id,
    author: req.body.author
  };
};

const deleteAuthors = async (req, reply) => {
  const id = Number(req.params.id);
  topAuthor = topAuthor.filter(author => author.id !== id);
  return { msg: `Author with ID ${id} is deleted` };
};

module.exports = {
  getAuthors,
  addAuthors,
  putAuthors,
  deleteAuthors
};
