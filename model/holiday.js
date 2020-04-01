'use strict';

module.exports = class Holiday {
  constructor(date, name, hasExtraHoliday) {
    this.date = date;
    this.name = name;
    this.hasExtraHoliday = hasExtraHoliday;
  }
}