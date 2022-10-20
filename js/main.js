/* banner */
const swiper = new Swiper('.swiper-container', {
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    /* 닷 클릭가능*/
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction:false,
     //자동재생이 클릭행위로 멈춰버리는 것을 방지, 클릭 후 다시 재생
  }
});

// 무비
var movBtn = $('.movie_title ul li');
var movCont = $('.movie_chart>div');

movCont.hide().eq(0).show();

movBtn.click(function (e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();

  movBtn.removeClass('active');
  target.addClass('active')

  movCont.hide();
  movCont.eq(index).show();
});

//영화차트이미지 슬라이드 
const swiper2 = new Swiper('.swiper-container2', {
  // Optional parameters
  loop: true,
  slidesPerView: 4, //첫화면에 4개씩 //나머지 보이는 것들은  overflow: hidden; 처리로 없애준다
  spaceBetween: 24, // 하나하나 마다의 간격
  observer: true, //display none에 의해서 swiper 깨짐현상이 생길 때 새로고침 시킴
  // 슬릭 --> $('#addressesList').get(0).slick.setPosition()
  observeParents: true,
  //breakpoints 반응형에 맞추기 위해
  breakpoints: {
    //뷰포터의 넓이>0
    0: {
      slidesPerView: 1.4,
      spaceBetween: 24
    },
    //뷰포터의 넓이>600
    600: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    //뷰포터의 넓이>768
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    //뷰포터의 넓이>960
    960: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});

$('.openMenu ,.sub_shadow').on('mouseenter mouseleave',function(aa){
  if($(window).width() > 991){    //PC(데스크탑) 상태
    if( aa.type == 'mouseenter'){  //마우스를 올려놨을때
      $('.sub >li >a').stop().fadeIn();
      $('.sub_shadow').stop().slideDown();
    }else{
      $('.sub >li >a').stop().fadeOut(300,function(){
        $('.sub >li >a').removeAttr('style');
      });
      $('.sub_shadow').stop().slideUp(300,function(){
        $(this).removeAttr('style')
      });
    }
  }
});
