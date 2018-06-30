import PubNub from 'pubnub';

class MessageListener {

	constructor() {
		this.pubnub = new PubNub({
            publishKey: <publishKey>,
            subscribeKey: <subscribeKey>
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