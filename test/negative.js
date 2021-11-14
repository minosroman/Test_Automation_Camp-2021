import calc from '../app.js';
import { expect } from 'chai';

describe('Checking negative results of calculator:', function() {
    it('should return "Error check input data!"', function() {
      expect(calc(8,2,'0')).to.equal('Error check input data!');
    });
    it('should return string data', function() {
      expect(calc('8',2,'+')).to.be.a('string');
    });
    it('should return string data"', function() {
      expect(calc('f',2,'+')).to.be.a('string');
    });
    it('should return "Error check input data!"', function() {
      expect(calc()).to.equal('Error check input data!');
    });
    it('should return "Division by zero is not allowed"', function() {
      expect(calc(0,2,'/')).to.equal('Division by zero is not allowed');
    });
});