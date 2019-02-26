require([
	"esri/Map", 
	"esri/views/MapView"
], function(
	Map,
	MapView
) {
	const map = new Map({
		basemap: "osm"
	});

	const view = new MapView({
		container: "viewDiv",
		map: map,
		zoom: 2,
		center: {
			latitude: 0,
			longitude: 0
		}
	});

	
							

});