const { format } = require('date-fns');

const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');

module.exports = timestamp;
