$(function(){
	$('.brick-item').hover(function() {
		$(this).addClass("item-active");
	}, function() {
		$(this).removeClass("item-active");
	});

	$('.brick-item-m').hover(function() {
		$(this).addClass("item-active");
	},function(){
		$(this).removeClass("item-active");
	});

	$('#select>li').eq(0).addClass('tab-active');
	$('.brick-list').eq(0).show().siblings().hide();
	$('#select>li').hover(function() {
		$('#select>li').removeClass('tab-active');
		$(this).addClass('tab-active');
		var i = $(this).index();
		$('.brick-list').eq(i).show().siblings().hide();
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});

})