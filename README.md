# jquery-duration-entry

This is an easy way to slap some hour, minute and seconds inputs onto a page and have them auto-update a "total seconds" input. It may or may not do more in the future. This is handy for saving durations in seconds, but with user-friendly input of separate fields.

## Dependencies

- jQuery
- [moment.js](http://momentjs.com/)

## Setup

Add fields for hours, minutes and seconds...

    <input id="hours" /> hrs. <input id="minutes" /> mins. <input id="seconds" /> secs.

Add a "total seconds" input with data attributes pointing to the hour, minute and second inputs...

    <input class="duration" value="3600" data-duration-hours="#hours" data-duration-minutes="#minutes" data-duration-seconds="#seconds" />

Call the `durationEntry` method on the total seconds input...

    $(".duration").durationEntry();

The total seconds input is automatically hidden. The hour, minute and second fields will be loaded up with the appropriate values if total seconds has a value.
