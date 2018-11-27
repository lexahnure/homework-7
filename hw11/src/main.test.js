import chai from 'chai';
import sinon from 'sinon';
import { days, defaultProduct, money, users } from './constants';
import { getDay, showMessage, getAdultUsers, getRandomUsers } from './main'

const { expect } = chai;

describe('getDay', () => {
    it('should return day name', () => {
        expect(getDay()).to.be.equal(days[2]);
    });
    
});

describe('showMessage', () => {
    
    it('should call alert with defined message', () => {
        const msg = 'text';
        const fakeAlert = sinon.stub(window, 'alert');

        showMessage(msg);
        expect(fakeAlert.calledWithExactly(msg));
    });    
});

describe('getAdultUsers', () => {
    
    it('should return users older than 18', () => {
        const testUsers = [{age: 20}, {age: 17}];

        expect(getAdultUsers(testUsers)).to.be.an('array')
            .that.includes(testUsers[0]).and
            .that.not.includes(testUsers[1]);

    });    
});

describe('getRandomUsers', () => {

    it('should return false if no users', () => {
        expect(getRandomUsers()).to.be.false;

    });
    
    it('should return from 0 to 1', () => {
        const testUsers = [{age: 20}, {age: 17}, {age: 21}, {age: 18}];
        sinon.stub(Math, 'random').returns(0.7);

        expect(getRandomUsers(testUsers)).to.be.an('array').that.includes(testUsers[0], testUsers[1]);        

    });

    it('should return from 2 to 3', () => {
        const testUsers = [{age: 20}, {age: 17}, {age: 21}, {age: 18}];
        sinon.stub(Math, 'random').returns(0.1);

        expect(getRandomUsers(testUsers)).to.be.an('array').that.includes(testUsers[2], testUsers[3]);

    });
});