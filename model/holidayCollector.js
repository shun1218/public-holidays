'use strict';

const Holiday = require('./holiday');
const PublicHoliday = require('./publicHoliday');

module.exports = class HolidayCollector {
  constructor() {
    this.holidays = [];
  }

  getHolidays(year) {
    this._getPublicHolidays(year);
    this._getSpecificHolidays(year);
    if (year > 1972) {
      this._getSubstituteHolidays();
    }
    this._sortHolidays();
    if (year > 1985) {
      this._getNationalHolidays()
      this._sortHolidays();
    }
    return this.holidays;
  }

  _getPublicHolidays(year) {
    let publicHoliday = new PublicHoliday(year);
    let publicHolidays = publicHoliday.getPublicHolidays();
    publicHolidays.forEach(holiday => {
      if (holiday) {
        this.holidays.push(holiday);
      }
    });
  }

  _getSubstituteHolidays() {
    let substituteHolidays = []
    this.holidays.forEach(holiday => {
      if (holiday.hasExtraHoliday) {
        let date = new Date(holiday.date.getTime());
        let isHoliday = true;
        while (isHoliday) {
          date.setDate(date.getDate() + 1);
          if (!this._findDate(date) && date.getDay()) {
            isHoliday = false;
          }
        }
        substituteHolidays.push(new Holiday(date, '振替休日', false));
      }
    });
    Array.prototype.push.apply(this.holidays, substituteHolidays);
  }

  _getNationalHolidays() {
    let nationalHolidays = [];
    for (let i = 0; i < this.holidays.length - 1; i++) {
      if (this.holidays[i].date.getDay() === 6) {
        continue;
      }
      if ((this.holidays[i + 1].date.getTime() - this.holidays[i].date.getTime()) / 86400000 === 2) {
        let date = new Date(this.holidays[i].date.getTime());
        date.setDate(date.getDate() + 1);
        nationalHolidays.push(new Holiday(date, '国民の休日', false));
      }
    }
    Array.prototype.push.apply(this.holidays, nationalHolidays);
  }

  _getSpecificHolidays(year) {
    if (year === 1959) {
      this.holidays.push(new Holiday(new Date(1959, 3, 10), '皇太子明仁親王の結婚の儀の行われる日', false));
    }
    if (year === 1989) {
      this.holidays.push(new Holiday(new Date(1989, 1, 24), '昭和天皇の大喪の礼の行われる日', false));
    }
    if (year === 1990) {
      this.holidays.push(new Holiday(new Date(1990, 10, 12), '即位礼正殿の儀の行われる日', false));
    }
    if (year === 1993) {
      this.holidays.push(new Holiday(new Date(1993, 5, 9), '皇太子徳仁親王の結婚の儀の行われる日', false));
    }
    if (year === 2019) {
      let days = [
        new Holiday(new Date(2019, 4, 1), '天皇の即位の日', false),
        new Holiday(new Date(2019, 9, 22), '即位礼正殿の儀の行われる日', false)
      ]
      days.forEach(day => {
        this.holidays.push(day);
      });
    }
  }

  _sortHolidays() {
    this.holidays.sort(function(a, b) {
      if (a.date.getTime() < b.date.getTime()) return -1;
      if (a.date.getTime() > b.date.getTime()) return 1;
      return 0;
    });
  }

  _findDate(date) {
    let findedDate = this.holidays.find((holiday) => {
      return (holiday.date.getTime() === date.getTime());
    });
    return findedDate;
  }
}