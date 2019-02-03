const people = [
  {
    name: 'minung',
    age: 27,
    gender: 'female'
  },
  {
    name: 'minung2',
    age: 2,
    gender: 'female'
  },
  {
    name: 'minung3',
    age: 3,
    gender: 'female'
  },
  {
    name: 'minung4',
    age: 4,
    gender: 'female'
  }
]


// query를 해결해주는 것
const resolvers = {
  Query: {
    name: () => 'minung',
    people: () => people
  }
}

module.exports = resolvers;