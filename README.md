# Clock Date Time Standard Formats

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

## Date Formats

__short__ _[D MMM YYYY]_ __5 Nov 1955__

__long__ _[dddd D MMMM YYYY]_ __Saturday 5 November 1955__

__isoDate__ _[YYYY-MM-DD]_ __1955-11-05__

__isoFileSystem__ _[YYYYMMDD]_ __19551105__


## Date Time Formats

__short__ _[D MMM YYYY HH:mm]_ __5 Nov 1955 23:51__

__long__ _[dddd D MMMM YYYY HH:mm]_ __Saturday 5 November 1955 23:51__

__longTimeZone__ _[dddd D MMMM YYYY HH:mm z]_ __Saturday 5 November 1955 23:51 GMT__

__isoDate__ _[YYYY-MM-DDTHH:mm:ss.sssZZ]_ __1955-11-05T23:51:00.000+0000__

__isoFileSystem__ _[YYYYMMDDThhmmssZZ]_ __19551105T115100+0000__


## Time Zones Examples


### GMT

__longTimeZone__ _[dddd D MMMM YYYY HH:mm z]_ __Saturday 5 November 1955 23:51 GMT__

__isoDate__ _[YYYY-MM-DDTHH:mm:ss.sssZZ]_ __1955-11-05T23:51:00.000+0000__

__isoFileSystem__ _[YYYYMMDDThhmmssZZ]_ __19551105T115100+0000__


### BST

__longTimeZone__ _[dddd D MMMM YYYY HH:mm z]_ __Sunday 1 May 1955 21:47 BST__

__isoDate__ _[YYYY-MM-DDTHH:mm:ss.sssZZ]_ __1955-05-01T21:47:00.000+0100__

__isoFileSystem__ _[YYYYMMDDThhmmssZZ]_ __19550501T094700+0100__


## UTC Examples

__longTimeZone__ _[dddd D MMMM YYYY HH:mm z]_ __Saturday 5 November 1955 23:51 UTC__

__isoDate__ _[YYYY-MM-DDTHH:mm:ss.sssZZ]_ __1955-11-05T23:51:00.000+0000__

__isoFileSystem__ _[YYYYMMDDThhmmssZZ]_ __19551105T115100+0000__

__longTimeZone__ _[dddd D MMMM YYYY HH:mm z]_ __Sunday 1 May 1955 20:47 UTC__

__isoDate__ _[YYYY-MM-DDTHH:mm:ss.sssZZ]_ __1955-05-01T20:47:00.000+0000__

__isoFileSystem__ _[YYYYMMDDThhmmssZZ]_ __19550501T084700+0000__
