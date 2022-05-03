var ct = require('./../codingtest');
describe('testing',()=> {
    afterEach(()=>{
        ct.list = [];
    });

    it('get three months total', () => {
        ct.addTransaction(154);
        ct.addTransaction(200);
        expect(ct.list.length).toEqual(2);
        expect(ct.getRewardsforThreeMonths().length).toEqual(2);
        expect(ct.getRewardsforThreeMonthsTotal()).toEqual(408);
    });
})