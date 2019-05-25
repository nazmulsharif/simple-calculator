$(document).ready(function(){
	$('.my-acc').accordion();
});
$(document).ready(function(){
	$("form").submit(function(){
			alert("hello");

		});
});
$(document).ready(function(){
	$('.box').owlCarousel({
		items      : 1,
		autoplay   :true,
		loop		: true,
		mouseDrag   :true,
		nav			:true,
		navText		:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		animateIn	: 'fadeIn',
		animateOut	: 'fadeOut',
		autoplayTimeout   : 2000,
	});
});

$(document).ready(function(){
	$(".tabs").tabs();
});
$(document).ready(function(){
	$('i').click(function(){
		$('.search-area input').fadeToggle();
	})
});
$(document).ready(function(){
		var student  = ['Roni','nazmul','sharif','shamim raja','choton raja','bondho','himel','Faisal','Habib','Ynus Ali','Asis Bir','Rasel','Arafat','','Sabbir','Karim','Sabuj', 'Hanif'];

		$('.search-area input').autocomplete({
		source : student
		});
});
/*sign page*/
	$(document).ready(function(){
		$('input#uname').keyup(function(){
			$('p#name').html("welcome, "+$(this).val()).css('color','black');
			var name =$('input#uname').val();
			if(name==""){
				$('p#name').html("Please,Write down your name").css('color','red');
				$('input#uname').css('border','1px solid red');
			}
			else
				$('input#uname').css('border','1px solid  green').css('color','black');

	
		});
	});
	$(document).ready(function(){
		$('input#pass').keyup(function(){
			$('p#pass').html("password ok").css('color','black');
			var pass =$('input#pass').val();
			var len =pass.length;
			if(pass==""){
				$('p#pass').html("password does not empty").css('color','red');

			}
			else if(len<6||len>10){
				$('p#pass').html("password must contain 6 to 10 characters Long").css('color','red');
				$('input#pass').css('border','1px solid red');
			}
			else{
				$('input#pass').css('border','1px solid black');
				$('p#pass').html("password ok").css('color','black');
			}
		});
		$('input#conpass').keyup(function(){
			$('p#copass').html("Please confirm password").css('color','black');
			var copass =$('input#conpass').val();
			var pass=$('input#pass').val();
			if(pass==""){
					$('p#pass').html("pasword does not empty").css('color','red');
					
				}
			else if(pass==copass){
				$('input#conpass').css('border','1px solid green');
				$('p#copass').html("password match").css('color','black');
			}
			else{
				$('input#conpass').css('border','1px solid red');
				$('p#copass').html("password does not match").css('color','red');
			}

		});
		$('form#logform .btn').click(function(){
				var copass =$('input#conpass').val();
				var pass=$('input#pass').val();
				var name=$('input#uname').val();
				var len =pass.length;
				if(name==""||copass==""||pass==""){
					$('form#logform h2').text("Please fill up all input field").css("color",'red');
				}
				else if(len<6||len>10){
					$('form#logform h2').text("Please enter valid password").css("color",'red');

				}
				else if(pass!=copass){
					$('form#logform h2').text("Please confirm password").css("color",'red');
				}
				else{
					$('form#logform h2').text("All ok").css('color','#ddd').css('background-color','purple');
				}
			
		});
	});
	$(document).ready(function(){
		$('.tabs').tabs();
	});

/*sign page*/

