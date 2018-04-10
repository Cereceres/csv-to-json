const { keys: getKeys } = Object;

module.exports = (_csv, splittedBy = '\n', columnSeparatedBy = ',') => {
    const csv = _csv.split(splittedBy);
    const keys = csv.shift().split(columnSeparatedBy);
    return csv
        .map((row) => row.trim().split(columnSeparatedBy))
        .map((row) => keys.reduce((json, key, column) => {
            json[key] = row[column];
            return json;
        }, {}));
};

module.exports.inverse = (arrayOfJson, splittedBy = '\n', columnSeparatedBy = ',') => {
    if (!Array.isArray(arrayOfJson)) return arrayOfJson;

    const keys = new Set();

    const csv = arrayOfJson
        .map((json) => {
            getKeys(json).forEach((key) => keys.add(key));
            return Array.from(keys).map((key) => null || json[key]);
        })
        .map((row) => row.join(columnSeparatedBy));
    csv.unshift(Array.from(keys).join());
    return csv.join(splittedBy);
};
