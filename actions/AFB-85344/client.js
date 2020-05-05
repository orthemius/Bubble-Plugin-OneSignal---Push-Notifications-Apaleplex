function(properties, context) {
    OneSignal.push(function() {
      OneSignal.deleteTag(properties.tag_key);
    });	
}