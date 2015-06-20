
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
	};
	/* ----------------------------------------------------
	 * MV
	 * ------------------------------------------------- */
	MAIN.prototype.MV = function MV(){
		var _self = this;

	};
	window.MAIN = MAIN;
})(window, document);

var Main = new MAIN();
$(function(){
	Main.Init();
});