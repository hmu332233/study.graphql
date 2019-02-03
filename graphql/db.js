const people = [
  {
    id: 1,
    name: 'minung',
    age: 27,
    gender: 'female'
  },
  {
    id: 2,
    name: 'minung2',
    age: 2,
    gender: 'female'
  },
  {
    id: 3,
    name: 'minung3',
    age: 3,
    gender: 'female'
  },
  {
    id: 4,
    name: 'minung4',
    age: 4,
    gender: 'female'
  }
];

const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
}

module.exports = {
  people,
  getById
}