$(document).ready(function() {
		var duration = 3000; //每张图片的持续显示时间
		var speed = 2000; //图片切换的动画时间
		var flag  = true;
		var curIndex = 0; //设置当前显示图片的索引值
		var totalIndex = $('#slideshow > ul > li').length; //获得总的图片数量
		var timer; //设置一个计时变量
		$('#slideshow > ul > li').each(function(index) {
			
			$('#slideshow-nav').append("<span>"+(index+1)+"</span>"); //在导航中添加相应的节点
    });
		$('#slideshow-nav > span').each(function(index) {
			$(this).attr("index", index); //存储每个节点的索引值
			$(this).click(function(){ //当span元素被点击时
				curIndex = $(this).attr("index")-1; //刷新当前显示图片的索引值
				clearTimeout(timer); //清除计时
				move(); //重新执行move函数以显示该图片
			});
    });
		$('#slideshow-nav > span').eq(0).addClass("active"); //设置第一个圆点为active
		var firstChild = $('#slideshow > ul > li').eq(0).clone(); //将第一张图片复制一份
		$('#slideshow > ul').append(firstChild); //将该图片添加到列表最末
		//firstChild.css("left", totalIndex*width+"px"); //将复制的第一张图片显示在图片序列最右侧
	
		function move(){
			if (flag){
			curIndex++; //使索引值加以1
			if(curIndex>totalIndex){ //当索引值大于图片总数时
				curIndex = 1; //表示当前应播放第2张图片
				$('#slideshow > ul').css("left", "0px"); //将图片序列重置到原点
			}
			for(var i=0; i < totalIndex; i++){
				$('#slideshow-nav > span').eq(i).removeClass("active"); //清除所有导航节点的active类
			}
			if(curIndex === totalIndex){
				$('#slideshow-nav > span').eq(0).addClass("active"); //如果当前索引值等于图片总数，则说明当前正显示第一张图片的副本，因此应激活第一个导航节点
			}else{
				$('#slideshow-nav > span').eq(curIndex).addClass("active"); //在其余情况下，则为当前导航节点添加active类
			}
			
				$('#slideshow > ul>li').eq(curIndex).fadeIn(speed,function(){
				}).siblings().css({
					display: 'none'
				});
			
			}
			 //为图片序列创建动画
			timer = setTimeout(move,duration+speed); //设置延迟一定时间后执行move函数，延迟时间等于动画时长加上每张图片的持续显示时间
		}
	
		timer = setTimeout(move,duration); //设置延迟一定时间后执行move函数，延迟时间等于每张图片的持续显示时间
		
		$('#slideshow > ul>li').hover(function(){
			flag = false;
		},function(){
			flag = true;
		})
	});

	