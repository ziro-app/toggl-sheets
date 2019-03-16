var token = PropertiesService.getScriptProperties().getProperty('TOGGL_TOKEN')
var url = PropertiesService.getScriptProperties().getProperty('TOGGL_URL')
var options = {'headers': {'Authorization': 'Basic ' + Utilities.base64Encode(token + ':api_token')}}


function TOGGLREPORT(workspace) {
 	var projects = JSON.parse(UrlFetchApp.fetch(url + workspace, options).getContentText()).data
 	var ordersTitlesAndTimes = projects.map(function(project) {
 		var order = project.title.project.split(" | ")[0]
 		var title = project.title.project.split(" | ")[1]
 		var time = project.time / (1000*3600*24)
 		return [ order, title, time ]
 	})
 	return ordersTitlesAndTimes.sort(function(a, b) {
 		return a[0] - b[0]
 	})
}
