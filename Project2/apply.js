$(document).ready(function()
{
	$('input').focus(function() {
		$(this).next('span').removeAttr('hidden');
	});

	$('input').blur(function() {
		$(this).next('span').attr('hidden','hidden');
	});

	$('#clk').click(function() {
		var msg_1 = $('#input_1').val();
		var msg_2 = $('#input_2').val();
		var msg_3 = $('#input_3').val();
		var msg_4 = $('#input_4').val();
		alert("Join Us~!")
	});
});
