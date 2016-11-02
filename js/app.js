var cargar= function(){
	var scroll;

	$(".windows").css({"height": $(window).height() + "px"});

	if($( window ).width() < 768){
		$(".parrafo").addClass("none");
		$(".parrafomobile").removeClass("none").addClass("display");
		$(".proyect").attr("href", "#proyectos");
		$(window).scroll(cambiarMenuScrollMobile);
		$(".proyecto").click(mostrarProyecto);
		$(".padding").click(ocultarInfo);
		$("#proyectos").removeClass("none");
		$("#proyectos1").addClass("none");
	}else{
		$(window).scroll(cambiarMenuScroll);
		var selectedClass = "";
		$(".cabezera p").click(function(){
			selectedClass = $(this).attr("data-rel");
			$("#proyectos1").fadeTo(100, 0.1);
	  		$("#proyectos1 .proyecto").not("."+selectedClass).fadeOut();
			setTimeout(function() {
		      $("."+selectedClass).fadeIn();
		      $("#proyectos1").fadeTo(500, 1);
		    }, 500);
		});
	}
//-------------------------------------------------------------------------------------------
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
//-------------------------------------------------------------------------------------------
    var scale = 0.4;

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    $(window).bind( 'scroll', function() {
      parallaxScroll();
    });
    parallaxScroll();
}

$(window).ready(cargar);
var valor=0;
var int=0;
var barra= document.getElementById("barrastyle");
var barraUno= document.getElementById("barrastyleUno");
var barraDos= document.getElementById("barrastyleDos");
var barraTres= document.getElementById("barrastyleTres");
var barraCuatro= document.getElementById("barrastyleCuatro");
var barraCinco= document.getElementById("barrastyleCinco");

var cambiarMenuScroll= function(){
	cambioMenu(150, 600, 500);
}

var cambiarMenuScrollMobile= function(){
	cambioMenu(150, 600, 1300);
}

var cambioMenu= function(numero, numero2,numero3){
	scroll = $(window).scrollTop();

	if(scroll > numero){
		$(".menu").removeClass("transparent");
		$(".menu").addClass("color");
	}else{
		$(".menu").removeClass("color");
		$(".menu").addClass("transparent");
	}

	if(scroll>numero2){
		$(".portafolio").text("Maryori");
	}else{
		$(".portafolio").text("");
	}

	if(scroll>numero3){
		setInterval(barraProgreso, 100);
	}
}

var barraProgreso= function(){
	barraUno.value+=2;
	barra.value += 2;
	barraDos.value+= 2;
	barraTres.value +=2;
	barraCuatro.value +=2;
	barraCinco.value +=2;
}

var mostrarProyecto= function(){
	$(this).addClass("col-md-7").removeClass("col-md-5");
	$(this).next().removeClass("none");
}

var ocultarInfo= function(){
	$(this).addClass("none");
	$(this).prev().removeClass("col-md-7").addClass("col-md-5");
}

function EasyPeasyParallax() {

	scrollPos = $(this).scrollTop();

	$("#headercontent").css({
		'background-position' : 'center ' + (-scrollPos/4)+"px"
	});

	$(".texto").css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/250)
	});

}

var parallaxScroll= function() {
	var scrollTop = $(window).scrollTop();

	$('.js-parallax').each(function() {
		$(this).css('top', Math.round(((0 - scrollTop) * scale)) + 'px');
	});
}