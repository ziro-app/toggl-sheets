var toggl_token = require('credentials.js').toggl_token
var toggl_url = require('credentials.js').toggl_url

var scriptProperties = PropertiesService.getScriptProperties().setProperty({
	'TOGGL_TOKEN': toggl_token,
	'TOGGL_URL': toggl_url
})

function myFunction() {
  Logger.log('test')
}
