const formatNestedObject = (data, cb) => {
    const obj = {};
    Object.entries(data).forEach(([key, value]) => {
        if (typeof value !== "object") obj[key] = cb(value);
        else obj[key] = formatNestedObject(data[key], cb);
    });
    return obj;
};

const priceData = {
    price: {
        old: 10,
        new: 11,
    },
    change: {
        price: 1,
        percent: 0.1,
    },
};

const formattedNestedObject = formatNestedObject(
    priceData,
    (value) => value + " it works"
);

console.log(formattedNestedObject);
