require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/MapImageLayer",
], function(
	Map,
	MapView,
	MapImageLayer
) {
	// Add the map and specify the basemap.
	const map = new Map({
		basemap: "osm"
	});

	// This is the map view. See the css file for styling.
	const view = new MapView({
		container: "viewDiv",
		map: map,
		zoom: 7,
		center: {
			latitude: 39.5,
			longitude: -111.5
		}
	});

    // This is the layer. In this case, the snowmelt raster and watershed shapefile are on the same layer.
    var layer = new MapImageLayer({
        url: "http://geoserver2.byu.edu/arcgis/rest/services/3_Toed_Sloth/Snowmelt/MapServer"
    });
    map.add(layer);  // adds the layer to the map
});
