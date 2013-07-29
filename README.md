LoongShadow
===========

A jQuery plugin to create long shadows on elements

===========

See the DEMO : <a href="http://loongshadow.indacloud.fr">http://loongshadow.indacloud.fr</a>

===========

Installation :

You only need a recent version of jQuery and the plugiin file.

<pre>&lt;script type="text/javascript" src="js/jquery-ui-1.10.3.custom.min.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="js/loongshadow.0.0.2.js"&gt;&lt;/script&gt;
</pre>

To create the shadows, add a class to the target elements like <pre>&lt;div class="shadowed"&gt;</pre>

And call the plugin in the jQuery(document).ready function like this :

<pre>
$(document).ready(function(){
	// create the shadows !
	$('.shadowed').loongshadow({
	  lenght : 200,
	  fadeIn : true,
	  fadeTime : 2000
	});

	// the scrollbars sometime appear and mess it up. Just call the refresh method.
	$('.shadowed').loongshadow('refresh');
});
</pre>