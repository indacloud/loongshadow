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

============

Options :

<table>
	<tr>
		<th>Option</th>
		<th>Description</th>
		<th>Default</th>
	</tr>
	<tr>
		<td>rotation</td>
		<td>(int) The angle of the shadow. 0 is to the right. (between 0 and 360)</td>
		<td>45</td>
	</tr>
	<tr>
		<td>lenght</td>
		<td>(int) The lenght of the shadow</td>
		<td>200</td>
	</tr>
	<tr>
		<td>baseOpacity</td>
		<td>(float) The shadow opacity at the start (between 0.0 and 1.0)</td>
		<td>0.3</td>
	</tr>
	<tr>
		<td>darken</td>
		<td>(int) How much should the plugin darken the start color ? (between 0 and 100)</td>
		<td>50</td>
	</tr>
	<tr>
		<td>fadeIn</td>
		<td>(boolean) Should the shadow fade in when displayed the first time ? (true or false)</td>
		<td>false</td>
	</tr>
	<tr>
		<td>fadeTime</td>
		<td>(int) Duration of the fadeIn en millisecons when fadeIn is set to true.</td>
	</tr>
</table>