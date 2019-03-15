var token = PropertiesService.getScriptProperties().getProperty('TOGGL_TOKEN')
var url = PropertiesService.getScriptProperties().getProperty('TOGGL_URL')
var options = {'headers': {'Authorization': 'Basic ' + Utilities.base64Encode(token + ':api_token')}}


function myFunction() {
 	var response = UrlFetchApp.fetch(url, options)
	Logger.log(response.getContentText())
}
