import each from 'lodash/each';
import t from './translation';

let mysterySets = {
  201402: {
    start: '2014-02-22',
    end: '2014-02-28',
  },
  201403: {
    start: '2014-03-24',
    end: '2014-04-02',
  },
  201404: {
    start: '2014-04-24',
    end: '2014-05-02',
  },
  201405: {
    start: '2014-05-21',
    end: '2014-06-02',
  },
  201406: {
    start: '2014-06-23',
    end: '2014-07-02',
  },
  201407: {
    start: '2014-07-23',
    end: '2014-08-02',
  },
  201408: {
    start: '2014-08-23',
    end: '2014-09-02',
  },
  201409: {
    start: '2014-09-24',
    end: '2014-10-02',
  },
  201410: {
    start: '2014-10-24',
    end: '2014-11-02',
  },
  201411: {
    start: '2014-11-24',
    end: '2014-12-02',
  },
  201412: {
    start: '2014-12-25',
    end: '2015-01-02',
  },
  201501: {
    start: '2015-01-26',
    end: '2015-02-02',
  },
  201502: {
    start: '2015-02-24',
    end: '2015-03-02',
  },
  201503: {
    start: '2015-03-25',
    end: '2015-04-02',
  },
  201504: {
    start: '2015-04-24',
    end: '2015-05-02',
  },
  201505: {
    start: '2015-05-25',
    end: '2015-06-02',
  },
  201506: {
    start: '2015-06-25',
    end: '2015-07-02',
  },
  201507: {
    start: '2015-07-24',
    end: '2015-08-02',
  },
  201508: {
    start: '2015-08-23',
    end: '2015-09-02',
  },
  201509: {
    start: '2015-09-24',
    end: '2015-10-02',
  },
  201510: {
    start: '2015-10-26',
    end: '2015-11-02',
  },
  201511: {
    start: '2015-11-25',
    end: '2015-12-02',
  },
  201512: {
    start: '2015-12-23',
    end: '2016-01-02',
  },
  201601: {
    start: '2016-01-26',
    end: '2016-02-02',
  },
  201602: {
    start: '2016-02-24',
    end: '2016-03-02',
  },
  201603: {
    start: '2016-03-24',
    end: '2016-04-02',
  },
  201604: {
    start: '2016-04-25',
    end: '2016-05-02',
  },
  201605: {
    start: '2016-05-25',
    end: '2016-06-02',
  },
  201606: {
    start: '2016-06-23',
    end: '2016-07-02',
  },
  201607: {
    start: '2016-07-26',
    end: '2016-08-02',
  },
  201608: {
    start: '2016-08-23',
    end: '2016-09-02',
  },
  201609: {
    start: '2016-09-22',
    end: '2016-10-02',
  },
  201610: {
    start: '2016-10-25',
    end: '2016-11-02',
  },
  201611: {
    start: '2016-11-22',
    end: '2016-12-02',
  },
  201612: {
    start: '2016-12-21',
    end: '2017-01-02',
  },
  201701: {
    start: '2017-01-24',
    end: '2017-02-02',
  },
  201702: {
    start: '2017-02-21',
    end: '2017-03-02',
  },
  201703: {
    start: '2017-03-23',
    end: '2017-04-02',
  },
  201704: {
    start: '2017-04-25',
    end: '2017-05-02',
  },
  201705: {
    start: '2017-05-23',
    end: '2017-06-02',
  },
  201706: {
    start: '2017-06-22',
    end: '2017-07-02',
  },
  201707: {
    start: '2017-07-25',
    end: '2017-08-02',
  },
  201708: {
    start: '2017-08-17',
    end: '2017-09-02',
  },
  201709: {
    start: '2017-09-19',
    end: '2017-10-07',
  },
  201710: {
    start: '2017-10-24',
    end: '2017-11-02',
  },
  201711: {
    start: '2017-11-17',
    end: '2017-12-02',
  },
  201712: {
    start: '2017-12-21',
    end: '2018-01-02',
  },
  201801: {
    start: '2018-01-23',
    end: '2018-02-02',
  },
  201802: {
    start: '2018-02-22',
    end: '2018-03-02',
  },
  201803: {
    start: '2018-03-22',
    end: '2018-04-02',
  },
  201804: {
    start: '2018-04-24',
    end: '2018-05-02',
  },
  201805: {
    start: '2018-05-24',
    end: '2018-06-02',
  },
  201806: {
    start: '2018-06-21',
    end: '2018-07-02',
  },
  201807: {
    start: '2018-07-24',
    end: '2018-08-02',
  },
  201808: {
    start: '2018-08-23',
    end: '2018-09-02',
  },
  201809: {
    start: '2018-09-25',
    end: '2018-10-02',
  },
  201810: {
    start: '2018-10-25',
    end: '2018-11-02',
  },
  201811: {
    start: '2018-11-28',
    end: '2018-12-4',
  },
  201812: {
    start: '2018-12-19',
    end: '2019-01-02',
  },
  201901: {
    start: '2019-01-28',
    end: '2019-02-02',
  },
  201902: {
    start: '2019-02-25',
    end: '2019-03-02',
  },
  201903: {
    start: '2019-03-26',
    end: '2019-04-02',
  },
  201904: {
    start: '2019-04-25',
    end: '2019-05-02',
  },
  201905: {
    start: '2019-05-28',
    end: '2019-06-02',
  },
  301404: {
    start: '3014-03-24',
    end: '3014-04-02',
  },
  301405: {
    start: '3014-04-24',
    end: '3014-05-02',
  },
  301703: {
    start: '3017-03-14',
    end: '3017-04-02',
  },
  301704: {
    start: '3017-04-14',
    end: '3017-05-02',
  },
  // @TODO: Remove wondercon from mystery-sets
  wondercon: {
    start: '2014-03-24',
    end: '2014-04-01',
  },
};

each(mysterySets, (value, key) => {
  value.key = key;
  value.text = t(`mysterySet${key}`);
  value.class = `shop_set_mystery_${key}`;
});

module.exports = mysterySets;
