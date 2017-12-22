
$(function(){
$(".head-dla").hover(function(){
	if($(this).find("dd").is(":hidden")){
		$(this).find("dd").slideDown(0);
		}else{
		$(this).find("dd").slideUp(0);	
		}						
	})	   

$('.sl6-gbox a').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$(".sl6-gboxm").find('.sl6-gboxmx').eq($(this).index()).show().siblings().hide();
});	  

$('.psl7-dula li').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$(".psl7-dm").find('dl').eq($(this).index()).show().siblings().hide();
});	
		   
$(".close").click(function(){
	$(".fbox").hide(0);							
	})	
		   
$(".fboxam span").click(function(){
	$(".fboxa").hide(0);							
	})		   


$(".fbox-c,.pfbox-c").click(function(){
   var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},300);
 })
		   
$(".slw-phd-d a").click(function(){
	$(this).toggleClass("on");							
	})

$(".sl8-cc ul li").hover(function(){
   $(this).find("span").fadeIn(300);
 },function(){
   $(this).find("span").fadeOut(300);
 })	
		   

});


 var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
	autoplay:3000,
    grabCursor: true,
    paginationClickable: true
  })
 
 var mySwiper2 = new Swiper('.swiper-container2',{
    pagination: '.pagination2',
    loop:true,
    grabCursor: true,
    paginationClickable: true
  })
  $('.arrow-l').on('click', function(){
    mySwiper2.swipePrev();
  })
  $('.arrow-r').on('click', function(){
    mySwiper2.swipeNext();
  })

 var mySwiper3 = new Swiper('.swiper-container3',{
    pagination: '.pagination3',
	autoplay:3000,
    paginationClickable: true
  })
  $('.arrow-la').on('click', function(){
    mySwiper3.swipePrev();
  })
  $('.arrow-ra').on('click', function(){
    mySwiper3.swipeNext();
  })
  
 var mySwiper4 = new Swiper('.swiper-container4',{
    pagination: '.pagination4',
    paginationClickable: true,
    slidesPerView: 'auto'
  })

 var mySwiper5 = new Swiper('.swiper-container5',{
    pagination: '.pagination5',
    loop:true,
	autoplay:2000,
	slidesPerView: 4,
    paginationClickable: true
  })
  $('.arrow-lb').on('click', function(){
    mySwiper5.swipePrev();
  })
  $('.arrow-rb').on('click', function(){
    mySwiper5.swipeNext();
  })
 