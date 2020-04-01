const test = require('ava');
const PublicHolidays = require('../index');
const Holiday = require('../model/holiday');

// 通常年
test('1947', t => {
  let holiday = [];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1947), holiday);
});

// 昭和23年法律第178号 国民の祝日に関する法律による祝日の追加
test('1948', t => {
  let holiday = [
    new Holiday(new Date(1948, 8, 23), '秋分の日', false),
    new Holiday(new Date(1948, 10, 3), '文化の日', false),
    new Holiday(new Date(1948, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1948), holiday);
});

// 昭和23年法律第178号 国民の祝日に関する法律による祝日の追加
test('1949', t => {
  let holiday = [
    new Holiday(new Date(1949, 0, 1), '元日', false),
    new Holiday(new Date(1949, 0, 15), '成人の日', false),
    new Holiday(new Date(1949, 2, 21), '春分の日', false),
    new Holiday(new Date(1949, 3, 29), '天皇誕生日', false),
    new Holiday(new Date(1949, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1949, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1949, 8, 23), '秋分の日', false),
    new Holiday(new Date(1949, 10, 3), '文化の日', false),
    new Holiday(new Date(1949, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1949), holiday);
});

// 昭和34年法律第16号 皇太子明仁親王の結婚の儀の行われる日を休日とする法律による休日の追加
test('1959', t => {
  let holiday = [
    new Holiday(new Date(1959, 0, 1), '元日', false),
    new Holiday(new Date(1959, 0, 15), '成人の日', false),
    new Holiday(new Date(1959, 2, 21), '春分の日', false),
    new Holiday(new Date(1959, 3, 10), '皇太子明仁親王の結婚の儀の行われる日', false),
    new Holiday(new Date(1959, 3, 29), '天皇誕生日', false),
    new Holiday(new Date(1959, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1959, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1959, 8, 24), '秋分の日', false),
    new Holiday(new Date(1959, 10, 3), '文化の日', false),
    new Holiday(new Date(1959, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1959), holiday);
});

// 通常年
test('1965', t => {
  let holiday = [
    new Holiday(new Date(1965, 0, 1), '元日', false),
    new Holiday(new Date(1965, 0, 15), '成人の日', false),
    new Holiday(new Date(1965, 2, 21), '春分の日', false),
    new Holiday(new Date(1965, 3, 29), '天皇誕生日', false),
    new Holiday(new Date(1965, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1965, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1965, 8, 23), '秋分の日', false),
    new Holiday(new Date(1965, 10, 3), '文化の日', false),
    new Holiday(new Date(1965, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1965), holiday);
});

// 昭和41年法律第86号 国民の祝日に関する法律の一部を改正する法律による祝日の追加
test('1966', t => {
  let holiday = [
    new Holiday(new Date(1966, 0, 1), '元日', false),
    new Holiday(new Date(1966, 0, 15), '成人の日', false),
    new Holiday(new Date(1966, 2, 21), '春分の日', false),
    new Holiday(new Date(1966, 3, 29), '天皇誕生日', false),
    new Holiday(new Date(1966, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1966, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1966, 8, 15), '敬老の日', false),
    new Holiday(new Date(1966, 8, 23), '秋分の日', false),
    new Holiday(new Date(1966, 9, 10), '体育の日', false),
    new Holiday(new Date(1966, 10, 3), '文化の日', false),
    new Holiday(new Date(1966, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1966), holiday);
});

// 昭和41年法律第86号 国民の祝日に関する法律の一部を改正する法律による祝日の追加
test('1967', t => {
  let holiday = [
    new Holiday(new Date(1967, 0, 1), '元日', false),
    new Holiday(new Date(1967, 0, 15), '成人の日', false),
    new Holiday(new Date(1967, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1967, 2, 21), '春分の日', false),
    new Holiday(new Date(1967, 3, 29), '天皇誕生日', false),
    new Holiday(new Date(1967, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1967, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1967, 8, 15), '敬老の日', false),
    new Holiday(new Date(1967, 8, 24), '秋分の日', false),
    new Holiday(new Date(1967, 9, 10), '体育の日', false),
    new Holiday(new Date(1967, 10, 3), '文化の日', false),
    new Holiday(new Date(1967, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1967), holiday);
});

// 通常年
test('1972', t => {
  let holiday = [
    new Holiday(new Date(1972, 0, 1), '元日', false),
    new Holiday(new Date(1972, 0, 15), '成人の日', false),
    new Holiday(new Date(1972, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1972, 2, 20), '春分の日', false),
    new Holiday(new Date(1972, 3, 29), '天皇誕生日', false),
    new Holiday(new Date(1972, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1972, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1972, 8, 15), '敬老の日', false),
    new Holiday(new Date(1972, 8, 23), '秋分の日', false),
    new Holiday(new Date(1972, 9, 10), '体育の日', false),
    new Holiday(new Date(1972, 10, 3), '文化の日', false),
    new Holiday(new Date(1972, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1972), holiday);
});

// 昭和48年法律第10号 国民の祝日に関する法律の一部を改正する法律による祝日の追加
test('1973', t => {
  let holiday = [
    new Holiday(new Date(1973, 0, 1), '元日', false),
    new Holiday(new Date(1973, 0, 15), '成人の日', false),
    new Holiday(new Date(1973, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1973, 2, 21), '春分の日', false),
    new Holiday(new Date(1973, 3, 29), '天皇誕生日', true),
    new Holiday(new Date(1973, 3, 30), '振替休日', false),
    new Holiday(new Date(1973, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1973, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1973, 8, 15), '敬老の日', false),
    new Holiday(new Date(1973, 8, 23), '秋分の日', true),
    new Holiday(new Date(1973, 8, 24), '振替休日', false),
    new Holiday(new Date(1973, 9, 10), '体育の日', false),
    new Holiday(new Date(1973, 10, 3), '文化の日', false),
    new Holiday(new Date(1973, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1973), holiday);
});

// 通常年
test('1985', t => {
  let holiday = [
    new Holiday(new Date(1985, 0, 1), '元日', false),
    new Holiday(new Date(1985, 0, 15), '成人の日', false),
    new Holiday(new Date(1985, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1985, 2, 21), '春分の日', false),
    new Holiday(new Date(1985, 3, 29), '天皇誕生日', false),
    new Holiday(new Date(1985, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1985, 4, 5), 'こどもの日', true),
    new Holiday(new Date(1985, 4, 6), '振替休日', false),
    new Holiday(new Date(1985, 8, 15), '敬老の日', true),
    new Holiday(new Date(1985, 8, 16), '振替休日', false),
    new Holiday(new Date(1985, 8, 23), '秋分の日', false),
    new Holiday(new Date(1985, 9, 10), '体育の日', false),
    new Holiday(new Date(1985, 10, 3), '文化の日', true),
    new Holiday(new Date(1985, 10, 4), '振替休日', false),
    new Holiday(new Date(1985, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1985), holiday);
});

// 昭和60年法律第103号 国民の祝日に関する法律の一部を改正する法律による祝日の追加
test('1988', t => {
  let holiday = [
    new Holiday(new Date(1988, 0, 1), '元日', false),
    new Holiday(new Date(1988, 0, 15), '成人の日', false),
    new Holiday(new Date(1988, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1988, 2, 20), '春分の日', true),
    new Holiday(new Date(1988, 2, 21), '振替休日', false),
    new Holiday(new Date(1988, 3, 29), '天皇誕生日', false),
    new Holiday(new Date(1988, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1988, 4, 4), '国民の休日', false),
    new Holiday(new Date(1988, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1988, 8, 15), '敬老の日', false),
    new Holiday(new Date(1988, 8, 23), '秋分の日', false),
    new Holiday(new Date(1988, 9, 10), '体育の日', false),
    new Holiday(new Date(1988, 10, 3), '文化の日', false),
    new Holiday(new Date(1988, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1988), holiday);
});

// 平成元年法律第4号 昭和天皇の大喪の礼の行われる日を休日とする法律による休日の追加
// 平成元年法律第5号 国民の祝日に関する法律の一部を改正する法律による祝日の移動及び追加
test('1989', t => {
  let holiday = [
    new Holiday(new Date(1989, 0, 1), '元日', true),
    new Holiday(new Date(1989, 0, 2), '振替休日', false),
    new Holiday(new Date(1989, 0, 15), '成人の日', true),
    new Holiday(new Date(1989, 0, 16), '振替休日', false),
    new Holiday(new Date(1989, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1989, 1, 24), '昭和天皇の大喪の礼の行われる日', false),
    new Holiday(new Date(1989, 2, 21), '春分の日', false),
    new Holiday(new Date(1989, 3, 29), 'みどりの日', false),
    new Holiday(new Date(1989, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1989, 4, 4), '国民の休日', false),
    new Holiday(new Date(1989, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1989, 8, 15), '敬老の日', false),
    new Holiday(new Date(1989, 8, 23), '秋分の日', false),
    new Holiday(new Date(1989, 9, 10), '体育の日', false),
    new Holiday(new Date(1989, 10, 3), '文化の日', false),
    new Holiday(new Date(1989, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(1989, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1989), holiday);
});

// 平成2年法律第24号 即位礼正殿の儀の行われる日を休日とする法律による休日の追加
test('1990', t => {
  let holiday = [
    new Holiday(new Date(1990, 0, 1), '元日', false),
    new Holiday(new Date(1990, 0, 15), '成人の日', false),
    new Holiday(new Date(1990, 1, 11), '建国記念の日', true),
    new Holiday(new Date(1990, 1, 12), '振替休日', false),
    new Holiday(new Date(1990, 2, 21), '春分の日', false),
    new Holiday(new Date(1990, 3, 29), 'みどりの日', true),
    new Holiday(new Date(1990, 3, 30), '振替休日', false),
    new Holiday(new Date(1990, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1990, 4, 4), '国民の休日', false),
    new Holiday(new Date(1990, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1990, 8, 15), '敬老の日', false),
    new Holiday(new Date(1990, 8, 23), '秋分の日', true),
    new Holiday(new Date(1990, 8, 24), '振替休日', false),
    new Holiday(new Date(1990, 9, 10), '体育の日', false),
    new Holiday(new Date(1990, 10, 3), '文化の日', false),
    new Holiday(new Date(1990, 10, 12), '即位礼正殿の儀の行われる日', false),
    new Holiday(new Date(1990, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(1990, 11, 23), '天皇誕生日', true),
    new Holiday(new Date(1990, 11, 24), '振替休日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1990), holiday);
});

// 平成5年法律第32号 皇太子徳仁親王の結婚の儀の行われる日を休日とする法律による休日の追加
test('1993', t => {
  let holiday = [
    new Holiday(new Date(1993, 0, 1), '元日', false),
    new Holiday(new Date(1993, 0, 15), '成人の日', false),
    new Holiday(new Date(1993, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1993, 2, 20), '春分の日', false),
    new Holiday(new Date(1993, 3, 29), 'みどりの日', false),
    new Holiday(new Date(1993, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1993, 4, 4), '国民の休日', false),
    new Holiday(new Date(1993, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1993, 5, 9), '皇太子徳仁親王の結婚の儀の行われる日', false),
    new Holiday(new Date(1993, 8, 15), '敬老の日', false),
    new Holiday(new Date(1993, 8, 23), '秋分の日', false),
    new Holiday(new Date(1993, 9, 10), '体育の日', true),
    new Holiday(new Date(1993, 9, 11), '振替休日', false),
    new Holiday(new Date(1993, 10, 3), '文化の日', false),
    new Holiday(new Date(1993, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(1993, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1993), holiday);
});

// 通常年
test('1995', t => {
  let holiday = [
    new Holiday(new Date(1995, 0, 1), '元日', true),
    new Holiday(new Date(1995, 0, 2), '振替休日', false),
    new Holiday(new Date(1995, 0, 15), '成人の日', true),
    new Holiday(new Date(1995, 0, 16), '振替休日', false),
    new Holiday(new Date(1995, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1995, 2, 21), '春分の日', false),
    new Holiday(new Date(1995, 3, 29), 'みどりの日', false),
    new Holiday(new Date(1995, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1995, 4, 4), '国民の休日', false),
    new Holiday(new Date(1995, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1995, 8, 15), '敬老の日', false),
    new Holiday(new Date(1995, 8, 23), '秋分の日', false),
    new Holiday(new Date(1995, 9, 10), '体育の日', false),
    new Holiday(new Date(1995, 10, 3), '文化の日', false),
    new Holiday(new Date(1995, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(1995, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1995), holiday);
});

// 平成7年法律第22号 国民の祝日に関する法律の一部を改正する法律による祝日の追加
test('1996', t => {
  let holiday = [
    new Holiday(new Date(1996, 0, 1), '元日', false),
    new Holiday(new Date(1996, 0, 15), '成人の日', false),
    new Holiday(new Date(1996, 1, 11), '建国記念の日', true),
    new Holiday(new Date(1996, 1, 12), '振替休日', false),
    new Holiday(new Date(1996, 2, 20), '春分の日', false),
    new Holiday(new Date(1996, 3, 29), 'みどりの日', false),
    new Holiday(new Date(1996, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1996, 4, 4), '国民の休日', false),
    new Holiday(new Date(1996, 4, 5), 'こどもの日', true),
    new Holiday(new Date(1996, 4, 6), '振替休日', false),
    new Holiday(new Date(1996, 6, 20), '海の日', false),
    new Holiday(new Date(1996, 8, 15), '敬老の日', true),
    new Holiday(new Date(1996, 8, 16), '振替休日', false),
    new Holiday(new Date(1996, 8, 23), '秋分の日', false),
    new Holiday(new Date(1996, 9, 10), '体育の日', false),
    new Holiday(new Date(1996, 10, 3), '文化の日', true),
    new Holiday(new Date(1996, 10, 4), '振替休日', false),
    new Holiday(new Date(1996, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(1996, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1996), holiday);
});

// 通常年
test('1999', t => {
  let holiday = [
    new Holiday(new Date(1999, 0, 1), '元日', false),
    new Holiday(new Date(1999, 0, 15), '成人の日', false),
    new Holiday(new Date(1999, 1, 11), '建国記念の日', false),
    new Holiday(new Date(1999, 2, 21), '春分の日', true),
    new Holiday(new Date(1999, 2, 22), '振替休日', false),
    new Holiday(new Date(1999, 3, 29), 'みどりの日', false),
    new Holiday(new Date(1999, 4, 3), '憲法記念日', false),
    new Holiday(new Date(1999, 4, 4), '国民の休日', false),
    new Holiday(new Date(1999, 4, 5), 'こどもの日', false),
    new Holiday(new Date(1999, 6, 20), '海の日', false),
    new Holiday(new Date(1999, 8, 15), '敬老の日', false),
    new Holiday(new Date(1999, 8, 23), '秋分の日', false),
    new Holiday(new Date(1999, 9, 10), '体育の日', true),
    new Holiday(new Date(1999, 9, 11), '振替休日', false),
    new Holiday(new Date(1999, 10, 3), '文化の日', false),
    new Holiday(new Date(1999, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(1999, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(1999), holiday);
});

// 平成10年法律第141号 国民の祝日に関する法律の一部を改正する法律による祝日の移動
test('2000', t => {
  let holiday = [
    new Holiday(new Date(2000, 0, 1), '元日', false),
    new Holiday(new Date(2000, 0, 10), '成人の日', false),
    new Holiday(new Date(2000, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2000, 2, 20), '春分の日', false),
    new Holiday(new Date(2000, 3, 29), 'みどりの日', false),
    new Holiday(new Date(2000, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2000, 4, 4), '国民の休日', false),
    new Holiday(new Date(2000, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2000, 6, 20), '海の日', false),
    new Holiday(new Date(2000, 8, 15), '敬老の日', false),
    new Holiday(new Date(2000, 8, 23), '秋分の日', false),
    new Holiday(new Date(2000, 9, 9), '体育の日', false),
    new Holiday(new Date(2000, 10, 3), '文化の日', false),
    new Holiday(new Date(2000, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(2000, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2000), holiday);
});

// 通常年
test('2002', t => {
  let holiday = [
    new Holiday(new Date(2002, 0, 1), '元日', false),
    new Holiday(new Date(2002, 0, 14), '成人の日', false),
    new Holiday(new Date(2002, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2002, 2, 21), '春分の日', false),
    new Holiday(new Date(2002, 3, 29), 'みどりの日', false),
    new Holiday(new Date(2002, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2002, 4, 4), '国民の休日', false),
    new Holiday(new Date(2002, 4, 5), 'こどもの日', true),
    new Holiday(new Date(2002, 4, 6), '振替休日', false),
    new Holiday(new Date(2002, 6, 20), '海の日', false),
    new Holiday(new Date(2002, 8, 15), '敬老の日', true),
    new Holiday(new Date(2002, 8, 16), '振替休日', false),
    new Holiday(new Date(2002, 8, 23), '秋分の日', false),
    new Holiday(new Date(2002, 9, 14), '体育の日', false),
    new Holiday(new Date(2002, 10, 3), '文化の日', true),
    new Holiday(new Date(2002, 10, 4), '振替休日', false),
    new Holiday(new Date(2002, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(2002, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2002), holiday);
});

// 平成13年法律第59号 国民の祝日に関する法律及び老人福祉法の一部を改正する法律による祝日の移動
test('2003', t => {
  let holiday = [
    new Holiday(new Date(2003, 0, 1), '元日', false),
    new Holiday(new Date(2003, 0, 13), '成人の日', false),
    new Holiday(new Date(2003, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2003, 2, 21), '春分の日', false),
    new Holiday(new Date(2003, 3, 29), 'みどりの日', false),
    new Holiday(new Date(2003, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2003, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2003, 6, 21), '海の日', false),
    new Holiday(new Date(2003, 8, 15), '敬老の日', false),
    new Holiday(new Date(2003, 8, 23), '秋分の日', false),
    new Holiday(new Date(2003, 9, 13), '体育の日', false),
    new Holiday(new Date(2003, 10, 3), '文化の日', false),
    new Holiday(new Date(2003, 10, 23), '勤労感謝の日', true),
    new Holiday(new Date(2003, 10, 24), '振替休日', false),
    new Holiday(new Date(2003, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2003), holiday);
});

// 通常年
test('2006', t => {
  let holiday = [
    new Holiday(new Date(2006, 0, 1), '元日', true),
    new Holiday(new Date(2006, 0, 2), '振替休日', false),
    new Holiday(new Date(2006, 0, 9), '成人の日', false),
    new Holiday(new Date(2006, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2006, 2, 21), '春分の日', false),
    new Holiday(new Date(2006, 3, 29), 'みどりの日', false),
    new Holiday(new Date(2006, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2006, 4, 4), '国民の休日', false),
    new Holiday(new Date(2006, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2006, 6, 17), '海の日', false),
    new Holiday(new Date(2006, 8, 18), '敬老の日', false),
    new Holiday(new Date(2006, 8, 23), '秋分の日', false),
    new Holiday(new Date(2006, 9, 9), '体育の日', false),
    new Holiday(new Date(2006, 10, 3), '文化の日', false),
    new Holiday(new Date(2006, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(2006, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2006), holiday);
});

// 平成17年法律第43号 国民の祝日に関する法律の一部を改正する法律による祝日の移動及び追加
test('2007', t => {
  let holiday = [
    new Holiday(new Date(2007, 0, 1), '元日', false),
    new Holiday(new Date(2007, 0, 8), '成人の日', false),
    new Holiday(new Date(2007, 1, 11), '建国記念の日', true),
    new Holiday(new Date(2007, 1, 12), '振替休日', false),
    new Holiday(new Date(2007, 2, 21), '春分の日', false),
    new Holiday(new Date(2007, 3, 29), '昭和の日', true),
    new Holiday(new Date(2007, 3, 30), '振替休日', false),
    new Holiday(new Date(2007, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2007, 4, 4), 'みどりの日', false),
    new Holiday(new Date(2007, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2007, 6, 16), '海の日', false),
    new Holiday(new Date(2007, 8, 17), '敬老の日', false),
    new Holiday(new Date(2007, 8, 23), '秋分の日', true),
    new Holiday(new Date(2007, 8, 24), '振替休日', false),
    new Holiday(new Date(2007, 9, 8), '体育の日', false),
    new Holiday(new Date(2007, 10, 3), '文化の日', false),
    new Holiday(new Date(2007, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(2007, 11, 23), '天皇誕生日', true),
    new Holiday(new Date(2007, 11, 24), '振替休日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2007), holiday);
});

// 通常年
test('2015', t => {
  let holiday = [
    new Holiday(new Date(2015, 0, 1), '元日', false),
    new Holiday(new Date(2015, 0, 12), '成人の日', false),
    new Holiday(new Date(2015, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2015, 2, 21), '春分の日', false),
    new Holiday(new Date(2015, 3, 29), '昭和の日', false),
    new Holiday(new Date(2015, 4, 3), '憲法記念日', true),
    new Holiday(new Date(2015, 4, 4), 'みどりの日', false),
    new Holiday(new Date(2015, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2015, 4, 6), '振替休日', false),
    new Holiday(new Date(2015, 6, 20), '海の日', false),
    new Holiday(new Date(2015, 8, 21), '敬老の日', false),
    new Holiday(new Date(2015, 8, 22), '国民の休日', false),
    new Holiday(new Date(2015, 8, 23), '秋分の日', false),
    new Holiday(new Date(2015, 9, 12), '体育の日', false),
    new Holiday(new Date(2015, 10, 3), '文化の日', false),
    new Holiday(new Date(2015, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(2015, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2015), holiday);
});

// 平成26年法律第43号 国民の祝日に関する法律の一部を改正する法律による祝日の追加
test('2016', t => {
  let holiday = [
    new Holiday(new Date(2016, 0, 1), '元日', false),
    new Holiday(new Date(2016, 0, 11), '成人の日', false),
    new Holiday(new Date(2016, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2016, 2, 20), '春分の日', true),
    new Holiday(new Date(2016, 2, 21), '振替休日', false),
    new Holiday(new Date(2016, 3, 29), '昭和の日', false),
    new Holiday(new Date(2016, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2016, 4, 4), 'みどりの日', false),
    new Holiday(new Date(2016, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2016, 6, 18), '海の日', false),
    new Holiday(new Date(2016, 7, 11), '山の日', false),
    new Holiday(new Date(2016, 8, 19), '敬老の日', false),
    new Holiday(new Date(2016, 8, 22), '秋分の日', false),
    new Holiday(new Date(2016, 9, 10), '体育の日', false),
    new Holiday(new Date(2016, 10, 3), '文化の日', false),
    new Holiday(new Date(2016, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(2016, 11, 23), '天皇誕生日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2016), holiday);
});

// 通常年
test('2018', t => {
  let holiday = [
    new Holiday(new Date(2018, 0, 1), '元日', false),
    new Holiday(new Date(2018, 0, 8), '成人の日', false),
    new Holiday(new Date(2018, 1, 11), '建国記念の日', true),
    new Holiday(new Date(2018, 1, 12), '振替休日', false),
    new Holiday(new Date(2018, 2, 21), '春分の日', false),
    new Holiday(new Date(2018, 3, 29), '昭和の日', true),
    new Holiday(new Date(2018, 3, 30), '振替休日', false),
    new Holiday(new Date(2018, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2018, 4, 4), 'みどりの日', false),
    new Holiday(new Date(2018, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2018, 6, 16), '海の日', false),
    new Holiday(new Date(2018, 7, 11), '山の日', false),
    new Holiday(new Date(2018, 8, 17), '敬老の日', false),
    new Holiday(new Date(2018, 8, 23), '秋分の日', true),
    new Holiday(new Date(2018, 8, 24), '振替休日', false),
    new Holiday(new Date(2018, 9, 8), '体育の日', false),
    new Holiday(new Date(2018, 10, 3), '文化の日', false),
    new Holiday(new Date(2018, 10, 23), '勤労感謝の日', false),
    new Holiday(new Date(2018, 11, 23), '天皇誕生日', true),
    new Holiday(new Date(2018, 11, 24), '振替休日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2018), holiday);
});

// 平成29年法律第63号 天皇の退位等に関する皇室典範特例法による祝日の削除
// 平成30年法律第99号 天皇の即位の日及び即位礼正殿の儀の行われる日を休日とする法律による休日の追加
test('2019', t => {
  let holiday = [
    new Holiday(new Date(2019, 0, 1), '元日', false),
    new Holiday(new Date(2019, 0, 14), '成人の日', false),
    new Holiday(new Date(2019, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2019, 2, 21), '春分の日', false),
    new Holiday(new Date(2019, 3, 29), '昭和の日', false),
    new Holiday(new Date(2019, 3, 30), '国民の休日', false),
    new Holiday(new Date(2019, 4, 1), '天皇の即位の日', false),
    new Holiday(new Date(2019, 4, 2), '国民の休日', false),
    new Holiday(new Date(2019, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2019, 4, 4), 'みどりの日', false),
    new Holiday(new Date(2019, 4, 5), 'こどもの日', true),
    new Holiday(new Date(2019, 4, 6), '振替休日', false),
    new Holiday(new Date(2019, 6, 15), '海の日', false),
    new Holiday(new Date(2019, 7, 11), '山の日', true),
    new Holiday(new Date(2019, 7, 12), '振替休日', false),
    new Holiday(new Date(2019, 8, 16), '敬老の日', false),
    new Holiday(new Date(2019, 8, 23), '秋分の日', false),
    new Holiday(new Date(2019, 9, 14), '体育の日', false),
    new Holiday(new Date(2019, 9, 22), '即位礼正殿の儀の行われる日', false),
    new Holiday(new Date(2019, 10, 3), '文化の日', true),
    new Holiday(new Date(2019, 10, 4), '振替休日', false),
    new Holiday(new Date(2019, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2019), holiday);
});

// 平成27年法律第33号 平成三十二年東京オリンピック競技大会・東京パラリンピック競技大会特別措置法による祝日の移動
// 平成29年法律第63号 天皇の退位等に関する皇室典範特例法による祝日の追加
// 平成30年法律第57号 国民の祝日に関する法律の一部を改正する法律による祝日名称の変更
test('2020', t => {
  let holiday = [
    new Holiday(new Date(2020, 0, 1), '元日', false),
    new Holiday(new Date(2020, 0, 13), '成人の日', false),
    new Holiday(new Date(2020, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2020, 1, 23), '天皇誕生日', true),
    new Holiday(new Date(2020, 1, 24), '振替休日', false),
    new Holiday(new Date(2020, 2, 20), '春分の日', false),
    new Holiday(new Date(2020, 3, 29), '昭和の日', false),
    new Holiday(new Date(2020, 4, 3), '憲法記念日', true),
    new Holiday(new Date(2020, 4, 4), 'みどりの日', false),
    new Holiday(new Date(2020, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2020, 4, 6), '振替休日', false),
    new Holiday(new Date(2020, 6, 23), '海の日', false),
    new Holiday(new Date(2020, 6, 24), 'スポーツの日', false),
    new Holiday(new Date(2020, 7, 10), '山の日', false),
    new Holiday(new Date(2020, 8, 21), '敬老の日', false),
    new Holiday(new Date(2020, 8, 22), '秋分の日', false),
    new Holiday(new Date(2020, 10, 3), '文化の日', false),
    new Holiday(new Date(2020, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2020), holiday);
});

// 通常年
test('2021', t => {
  let holiday = [
    new Holiday(new Date(2021, 0, 1), '元日', false),
    new Holiday(new Date(2021, 0, 11), '成人の日', false),
    new Holiday(new Date(2021, 1, 11), '建国記念の日', false),
    new Holiday(new Date(2021, 1, 23), '天皇誕生日', false),
    new Holiday(new Date(2021, 2, 20), '春分の日', false),
    new Holiday(new Date(2021, 3, 29), '昭和の日', false),
    new Holiday(new Date(2021, 4, 3), '憲法記念日', false),
    new Holiday(new Date(2021, 4, 4), 'みどりの日', false),
    new Holiday(new Date(2021, 4, 5), 'こどもの日', false),
    new Holiday(new Date(2021, 6, 19), '海の日', false),
    new Holiday(new Date(2021, 7, 11), '山の日', false),
    new Holiday(new Date(2021, 8, 20), '敬老の日', false),
    new Holiday(new Date(2021, 8, 23), '秋分の日', false),
    new Holiday(new Date(2021, 9, 11), 'スポーツの日', false),
    new Holiday(new Date(2021, 10, 3), '文化の日', false),
    new Holiday(new Date(2021, 10, 23), '勤労感謝の日', false)
  ];
  t.deepEqual(PublicHolidays.getHolidaysInYear(2021), holiday);
});

// isHoliday()
test('2020-01-01', t => {
  t.is(PublicHolidays.isHoliday(new Date(2020, 0, 1)), true);
});

test('2020-01-02', t => {
  t.is(PublicHolidays.isHoliday(new Date(2020, 0, 2)), false);
});

test('2020-01-01 12:34:56', t => {
  t.is(PublicHolidays.isHoliday(new Date(2020, 0, 1, 12, 34, 56)), true);
});