var login = require('facebook-chat-api');

var answeredThreads = {};

//created simple echo bot
login({
	email: 'anh.tuyet.9674',
	password: '***'
}, function callback(err, api) {
	if (err)
		return console.error(err);

	api.listen(function callback(err, message) {
		console.log(message.threadID);
		if (!answeredThreads.hasOwnProperty(message.threadID)) {
			answeredThreads[message.threadID] = true;
			api.sendMessage('BOT - Hiện tại mình đang ra ngoài', message.threadID);
		}
	});
});
