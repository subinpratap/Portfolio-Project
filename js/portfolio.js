$(document).ready(function() {

	var id;

	$(".menu").click(function(){
	
		if ( $(".content-onclick-data").hasClass( "active" ) ) 
		{
			$(".content-onclick-data").removeClass("active");
			$(".nav-item").removeClass("active");
			$(".svg-left").removeClass(id);
			$(".svg-right").removeClass(id);
		}		
		else if ( $("#"+id).hasClass( "show" ) ){
			$(".content-onclick-data").removeClass("active");
			$(".nav-item").removeClass("active");
			$(".svg-left").removeClass(id);
			$(".svg-right").removeClass(id);
		}
		
		else{
			$(".content-onclick-data").addClass("active");
			$(".nav-item").addClass("active");
		}
		
		//$(".content-onclick-data").toggleClass("active");
		//$(".nav-item").toggleClass("active");
		$(this).toggleClass('open');
		
		if ( $("#"+id).hasClass( "show" ) ) {
			$("#"+id).removeClass("show");
			$(".svg-left").removeClass(id);
			$(".svg-right").removeClass(id);
		}

	});
	
	$(".close-button").click(function(){
	
		$(".svg-left").removeClass(id);
		$(".svg-right").removeClass(id);	
	
		$("#overlay ul li").addClass("show");//for overlay
		$("#overlay").addClass("show");//for overlay
		setTimeout(function(){ 
			//$("#overlay").css('z-index','-11');
			$("#overlay ul li").removeClass("show");
			$("#overlay").removeClass("show");
			},2800);
		
		
		
		$(".content-onclick-data").addClass("active"); //for nav items
		$(".nav-item").addClass("active"); //for nav items
		
		$("#"+id).removeClass('show');
		
	});
	
	$(".nav-item").click(function(){
		$(".content-onclick-data").removeClass("active");
		$(".nav-item").removeClass("active");
		
		id = $(this).data('target'); 
		
		$("#"+id).toggleClass('show');
		
		$(".svg-left").toggleClass(id);
		$(".svg-right").toggleClass(id);
		
		if(id==="#skills-expand"){
			$(".skill-overlay").toggleClass('shows');
		}
		
		
		$("#overlay ul li").addClass("show");
		$("#overlay").addClass("show");
		//$("#overlay").css('z-index','2 !important');
		setTimeout(function(){ 
			//$("#overlay").css('z-index','-11');
			$("#overlay ul li").removeClass("show");
			$("#overlay").removeClass("show");
			},2800);
		
	});
	
	

	
	
	$('.phone').hover(handlerIn, handlerOut);
	
	function handlerIn() {
		$('.phone-number').addClass('show');	
	}

	function handlerOut() {
		$('.phone-number').removeClass('show');
	}
	
	$("#ilike-stuff").children().css({"display":"none"});	
	
	setInterval(function(){
		$("#ilike-stuff")
		.children(':first-child')
		.animate({'letter-spacing': '8px'}, 1000)
		.fadeOut(300)
		.next()
		.css({'letter-spacing': '1px'})
		.fadeIn(2000)
		.end()
		.appendTo('#ilike-stuff');
	}, 4000);
	
	new WOW().init();
	
});