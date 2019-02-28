require([
	"esri/Map",
	"esri/views/MapView",
	//"esri/Graphic", // I figured out this part thanks to Kyler Ashby's github
	"esri/layers/MapImageLayer",
], function(
	Map,
	MapView,
	// Graphic,
	MapImageLayer
) {
	// Add the map, specify the basemap.
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

    // This is the layer. In this case, the Snowmelt Raster and Watershed Shapefiles are on the same layer.
    var layer = new MapImageLayer({
        url: "http://geoserver2.byu.edu/arcgis/rest/services/3_Toed_Sloth/Snowmelt/MapServer"
    });
    map.add(layer);  // adds the layer to the map
});
