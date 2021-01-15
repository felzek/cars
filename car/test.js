const carids = '213;323;3232;412321';

cardParams = carids.split(';').join(',');
console.log(cardParams);
const queryText = `SELECT * FROM cars WHERE id IN ('${cardParams}');`;
console.log(queryText);