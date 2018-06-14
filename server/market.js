const moment = require('moment');

const marketPositions = [
  {"date": "10-05-2012", "close": 68.55, "open": 74.55},
  {"date": "09-05-2012", "close": 74.55, "open": 69.55},
  {"date": "08-05-2012", "close": 69.55, "open": 62.55},
  {"date": "07-05-2012", "close": 62.55, "open": 56.55},
  {"date": "06-05-2012", "close": 56.55, "open": 59.55},
  {"date": "05-05-2012", "close": 59.86, "open": 65.86},
  {"date": "04-05-2012", "close": 62.62, "open": 65.62},
  {"date": "03-05-2012", "close": 64.48, "open": 60.48},
  {"date": "02-05-2012", "close": 60.98, "open": 55.98},
  {"date": "01-05-2012", "close": 58.13, "open": 53.13},
  {"date": "30-04-2012", "close": 68.55, "open": 74.55},
  {"date": "29-04-2012", "close": 74.55, "open": 69.55},
  {"date": "28-04-2012", "close": 69.55, "open": 62.55},
  {"date": "27-04-2012", "close": 62.55, "open": 56.55},
  {"date": "26-04-2012", "close": 56.55, "open": 59.55},
  {"date": "25-04-2012", "close": 59.86, "open": 65.86},
  {"date": "24-04-2012", "close": 62.62, "open": 65.62},
  {"date": "23-04-2012", "close": 64.48, "open": 60.48},
  {"date": "22-04-2012", "close": 60.98, "open": 55.98},
  {"date": "21-04-2012", "close": 58.13, "open": 53.13}
];

let counter = 0;

function updateMarket() {
  const diff = Math.floor(Math.random() * 1000) / 100;
  const lastDay = moment(marketPositions[0].date, 'DD-MM-YYYY').add(1, 'days');
  let open;
  let close;

  if (counter % 2 === 0) {
    open = marketPositions[0].open + diff;
    close = marketPositions[0].close + diff;
  } else {
    open = Math.abs(marketPositions[0].open - diff);
    close = Math.abs(marketPositions[0].close - diff);
  }

  marketPositions.unshift({
    date: lastDay.format('DD-MM-YYYY'),
    open,
    close
  });
  counter++;
}

module.exports = {
  marketPositions,
  updateMarket,
};
