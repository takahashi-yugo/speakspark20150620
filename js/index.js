
;(function(window, document){
	var MAIN = function(){
		var _self   = this;
		_self.PARAM = {
			$ELE : new Object(),
			INT  : new Object()
		};
	};
	
	/* ----------------------------------------------------
	 * Init
	 * ------------------------------------------------- */
	MAIN.prototype.Init = function Init(){
		var _self = this;
		
		_self.PARAM.$ELE.scene1    = $('article section.scene1');

		_self.PARAM.INT.window     = new Object();
		_self.PARAM.INT.document   = new Object();

		Main.Resize();
		Main.MV();
		$(window).resize(function(){Main.Resize();});
		
	};
	/* ----------------------------------------------------
	 * Resize
	 * ------------------------------------------------- */
	MAIN.prototype.Resize = function Resize(){
		var _self = this;

		_self.PARAM.INT.window.width  = $(window).width();
		_self.PARAM.INT.window.height = $(window).height();
		_self.PARAM.INT.document.width  = $(document).width();
		_self.PARAM.INT.document.height = $(document).height();

		//$('.scene1').height(_self.PARAM.INT.window.height)
	};
	/* ----------------------------------------------------
	 * MV
	 * ------------------------------------------------- */
	MAIN.prototype.MV = function MV(){
		var _self = this;
		var count = 0;
		var total = 3;
		var target = $('.scene1 ul');

		setInterval(function(){
			target.find('li').eq(count).animate({'opacity':0},500,'linear',function(){
				$(this).css({'z-index':1});
			});
			if(count == total){
				count = 0;
			}else{
				count++;
			}
			target.find('li').eq(count).animate({'opacity':1,'z-index':10},500,'linear',function(){
				$(this).css({'z-index':5});
			});
		},2000);


		
			

		

		$('.scene1').click(function(){
			$('#main_message1').fadeOut();
			setTimeout(function(){
				$('#main_message2').fadeIn();
			},1000);
		});
	};
	window.MAIN = MAIN;
})(window, document);

var Main = new MAIN();
$(function(){
	Main.Init();
});