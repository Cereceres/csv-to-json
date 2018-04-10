const assert = require('assert');

const csvToJson = require('../index');
describe('test to csv-to-json', () => {
    it('shoudl return a json object', () => {
        assert.deepEqual(csvToJson('a,b,c\n1,2,3\n4,5,6'),
            [
                {
                    a:1,
                    b:2,
                    c:3
                },
                {
                    a:4,
                    b:5,
                    c:6
                }
            ]
        );
    });

    it('shoudl return a csv string', () => {
        const json = csvToJson('a,b,c\n1,2,3\n4,5,6');
        const csv = csvToJson.inverse(json);
        console.log('csv ', csv);
        assert(csv === 'a,b,c\n1,2,3\n4,5,6');
    });
});
