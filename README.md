# public-holidays-jp

[![Build Status](https://travis-ci.com/shun1218/public-holidays.svg?branch=master)](https://travis-ci.com/shun1218/public-holidays)

## Installation

```sh
npm install --save public-holidays-jp
```

## Usage

```javascript
const holidaysJp = require('public-holidays-jp');

// Find holidays in 2020.
// Returns Array of Holiday (see below)
let holidays = holidaysJp.getHolidaysInYear(2020);

// Check if 1 Jan. 2020 is a public holiday
// Return true (or false)
let isHoliday = holidaysJp.isHoliday(new Date(2020, 0, 1));
```

## Properties

### Holiday

- `date: Date` - Date object of the holiday
- `name: String` - Name of the holiday
- `hasExtraHoliday: Boolean` - Whether to have a extra holiday

## License

MIT
