const { keys: getKeys } = Object;

module.exports = (_csv, splitedBy = '\n', rowSeparatedBy = ',') => {
    const csv = _csv.split(splitedBy);
    const keys = csv.shift().split(rowSeparatedBy);
    return csv
        .map((row) => row.trim().split(rowSeparatedBy))
        .map((row) => keys.reduce((json, key, column) => {
            json[key] = row[column];
            return json;
        }, {}));
};

module.exports.inverse = (arrayOfJson) => {
    if (!Array.isArray(arrayOfJson)) return arrayOfJson;

    const keys = new Set();

    const csv = arrayOfJson
        .map((json) => {
            getKeys(json).forEach((key) => keys.add(key));
            return Array.from(keys).map((key) => null || json[key]);
        })
        .map((row) => row.join(','));
    csv.unshift(Array.from(keys));
    return csv.join('\n');
};
