'use strict';

const HolidayCollector = require('./model/holidayCollector');

module.exports = {
  getHolidaysInYear: function (year) {
    let holidays = new HolidayCollector().getHolidays(year);
    return holidays;
  }
}