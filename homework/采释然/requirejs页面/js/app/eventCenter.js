define(function(){
	var eventCenter = (function(){
		var evernts = {};
		return{
			on: function(event,handler){
			    evernts[event] = evernts[event] || [];
                evernts[event].push(handler)
			},
			fire: function(event,data){
				if(!evernts[event]){
					return
				}else{
					for(var i = 0;i<evernts[event].length;i++){
						evernts[event][i](data)
					}
				}
			}
		}
	})()
	return eventCenter;
})