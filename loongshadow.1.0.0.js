/*
*	Plugin : LoongShadow
*	Version : 1.0.0
*	Date : 2013/07/29
*	Author : InDaCloud / Tom Brehm
*	Site : http://loongshadow.indacloud.fr
*	Git : https://github.com/indacloud/loongshadow
*	Licence : GNU GENERAL PUBLIC LICENSE Version 3 http://www.gnu.org/licenses/gpl.html
*/

(function( $ ) {

/*
	Creating the widget
*/
$.widget( "nmk.loongshadow", {
   	/*
		Default options
   	*/     
    options: {
	    rotation : 45,
	    lenght : 200,
	    baseOpacity : 0.3,
	    darken : 50,
	    fadeIn : false,
	    fadeTime : 300
	},
 	shadow : null,
 	/*
		Construct function
   	*/  
    _create: function(options) {
        var $that = $(this);
        this.options = $.extend( this.options, options );
		
		var $shadow = $('<div />');
		$shadow.addClass ("loongshadow");
		this.shadow = $shadow;
		
		// Constant CSS values
		$shadow.css({
			display : this.options.fadeIn ? 'none' : 'block',
			position : 'absolute',
			zIndex : -1
		});

		// call the refresh function a first time
		this.refresh();

		// append the shadow to the <body>
		$(document.body).append($shadow);
		
		if(this.options.fadeIn)
			$shadow.fadeIn(this.options.fadeTime);
    },
 
    /*
		Get or set options
    */
    option: function( opt, value ) {
 
        // No value passed, act as a getter.
        if ( value === undefined ) {
 
            return this.options[opt];
 
        // Value passed, act as a setter.
        } else {
 
            this.options[opt] = value;
            this.refresh(); 			
        }
 
    },
    /*
    	Creates or refreshes the shadow css
    */
    refresh : function(){
    	var $shadow = this.shadow;
    	
    	// variable definition
    	var top = this.element.offset().top;
		var left = this.element.offset().left;
		var diag = Math.sqrt( Math.pow(this.element.outerHeight(), 2) + Math.pow(this.element.outerWidth(), 2) );
		var scale = diag / this.element.outerHeight();
		
		// Get the rotation angle
		if(this.options.rotation > 0 && this.options.rotation <= 90)
			var rotation = 90 - (180 * (Math.acos(this.element.outerWidth() / diag))) / Math.PI;		
		else if(this.options.rotation > 90 && this.options.rotation <= 180)
			var rotation = -90 + (180 * (Math.acos(this.element.outerWidth() / diag))) / Math.PI;	
		else if(this.options.rotation > 180 && this.options.rotation <= 270)	
			var rotation = 90-(180 * (Math.acos(this.element.outerWidth() / diag))) / Math.PI;
		else if(this.options.rotation > 270 && this.options.rotation <= 360)	
			var rotation = - 90 + (180 * (Math.acos(this.element.outerWidth() / diag))) / Math.PI;

		// console.log('this.options rotation : '+this.options.rotation);
		// console.log('rotation : '+rotation);
		// console.log('scale : ' + scale);

		// Get the skew angle
		skewAngle = (this.options.rotation - rotation);
		if(skewAngle < 0.000001 && skewAngle > 0.00001)
			skewAngle = 0;
		// console.log('skew : ' + skewAngle);

		// Call the private function for start color
		var backgroundColor = this._darkenColor(this.element.css('background-color'), this.options.darken);

		// Setting dimensions and size
		$shadow.css({
			height : this.element.outerHeight()+'px',
			width : (this.options.lenght)+'px',
			top : top+ 'px',
			left : left+ 'px'			
		});


		// 	Setting the gradient
		if((this.options.rotation >=0 && this.options.rotation<= 90)||(this.options.rotation > 270 && this.options.rotation <= 360)){
			$shadow.css('background', '-webkit-gradient(linear, left top, right top, color-stop(0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+')), color-stop(100%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0)))');
			$shadow.css('background', '-webkit-linear-gradient(left, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)');
			$shadow.css('background', '-moz-linear-gradient(left, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)');
			$shadow.css('background', '-o-linear-gradient(left, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)');
			$shadow.css('background', '-ms-linear-gradient(left, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)');
			$shadow.css('background', 'linear-gradient(to right, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)')
		}
		else if((this.options.rotation > 90 && this.options.rotation <= 180)||(this.options.rotation > 180 && this.options.rotation <= 270)){
			$shadow.css('background', '-webkit-gradient(linear, right top, left top, color-stop(0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+')), color-stop(100%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0)))');
			$shadow.css('background', '-webkit-linear-gradient(right, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)');
			$shadow.css('background', '-moz-linear-gradient(right, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)');
			$shadow.css('background', '-o-linear-gradient(right, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)');
			$shadow.css('background', '-ms-linear-gradient(right, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)');
			$shadow.css('background', 'linear-gradient(to left, rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+','+this.options.baseOpacity+') 0%,rgba('+backgroundColor.r+', '+backgroundColor.g+', '+backgroundColor.b+',0) 100%)')
		}
		

		// Setting the transformation
		var transform = 'rotate('+rotation+'deg) skewY('+skewAngle+'deg) scaleY('+scale+')';
		if(this.options.rotation > 90 && this.options.rotation <= 270)
		 	transform = 'translateX('+ (this.element.outerWidth() - this.options.lenght)+'px) '+transform;
		
		$shadow.css('transform', transform);
		$shadow.css('-webkit-transform', transform);
		$shadow.css('-moz-transform', transform);
		$shadow.css('-o-transform', transform);
		$shadow.css('-ms-transform', transform);

		// Set the transformation origin
		if(this.options.rotation >=0 && this.options.rotation<= 90)
			var origin = '0 100%';
		else if(this.options.rotation > 90 && this.options.rotation <= 180)
			var origin = '100% 100%';
		else if(this.options.rotation > 180 && this.options.rotation <= 270)
			var origin = '100% 0';
		else if(this.options.rotation > 270 && this.options.rotation <= 360)
			var origin = '0 0';

		$shadow.css('transform-origin', origin);
		$shadow.css('-webkit-transform-origin', origin);
		$shadow.css('-moz-transform-origin', origin);
		$shadow.css('-o-transform-origin', origin);
		$shadow.css('-ms-transform-origin', origin);
    },
    /*
		Destroy the shadows
    */
    destroy: function() {
        $('.loongshadow').remove();

        // Call the base destroy function.
        $.Widget.prototype.destroy.call( this );
    },
 	/*
		Private function : darken the original color
 	*/
    _darkenColor: function(originColor, pct){
		if(!pct)
			pct=1;
		
		var color = originColor.match(/[0-9\.]+/g);

		var backgroundColor = {
			r : Math.round(color[0] - (color[0]*pct/100)),
			g : Math.round(color[1] - (color[1]*pct/100)),
			b : Math.round(color[2] - (color[2]*pct/100))
		};

		return backgroundColor;
	}
 
});

}( jQuery ));