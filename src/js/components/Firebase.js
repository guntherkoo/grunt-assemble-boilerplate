global.jQuery = require('jquery');
var $ = global.jQuery;

export default function (){

	var myDataRef = new Firebase('https://kooreactjs.firebaseio.com/live-chat');

	$('#messageInput').keypress(function (e) {
		if (e.keyCode == 13) {
			var name = $('#nameInput').val();
			var text = $('#messageInput').val();

			myDataRef.push({
				name: name, 
				text: text
			});

			$('#messageInput').val('');
		}
	});

	myDataRef.on('child_added', function(snapshot) {
		var message = snapshot.val();
		displayChatMessage(message.name, message.text);
	});


	function displayChatMessage(name, text) {
		$('<p/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
		$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
	};

}