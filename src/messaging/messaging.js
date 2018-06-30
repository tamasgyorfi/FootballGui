import PubNub from 'pubnub';

class MessageListener {

	constructor() {
		this.pubnub = new PubNub({
            publishKey: 'pub-c-79375f1f-3f08-4b31-8dd8-9e552b044102',
            subscribeKey: 'sub-c-335f59ce-8586-11e7-a405-4e5e8b8b77ee'
        });
	}

	connect(channel, onMessageCallback) {
		this.pubnub.addListener({
    		status: function(statusEvent) {},
    		message: function(message) { onMessageCallback(message) },
    		presence: function(presenceEvent) {}
    	})

    	this.pubnub.subscribe({
    		channels: [channel]
		});
	}

	getFirstFromHistory(channel, onMessageCallback) {
		this.pubnub.history(
    	{
        	channel: channel,
        	count: 1, 
        	stringifiedTimeToken: true, 
    	},
    	function (status, response) {
    		onMessageCallback(response)
    	});
	}
 
	disconnect(channel) {
		this.pubnub.unsubscribe({
            channels: [channel]
        });
	}
}

export default MessageListener;