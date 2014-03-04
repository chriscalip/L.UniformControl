/**
 * Created: chriscalip Date: 02/26/14 Time: 3:20 PM
 */

L.Control.PrettyCheckableLayers = L.Control.Layers.extend({

  onAdd: function (map) {
    var container = L.Control.Layers.prototype.onAdd.call(this, map);
    return container;
  },

  _addItem: function (obj) {
    var label = document.createElement('label'),
        checked = this._map.hasLayer(obj.layer),
        input;

    if (obj.overlay) {
      input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'leaflet-control-layers-selector';
      input.defaultChecked = checked;
      input.setAttribute('data-label', obj.name);
      input.setAttribute('data-color', 'red');
    } else {
      input = this._createRadioElement('leaflet-base-layers', checked);
    }

    input.layerId = L.stamp(obj.layer);

    // start pcc specific
    input.id = 'pcc-' + input.layerId;
    // end pcc specific

    L.DomEvent.on(input, 'click', this._onInputClick, this);

    // var name = document.createElement('span');
    // name.innerHTML = ' ' + obj.name;

    label.appendChild(input);
    // label.appendChild(name);

    var container = obj.overlay ? this._overlaysList : this._baseLayersList;
    container.appendChild(label);

    return label;
  },

  renderPrettyCheckable: function () {
    jQuery.each( this._form, function( key, form ) {
      jQuery(form).prettyCheckable();
      var newContainer = jQuery(form).parent();
      newContainer.on('click', '*', function (event) {
        jQuery(this).siblings(':input').click();
      });
    });
  },

})

L.control.prettyCheckableLayers = function (baseLayers, overlays, options) {
  return new L.Control.PrettyCheckableLayers(baseLayers, overlays, options)
}