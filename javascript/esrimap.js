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

	let lat_list = [ 
		14.134845,
		-0.741182, 
		-40.929923, 
		-25.690871, 
		58.554978, 
		45.976577, 
		60.963107,
		48.770959,
		-17.925976,
		38.891225	
	];
	
	let lon_list = [ 
		99.322817,
		-90.306385,
		172.970942,
		-54.440813,
		-155.791548,
		7.658461,
		6.967813,
		-121.298461,
		25.857526,
		-77.026066				
	];
	
	let name_list = [
		"ElephantsWorld Wang Dong, Thailand", 
		"Galapagos Islands, Ecuador", 
		"Abel Tasman National Park, New Zealand", 
		"Iguazu Falls, Argentina", 
		"Katmai National Park, AK", 
		"Matterhorn, Switzerland", 
		"Nærøyfjord Aurland, Norway", 
		"North Cascades National Park, WA", 
		"Victoria Falls, Zimbabwe", 
		"Washington DC"
	];
							
	for(let i = 0; i < lon_list.length; i++){
		
		view.graphics.add({
			symbol: {
				type: "text",
				color: "#2f5799",
				text: "\ue613",
				font: {
					size: 20,
					family: "CalciteWebCoreIcons"
				}
			},
			geometry: {
				type: "point",
				longitude: lon_list[i],
				latitude: lat_list[i]
			},
			popupTemplate: {
				title: name_list[i],
			}
		});
	};
});