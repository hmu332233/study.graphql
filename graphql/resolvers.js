// query를 해결해주는 것
const minung = {
  name: 'minung',
  age: 27,
  gender: 'female'
}

const resolvers = {
  Query: {
    person: () => minung
  }
}

module.exports = resolvers;