$(document).ready(function(){
  $(".btn-ricardo").click(function(){
  	$(this).hide();
    $(".social-team-ricardo").fadeIn(1000);
  });
  $(".btn-ricardo-sec").click(function(){
  	$(this).hide();
    $(".social-team-ricardo-sec").fadeIn(1000);
  });
  $(".btn-alberto").click(function(){
  	$(this).hide();
    $(".social-team-alberto").fadeIn(1000);
  });
  $(".btn-alberto-sec").click(function(){
  	$(this).hide();
    $(".social-team-alberto-sec").fadeIn(1000);
  });
  $(".btn-thomas").click(function(){
  	$(this).hide();
    $(".social-team-thomas").fadeIn(1000);
  });
  $(".button-menu").click(function(){
  	$(".modal-wrap").fadeIn(500);
  });
  $(".button-close").click(function(){
  	$(".modal-wrap").fadeOut(500);
  });

  $('.box-clients').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	      	slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 800,
	      settings: {
	      	slidesToShow: 1
	      }
	    },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
	]
  });

  $('.box-team').slick({
  	infinite: false,
  	arrows: false,
  	dots: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	      	slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 800,
	      settings: {
	      	slidesToShow: 1
	      }
	    }
	]
  });
});