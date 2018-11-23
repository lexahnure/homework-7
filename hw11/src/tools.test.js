import chai from 'chai';
import { sum } from './tools';

const { assert, expect, should } = chai;
should();

const test = _ => _ || null;


describe('sum', () => {
 it('should equal 5 for sum(2, 3)', () => {
   const input = sum(2, 3);
   expect(input).to.equal(5);
 });

 it('should return 2 for sum(2, 0)', () => {
   sum(2, 0).should.equal(2);
 });

});
