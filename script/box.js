$(function(){
	$('.children').hide();
	$('.category-item').hover(function(){
		$('.category-item>.title:nth(0)').css("background","#ff6700");
		$('.children').show();
	},function(){
		$('.category-item>.title:nth(0)').css("background","none");
		$('.children').hide();
	});


});