/**
 * Created by mdylag on 17/03/15.
 */
var _ = require('underscore');
var s = require("underscore.string");


_.mixin(s.exports());

s.capitalize('epeli')

s.numberFormat(1000, 2);

s.numberFormat(123456789.123, 5, '.', ',');

s.capitalize("foo Bar");

s.chop('whitespace', 3);

s.clean(" foo    bar   ");

s.chars('Hello');

s.swapCase('hELLO');

s.include("foobar", "ob");

_.('Hello world').count('l');
//('<div>Blah blah blah</div>').escapeHTML();