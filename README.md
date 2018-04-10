# csv-to-json
module to transform csv to json
# Usage

```js
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

const json = csvToJson('a,b,c\n1,2,3\n4,5,6');
const csv = csvToJson.inverse(json);
assert(csv === 'a,b,c\n1,2,3\n4,5,6');

const json = csvToJson('a,b,c\n1,2,3\n4,5,6');
json.push({ a:4, d:10 });
const csv = csvToJson.inverse(json);
assert.equal(csv, 'a,b,c,d\n1,2,3\n4,5,6\n4,,,10');
```

# API

## csvTOJson(csv, splittedBy = '\n', columnSeparatedBy = ',') -> array
## csvTOJson,inverse(array, splittedBy = '\n', columnSeparatedBy = ',') -> string


