// Create es6 modules with function getName, getSurname, and default export getFullName

export const getName = (name)=>name;
export const getSurname = (surname)=>surname;
const getFullName = (name, surname) => `${getName(name)} ${getSurname(surname)}`;
export default getFullName;