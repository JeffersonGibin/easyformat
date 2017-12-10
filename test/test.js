var assert = require('assert');
var easyformat = require('../easyformat');


describe('Manipulation of date', () => {

	describe('#isDate()', () => {
    	it('Date invalid must return false', (done) => {
    		assert.equal(easyformat.isDate(), false);
    		assert.equal(easyformat.isDate(true), false);
    		assert.equal(easyformat.isDate('2017-50-07'), false);
    		assert.equal(easyformat.isDate('2017-11-31'), false);
    		assert.equal(easyformat.isDate('2017-02-29'), false);
    		assert.equal(easyformat.isDate('-2017-02-29'), false);
    		done();
    	});

		it('Date invalid must return true', (done) => {
			var date = new Date('2017-12-07 00:00:00');
			var date2 = new Date('2017-02-31 00:00:00');

    		assert.equal(easyformat.isDate('2017-12-07'), true);
    		assert.equal(easyformat.isDate(date), true);
    		assert.equal(easyformat.isDate(date2), true);
    		done();
    	});
    });

	describe('#extractDatePart', () => {
		it('Must return a day, month or year', (done) =>{
			assert.equal(easyformat.extractDatePart('2017-11-22', 'd'), '22');
			assert.equal(easyformat.extractDatePart('2017-11-22', 'm'), '11');
			assert.equal(easyformat.extractDatePart('2017-11-22', 'y'), '2017');

			var date = new Date('2017-12-07 00:00:00');
			assert.equal(easyformat.extractDatePart(date, 'd'), '07');
			assert.equal(easyformat.extractDatePart(date, 'm'), '12');
			assert.equal(easyformat.extractDatePart(date, 'y'), '2017');

			done();		
		})
	});    

    describe('#formatDate', () => {
    	it('Format a date to format specific', (done) => {
    		assert.equal(easyformat.formatDate('2017-12-09', 'd/m/y'), '09/12/2017');
    		assert.equal(easyformat.formatDate('2017-12-09', 'd-m-y'), '09-12-2017');

    		done();
    	});
    });
});