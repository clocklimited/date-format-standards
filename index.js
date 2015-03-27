var config = require('./config.json')
  , moment = require('moment-timezone')
  , gmtDate = new Date('1955-11-05 23:51')
  , bstDate = new Date('1955-05-01 21:47')
  , dates = { 'GMT': gmtDate, 'BST': bstDate }

function formatDate (date, formats, format) {
  console.log('__' + format + '__', '_[' + formats[format] + ']_'
    , '__' + moment(date).tz(config.timezone).format(formats[format]) + '__\n')
}

console.log('## Date Formats\n')

Object.keys(config.formats.date).forEach(formatDate.bind(null, gmtDate, config.formats.date))

console.log('\n## Date Time Formats\n')
Object.keys(config.formats.dateTime).forEach(formatDate.bind(null, gmtDate, config.formats.dateTime))

console.log('\n## Time Zones Examples\n')

Object.keys(dates).forEach(function(key) {
  console.log('\n### ' + key + '\n')

  formatDate(dates[key], config.formats.dateTime, 'longTimeZone')
  formatDate(dates[key], config.formats.dateTime, 'isoDate')
  formatDate(dates[key], config.formats.dateTime, 'isoFileSystem')
})

console.log('\n## UTC Examples\n')
config.timezone = 'UTC'
Object.keys(dates).forEach(function(key) {
  formatDate(dates[key], config.formats.dateTime, 'longTimeZone')
  formatDate(dates[key], config.formats.dateTime, 'isoDate')
  formatDate(dates[key], config.formats.dateTime, 'isoFileSystem')
})
