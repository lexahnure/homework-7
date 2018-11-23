import chai from 'chai';
import sinon from 'sinon';
import {getUsers} from './users';
const { expect } = chai;

describe('users', () => {
  it('should call fetch() method', (done) => {
    const fakeFetch = sinon.stub(window, 'fetch');
    const fakeLog = sinon.stub(console, 'log');

    fakeFetch.returns(Promise.resolve({
      json: () => { return 'testData'; }
    }));

    getUsers()
      .then(() => {
        expect(fakeLog.called).to.be.true;
        done();
      }) 
    expect(fakeFetch.called).to.be.true;
  });
  
});