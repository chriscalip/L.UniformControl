/**
 * Created: chriscalip Date: 02/26/14 Time: 3:20 PM
 */
L.Control.Uniform = L.Control.Layers.extend({
  renderUniformControl: function () {
    jQuery.each( this._form, function( key, form ) {
        jQuery(form).uniform();
    });
  },
});
L.control.UniForm = function (baseLayers, overlays, options) {
  return new L.Control.Uniform(baseLayers, overlays, options);
};