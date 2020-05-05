function(properties, context) {
    
    var headers = {
        "Content-Type" : "application/json; charset=utf-8",
        "Authorization" : "Basic " + context.keys["API Key"]
	}
	    
    var notification = {
		app_id: context.keys["App ID"],
      	filters: [
            {field: "tag", key: properties.key, relation: properties.relation, value: properties.value}
        ],
        contents: {en: properties.contents}
    }
   
    if(properties.title){
        notification.headings = {en: properties.title};
    }
    if(properties.url){
        notification.url = properties.url_destination;
    }
    if(properties.icon_image_url){
        notification.small_icon = properties.icon_image_url;
        notification.chrome_web_icon = properties.icon_image_url;
    }
    
	var options = {
        headers: headers,
        method: "POST",
        json: notification,
        url: "https://onesignal.com/api/v1/notifications"
    }
    
    context.request(options);

}