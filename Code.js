var token = PropertiesService.getScriptProperties().getProperty('TOGGL_TOKEN')
var url = PropertiesService.getScriptProperties().getProperty('TOGGL_URL')
var options = {'headers': {'Authorization': 'Basic ' + Utilities.base64Encode(token + ':api_token')}}


function TOGGLREPORT() {
 	var projects = JSON.parse(UrlFetchApp.fetch(url, options).getContentText()).data
 	var titleAndTime = projects.map(function(project) {
 		return [ project.title.project, project.time]
 	})
 	return titleAndTime
}
