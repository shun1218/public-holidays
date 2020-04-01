'use strict';

const HolidayCollector = require('./model/holidayCollector');

module.exports = {
  getHolidaysInYear: function (year) {
    let holidays = new HolidayCollector().getHolidays(year);
    return holidays;
  },

  isHoliday: function (date) {
    let targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let holidays = new HolidayCollector().getHolidays(targetDate.getFullYear());
    let target = holidays.find((holiday) => {
      return (holiday.date.getTime() === targetDate.getTime());
    })
    if (target) {
      return true;
    }
    return false;
  }
}