function(properties, context) {
    
    let currentUserID = context.currentUser.get("_id");
    
	OneSignal.push(function() {
        OneSignal.setExternalUserId(currentUserID);
        OneSignal.showSlidedownPrompt();
    });


}