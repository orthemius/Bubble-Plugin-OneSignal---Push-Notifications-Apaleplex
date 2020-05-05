function(properties, context) {
    
    var headers = {
        "Content-Type" : "application/json; charset=utf-8",
        "Authorization" : "Basic " + context.keys["API Key"]
	}
    
    var userlen = properties.users.length();
	var userlist = properties.users.get(0,userlen).map(function(user){
        return user.get("_id");
    }); 
	    
    var notification = {
		"app_id": context.keys["App ID"],
      	"include_external_user_ids": userlist,
        "template_id" : properties.template_id
    }
   
	var options = {
        headers: headers,
        method: "POST",
        json: notification,
        url: "https://onesignal.com/api/v1/notifications"
    }
    
    context.request(options, function(err, res, body){
        console.log("sent notification");
    });

}