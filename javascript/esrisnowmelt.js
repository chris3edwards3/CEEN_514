require([
	"esri/Map",
	"esri/views/MapView",
	"esri/Graphic", // This part thanks to Kyler Ashby
	"esri/layers/MapImageLayer",
	"esri/layers/support/Sublayer"
], function(
	Map,
	MapView,
	Graphic,
	MapImageLayer,
	Sublayer
) {
	const map = new Map({
		basemap: "osm"
	});

	const view = new MapView({
		container: "viewDiv",
		map: map,
		zoom: 7,
		center: {
			latitude: 39.5,
			longitude: -111.5
		}
	});

    var layer = new MapImageLayer({
        url: "http://geoserver2.byu.edu/arcgis/rest/services/3_Toed_Sloth/Snowmelt/MapServer"
    });
    map.add(layer);  // adds the layer to the map
});
