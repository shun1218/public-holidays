'use strict';

const Holiday = require('./holiday');

module.exports = class PublicHoliday {
  constructor(year) {
    this.year = year;
  }

  getPublicHolidays() {
    let holidays = [
      this._getNewYearsDay(),
      this._getNationalFoundationDay(),
      this._getShowaDay(),
      this._getConstitutionMemorialDay(),
      this._getGreenryDay(),
      this._getChildrensDay(),
      this._getMountainDay(),
      this._getCultureDay(),
      this._getLabourThanksgivingDay(),
      this._getComingOfAgeDay(),
      this._getMarineDay(),
      this._getRespectForTheAgedDay(),
      this._getHealthAndSportsDay(),
      this._getTheEmperorsBirthday(),
      this._getVernalEquinoxDay(),
      this._getAutumnalEquinoxDay()
    ];
    return holidays;
  }

  _getNewYearsDay() {
    if (this.year < 1949) {
      return false;
    }
    let date = new Date(this.year, 0, 1);
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '元日', hasExtraHoliday);
  }

  _getNationalFoundationDay() {
    if (this.year < 1967) {
      return false;
    }
    let date = new Date(this.year, 1, 11);
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '建国記念の日', hasExtraHoliday);
  }

  _getShowaDay() {
    if (this.year < 2007) {
      return false;
    }
    let date = new Date(this.year, 3, 29);
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '昭和の日', hasExtraHoliday);
  }

  _getConstitutionMemorialDay() {
    if (this.year < 1949) {
      return false;
    }
    let date = new Date(this.year, 4, 3);
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '憲法記念日', hasExtraHoliday);
  }

  _getGreenryDay() {
    if (this.year < 1989) {
      return false;
    }
    let date = new Date(this.year, 4, 4);
    if (this.year < 2007) {
      date = new Date(this.year, 3, 29);
    }
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, 'みどりの日', hasExtraHoliday);
  }

  _getChildrensDay() {
    if (this.year < 1949) {
      return false;
    }
    let date = new Date(this.year, 4, 5);
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, 'こどもの日', hasExtraHoliday);
  }

  _getMountainDay() {
    if (this.year < 2016) {
      return false;
    }
    let date = new Date(this.year, 7, 11);
    if (this.year === 2020) {
      date = new Date(this.year, 7, 10);
    }
    if (this.year === 2021) {
      date = new Date(this.year, 7, 8);
    }
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '山の日', hasExtraHoliday);
  }

  _getCultureDay() {
    if (this.year < 1948) {
      return false;
    }
    let date = new Date(this.year, 10, 3);
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '文化の日', hasExtraHoliday);
  }

  _getLabourThanksgivingDay() {
    if (this.year < 1948) {
      return false;
    }
    let date = new Date(this.year, 10, 23);
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '勤労感謝の日', hasExtraHoliday);
  }

  _getComingOfAgeDay() {
    if (this.year < 1949) {
      return false;
    }
    let date = this._calculateWeek(new Date(this.year, 0, 1), 1, 2);
    if (this.year < 2000) {
      date = new Date(this.year, 0, 15);
    }
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '成人の日', hasExtraHoliday);
  }

  _getMarineDay() {
    if (this.year < 1996) {
      return false;
    }
    let date = this._calculateWeek(new Date(this.year, 6, 1), 1, 3);
    if (this.year < 2003) {
      date = new Date(this.year, 6, 20);
    }
    if (this.year === 2020) {
      date = new Date(this.year, 6, 23);
    }
    if (this.year === 2021) {
      date = new Date(this.year, 6, 22);
    }
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '海の日', hasExtraHoliday);
  }

  _getRespectForTheAgedDay() {
    if (this.year < 1966) {
      return false;
    }
    let date = this._calculateWeek(new Date(this.year, 8, 1), 1, 3);
    if (this.year < 2003) {
      date = new Date(this.year, 8, 15);
    }
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '敬老の日', hasExtraHoliday);
  }

  _getHealthAndSportsDay() {
    if (this.year < 1966) {
      return false;
    }
    let date = this._calculateWeek(new Date(this.year, 9, 1), 1, 2);
    let name = 'スポーツの日';
    if (this.year < 2020) {
      name = '体育の日';
    }
    if (this.year < 2000) {
      date = new Date(this.year, 9, 10);
    }
    if (this.year === 2020) {
      date = new Date(this.year, 6, 24);
    }
    if (this.year === 2021) {
      date = new Date(this.year, 6, 23);
    }
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, name, hasExtraHoliday);
  }

  _getTheEmperorsBirthday() {
    if (this.year < 1949 || this.year === 2019) {
      return false;
    }
    let date = new Date(this.year, 1, 23);
    if (this.year < 2019) {
      date = new Date(this.year, 11, 23);
    }
    if (this.year < 1989) {
      date = new Date(this.year, 3, 29);
    }
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '天皇誕生日', hasExtraHoliday);
  }

  _getVernalEquinoxDay() {
    if (this.year < 1949) {
      return false;
    }
    let date = new Date(this.year, 2, this._calculateEquinox('vernal'));
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '春分の日', hasExtraHoliday);
  }

  _getAutumnalEquinoxDay() {
    if (this.year < 1948) {
      return false;
    }
    let date = new Date(this.year, 8, this._calculateEquinox('autumnal'));
    let hasExtraHoliday = this._checkExtraHoliday(date);
    return new Holiday(date, '秋分の日', hasExtraHoliday);
  }

  _calculateWeek(date, day, weekNumber) {
    let diff = (7 + day- date.getDay()) % 7;
    date.setDate(date.getDate() + diff + (7 * (weekNumber - 1)));
    return date;
  }

  _calculateEquinox(season) {
    let a = 0;
    let b = 0;
    if (season === 'vernal') {
      a = 0.242385544201545;
      b = 20.9150411785049;
    }
    if (season === 'autumnal') {
      a = 0.242035499172366;
      b = 24.0227494548387;
    }
    return Math.floor(a * this.year - (Math.floor(this.year / 4) - Math.floor(this.year / 100) + Math.floor(this.year / 400)) + b);
  }

  _checkExtraHoliday(date) {
    if (date.getTime() < new Date(1973, 3, 12).getTime()) {
      return false;
    }
    return date.getDay() === 0;
  }
}