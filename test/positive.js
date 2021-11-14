import calc from '../app.js';
import { expect } from 'chai';

describe('Checking positive results of calculator:', function() {
    it('should return 4', function() {
      expect(calc(2,2,'+')).to.equal(4);
    });
    it('should return 2', function() {
      expect(calc(4,2,'-')).to.equal(2);
    });
    it('should return 8', function() {
      expect(calc(4,2,'*')).to.equal(8);
    });
    it('should return 4', function() {
      expect(calc(4,2,'*')).to.equal(8);
    });
    it('should return 4', function() {
      expect(calc(8,2,'/')).to.equal(4);
    });
    it('should return 5.33', function() {
      expect(calc(16,3,'/')).to.equal(5.33);
    });
});