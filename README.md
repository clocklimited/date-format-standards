# Clock Date Time Standard Formats

[![Greenkeeper badge](https://badges.greenkeeper.io/clocklimited/date-format-standards.svg)](https://greenkeeper.io/)

These are the agreed date formats that should be used on Clock projects and
documentation.

Formats can be changed on client request, but these should remain the defaults.

You're free to choose the most appropriate format for your use case, but use
common sense when choosing formats. When space is a premium, use __short__. If
the audience is international, use __longTimeZone__.

Most importantly, NEVER USE DD/MM/YYYY or MM/DD/YYYY it is real bad format and
can be confusing internationally.

If you are naming files with dates use the __isoFileSystem__ formats.

Never write the ordinals (__st__, __nd__, __rd__, __th__) or __of__. However
they are still used in the spoken form.

We don't align our formats with any one authority, here are some places we
looked when defining our formats:

* http://www.theguardian.com/technology/2015/mar/26/tim-cook-apple-donate-800m-fortune-charity
* http://www.bbc.co.uk/academy/journalism/article/art20130702112133560
* http://www.wsj.com/articles/default-threat-haunts-ukrainian-corporate-debt-investors-1427392120
* http://www.theguardian.com/guardian-observer-style-guide-d

## Locale Date Formats

* __LT__ 23:51
* __LTS__ 23:51:00
* __L__ 5 Nov 1955
* __LL__ 5 November 1955
* __LLL__ 5 November 1955 23:51
* __LLLL__ Saturday 5 November 1955 23:51

## Custom Formats

In addition to some of the standard locale format the following formats have been defined for common tasks.

* timezone __LLLL z__ Saturday 5 November 1955 23:51 GMT
* isoZ __YYYY-MM-DDTHH:mm:ss.sss[Z]__ 1955-11-05T23:51:00.000Z
* isoZFileSystem __YYYYMMDDThhmmss[Z]__ 19551105T115100Z

## Calendar Format

This should be used on digital media that refreshes regularly. This is not suitable for printed media or downloaded content.

Assuming the time is Saturday 4 April 2015 14:55

* Today at 14:55
* Yesterday at 14:55
* Last Thursday at 14:55
* Saturday 28 March 2015 14:55

## Relative Format

This should be used when you want to show a loose human style date when the exact time is not important.

Assuming the time is Saturday 4 April 2015 14:55

* a few seconds ago
* a day ago
* 2 days ago
* 7 days ago
* a month ago
* a year ago