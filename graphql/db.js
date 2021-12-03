export const people = [
  {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "1",
    name: "Nicolas111",
    age: 19,
    gender: "female",
  },
  {
    id: "2",
    name: "Nicolas222",
    age: 20,
    gender: "female",
  },
  {
    id: "3",
    name: "Nicolas333",
    age: 21,
    gender: "female",
  },
  {
    id: "4",
    name: "Nicolas444",
    age: 22,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
