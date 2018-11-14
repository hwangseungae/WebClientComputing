$("#show").click(function() {
	$("#in-1").show(2000);
});
$("#hide").click(function() {
	$("#in-1").hide();
});


$("#animate").click(function() {
	$("#animation").animate({left:"300px",opacity:"1.5"}, 1000);
});


$("#animation-button").click(function() {
	$("#demo-1").fadeToggle(2500);
	$("#demo-2").fadeToggle("fast");
  $("#demo-3").fadeToggle("slow");
});



$("#flip").click(function() {
  $("#panel").slideToggle(3000);
});
