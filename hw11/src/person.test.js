import chai from 'chai';
import Person from './Person';
const { expect } = chai;

describe('Person', () => {
  let person; 

  beforeEach(() => {
    person = new Person();
  });

  it('should set name on creation', () => {
    const name = 'Frank'
    const person = new Person(name);

    expect(person.name).to.equal(name);
  });

  it('should set name by default', () => {
    expect(person.name).to.equal('Jhon');
  });

  it('should set creation as Date', () => {
    expect(person.creation).to.be.instanceof(Date);
  });

  it('getCreation should return "night-child" if hour = 23', () => {
    const expRes = 'night child';
    person.creation.setHours(23);

    expect(person.getCreation()).to.equal(expRes);
  });

});
