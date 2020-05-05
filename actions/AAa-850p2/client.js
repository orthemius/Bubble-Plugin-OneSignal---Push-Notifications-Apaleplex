function(properties, context) {
    OneSignal.push(function(){
        OneSignal.setSubscription(false); 
        //OneSignal.isPushNotificationsEnabled(function(isEnabled) {
       // 	if (isEnabled) {
       //         OneSignal.setSubscription(false);         
      //      } else {
          		//console.log("Push notifications are not enabled yet.");  
       //     }
      //  });
    });
}