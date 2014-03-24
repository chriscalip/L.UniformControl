L.UniformControl
=================

Leaflet layer control with stylable checkboxes and radio buttons.

Styable through uniform.js http://uniformjs.com/

Form elements with jQuery. Now with HTML5 attributes!

Version 1.0

Works well with Leaflet 0.7+

Works well with jQuery 1.6+

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)

Online Demo Provided Here: http://chriscalip.github.io/L.UniformControl/

Screenshots : Leaflet Control before styling and after styling
<img src="http://chriscalip.github.io/L.UniformControl/before-and-after-screenshot.png" alt="before-and-after" />



 [Christopher Calip]: https://github.com/chriscalip
 [online demo page]: http://chriscalip.github.io/L.UniformControl/
 [source code]: https://github.com/chriscalip/L.UniformControl "Leaflet GitHub repository"
 [hosted on GitHub]: https://github.com/chriscalip/L.UniformControl

Installation
------------

Installation of Uniform is quite simple. First, make sure you have jQuery installed. Then you’ll want to link to the jquery.uniform.js file and uniform.default.css in the head area of your page.
Second, make sure you have Leaflet installed. Then you'll want to link to the UniformControl.min.js/UniformControl.js in the head area of the page.

Here's what your `<head>` tag contents should probably contain:

```html
  <!-- Make sure your CSS file is listed before jQuery -->
	<link rel="stylesheet" href="uniform.default.css" media="screen" />
  <link rel="stylesheet" href="//cdn.leafletjs.com/leaflet-0.7/leaflet.css"/>
  <script src="//cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
	<script src="jquery.uniform.js"></script>
	<script src="UniformControl.js"></script>
  <script>
    / **
    * standard leaflet code.
    ** /
    // initialize stylable leaflet control widget
    var control = L.control.UniForm(null, overlayMaps, {
            collapsed: false,
            position: 'topright'
        }
    );
    // add control widget to map and html dom.
    control.addTo(map);
    // update the control widget to the specific theme.
    control.renderUniformControl();
  </script>
```

This relies upon a copy of jquery.uniform.js, uniform.default.css, UniformControl.js  and the various images all being available on your webserver.
