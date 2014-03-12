// in-stream
fs    = require('fs')
argv  = argv = require('minimist')(process.argv.slice(2))
if (argv.f) {
	console.log('instream:', argv.f)
} else {
	console.log('instream: stdin')
}

options = { 
  flags:     'r',
  encoding:  'utf8',
  mode:      0444,
  autoClose: true
}

inStream = (argv.f) ? fs.createReadStream(argv.f, options) : process.stdin

module.exports = inStream