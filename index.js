var config = require('./config.json')
  , moment = require('moment-timezone')
  , gmtDate = '1955-11-05 23:51'
  , log = console.log

moment.defineLocale('clock', config.locale)

function formatDate (date, format) {
  log('* __' + format + '__', moment(date).tz(config.timezone).format(format))
}

log('## Locale Date Formats\n')

Object.keys(config.locale.longDateFormat).forEach(formatDate.bind(null, gmtDate))

log('\n## Custom Formats\n')
log('In addition to some of the standard locale format the following formats have been defined for common tasks.\n')

Object.keys(config.formats).forEach(function(format) {
  log('*', format, '__' + config.formats[format] + '__'
    , moment(gmtDate).tz(config.timezone).format(config.formats[format]))
})

log('\n## Calendar Format\n')
log('This should be used on digital media that refreshes regularly. This is not ' +
  'suitable for printed media or downloaded content.\n')
log('Assuming the time is', moment().tz(config.timezone).format('LLLL'), '\n')
log('*', moment().tz(config.timezone).calendar())
log('*', moment().subtract(1, 'day').tz(config.timezone).calendar())
log('*', moment().subtract(2, 'day').tz(config.timezone).calendar())
log('*', moment().subtract(1, 'week').tz(config.timezone).calendar())

log('\n## Relative Format\n')
log('This should be used when you want to show a loose human style date when the exact time is not important.\n')
log('Assuming the time is', moment().tz(config.timezone).format('LLLL'), '\n')
log('*', moment().tz(config.timezone).fromNow())
log('*', moment().subtract(1, 'day').tz(config.timezone).fromNow())
log('*', moment().subtract(2, 'day').tz(config.timezone).fromNow())
log('*', moment().subtract(1, 'week').tz(config.timezone).fromNow())
log('*', moment().subtract(1, 'month').tz(config.timezone).fromNow())
log('*', moment().subtract(1, 'year').tz(config.timezone).fromNow())
