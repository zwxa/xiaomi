$(function(){
    var i = 5;
    var timer1;
    var timer2;
function showNext(){
     if(!$('.xm-carousel-list').is(':animated')){
        $(".xm-carousel-list").animate({left:"-1240px"}, 1000);  
       $(".prev").removeClass("disabled");
        $(".next").addClass("disabled");
       
    }
}
function showPrev(){
     if(!$('.xm-carousel-list').is(':animated')){
         $(".next").removeClass("disabled");
        $('.prev').addClass("disabled");
       $(".xm-carousel-list").animate({left:"0px"}, 1000);

        }
}



$(".next").click(function(e){
     e.preventDefault();
    showNext();
   });
    //往前 按钮
$(".prev").click(function(e){
        e.preventDefault();
        showPrev();
    });
});