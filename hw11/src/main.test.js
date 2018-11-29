import chai from 'chai';
import sinon from 'sinon';
import { days, defaultProduct, money, users } from './constants';
import { getDay, showMessage, getAdultUsers, getRandomUsers, Product } from './main'

const { expect } = chai;

describe('getDay', () => {
    const date = (new Date().getDay());
    
    it('should return day name', () => {
        expect(getDay()).to.be.equal(days[date]);
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

        expect(getAdultUsers(testUsers))
            .to.be.an('array')
            .that.includes(testUsers[0]).and
            .that.not.includes(testUsers[1]);

    });    
});

describe('getRandomUsers', () => {
    const testUsers = [{age: 20}, {age: 17}, {age: 21}, {age: 18}];
    const mid = 2;
    let fakeRand, fakeRound;

    beforeEach(() => {
        fakeRand = sinon.stub(Math, 'random');
        fakeRound = sinon.stub(Math, 'round');
    })
    
    afterEach(() => {
        fakeRand.restore();
        fakeRound.restore();
    });
    
    
    it('should return false if no users', () => {
        expect(getRandomUsers()).to.be.false;
    });
    
    it('should return from 0 to 1', () => {
        fakeRand.returns(0.8);
        fakeRound.returns(mid);
        expect(getRandomUsers(testUsers))
            .to.be.an('array')
            .that.have.members(testUsers.slice(0, mid))
            .that.not.have.members(testUsers.slice(mid, testUsers.length));
    });

    it('should return from 2 to 3', () => {
        fakeRand.returns(0.1);
        fakeRound.returns(mid);
        expect(getRandomUsers(testUsers))
            .to.be.an('array')
            .that.have.members(testUsers.slice(mid, testUsers.length))
            .that.not.have.members(testUsers.slice(0, mid));
    });
});

describe('Product', () => {
    let product;

    beforeEach(() => {
        product = new Product;
    });

    it('should throw error if no value', () => {
        expect(() => { product.setPrice() }).to.throw(Error);
    });

    it('should throw error if no value', () => {
        const val = 15;

        product.setPrice(val);
        expect(product.value).to.equal(val);
    });

    it('should throw error if no value', () => {
        const val = 9;
        
        product.setPrice(val);
        expect(product.value).to.be.undefined;
    });


});