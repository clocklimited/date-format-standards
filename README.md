# Clock Date Time Standard Formats

These are the agreed date formats that should be used on Clock projects and
documentation.

Formats can be changed on client request but these should remain the defaults.

Are you free to choose the most appropriate format for your use case.

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

### short => 5 Nov 1955

Format: __D MMM YYYY__

### long => Saturday 5 November 1955

Format: __dddd D MMMM YYYY__

### isoDate => 1955-11-05

Format: __YYYY-MM-DD__

### isoFileSystem => 19551105

Format: __YYYYMMDD__

## Date Time Formats

### short => 5 Nov 1955 23:51

Format: __D MMM YYYY HH:mm__

### long => Saturday 5 November 1955 23:51

Format: __dddd D MMMM YYYY HH:mm__

### longTimeZone => Saturday 5 November 1955 23:51 GMT

Format: __dddd D MMMM YYYY HH:mm z__

### isoDate => 1955-11-05T23:51:00.000+0000

Format: __YYYY-MM-DDTHH:mm:ss.sssZZ__

### isoFileSystem => 19551105T115100GMT

Format: __YYYYMMDDThhmmssz__

## Time Zones Examples

### GMT

### longTimeZone => Saturday 5 November 1955 23:51 GMT

Format: __dddd D MMMM YYYY HH:mm z__

### isoDate => 1955-11-05T23:51:00.000+0000

Format: __YYYY-MM-DDTHH:mm:ss.sssZZ__

### isoFileSystem => 19551105T115100GMT

Format: __YYYYMMDDThhmmssz__

### BST

### longTimeZone => Sunday 1 May 1955 21:47 BST

Format: __dddd D MMMM YYYY HH:mm z__

### isoDate => 1955-05-01T21:47:00.000+0100

Format: __YYYY-MM-DDTHH:mm:ss.sssZZ__

### isoFileSystem => 19550501T094700BST

Format: __YYYYMMDDThhmmssz__

## UTC Examples

### longTimeZone => Saturday 5 November 1955 23:51 UTC

Format: __dddd D MMMM YYYY HH:mm z__

### isoDate => 1955-11-05T23:51:00.000+0000

Format: __YYYY-MM-DDTHH:mm:ss.sssZZ__

### isoFileSystem => 19551105T115100UTC

Format: __YYYYMMDDThhmmssz__

### longTimeZone => Sunday 1 May 1955 20:47 UTC

Format: __dddd D MMMM YYYY HH:mm z__

### isoDate => 1955-05-01T20:47:00.000+0000

Format: __YYYY-MM-DDTHH:mm:ss.sssZZ__

### isoFileSystem => 19550501T084700UTC

Format: __YYYYMMDDThhmmssz__