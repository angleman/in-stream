// in-stream
fs    = require('fs')
argv  = argv = require('minimist')(process.argv.slice(2))

inStream = (argv.f) ? require('fs').createReadStream(argv.f) : process.stdin

module.exports = inStream