const { people, getById } = require('./db');

// query를 해결해주는 것
const resolvers = {
  Query: {
    name: () => 'minung',
    people: () => people,
    person: (_, { id }) => getById(id)
  }
}

module.exports = resolvers;