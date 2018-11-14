$('#serialize').click(function() {
	var message = new Object();
	message.writting_1 = $('#writting_1').val();
	message.writting_2 = $('#writting_2').val();
	var jsonString = JSON.stringify(message);
	$('#raw-json').val(jsonString);
});

$('#deserialize').click(function() {
	var jsonString = $('#raw-json').val();
	message = JSON.parse(jsonString);
	$('#writting_1').val(message["writting_1"]);
	$('#writting_2').val(message.writting_2);
});
