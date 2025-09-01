const people = [
  { firstName: 'John', gender: 'male' },
  { firstName: 'Alice', gender: 'female' },
  { firstName: 'Mike', gender: 'male' },
  { firstName: 'Sophia', gender: 'female' }
];

const maleNames = people
  .filter(person => person.gender === 'male')
  .map(person => person.firstName);

console.log(maleNames);
