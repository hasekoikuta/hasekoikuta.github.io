function getCookie(name){
var data = document.cookie.split(';');
for(var i=0; i < data.length; i++){
	var keyValue = data[i].split('=')
	if(trim(keyValue[0]) == name){
		return decodeURIComponent(trim(keyValue[1]))
		}
	}
	return null;
}
function trim(value){
	return value.replace(/^\s*|\s*$/g, '');
}