function initMap() {
	// *** This section defines the center of the map. ***
	
	var map = new google.maps.Map(document.getElementById('myMap'), {
		center: {lat: 40.323, lng: -111.698},
		zoom: 15
		
	});
	
	// *** This section is for Markers and Popups ***
	
	// Del Taco
	var DelTacoWindow = new google.maps.InfoWindow({
		content: '<h1>Del Taco</h1>'+
		'<p>This was one of our favorite places to eat growing up. Gotta get those chicken tacos.</p>',
		maxWidth: 300
	});
	var DelTaco = new google.maps.Marker({
		position: {lat: 40.326285, lng: -111.708478},
		map: map,
		title: "DelTaco",
	});
	DelTaco.addListener('click', function() {
		DelTacoWindow.open(map, DelTaco);
	});
	
	// first House
	var firstHouseWindow = new google.maps.InfoWindow({
		content: '<h1>My First House</h1>'+
		'<p>My parents lived here when I was born. We moved around the corner when I was in 5th grade. We did not miss the swamp cooler.</p>',
		maxWidth: 300
	});
	var firstHouse = new google.maps.Marker({
		position: {lat: 40.325583, lng: -111.704188},
		map: map,
		title: "firstHouse"
	});
	firstHouse.addListener('click', function() {
		firstHouseWindow.open(map, firstHouse);
	});
	
	// next House
	var nextHouseWindow = new google.maps.InfoWindow({
		content: '<h1>My Second House</h1>'+
		'<p>We moved here to stay in the same ward. The basketball court was sloped, so we played with the hoop at 9.5 ft to make it more realistic. The foosball table in the basement was a highlight. My parents still live here.</p>',
		maxWidth: 300
	});
	var nextHouse = new google.maps.Marker({
		position: {lat: 40.324571, lng: -111.702950},
		map: map,
		title: "nextHouse"
	});
	nextHouse.addListener('click', function() {
		nextHouseWindow.open(map, nextHouse);
	});
	
	// Windsor Elementary
	var elementarySchoolWindow = new google.maps.InfoWindow({
		content: '<h1>Windsor Elementary</h1>'+
		'<p>I went to school here from Kindergarten to 6th grade. There is a cool bomb shelter built underneath from the Cold War days.</p>',
		maxWidth: 300
	});
	var elementarySchool = new google.maps.Marker({
		position: {lat: 40.321221, lng: -111.697095},
		map: map,
		title: "elementarySchool"
	});
	elementarySchool.addListener('click', function() {
		elementarySchoolWindow.open(map, elementarySchool);
	});
	
	// Timpanogos High
	var highSchoolWindow = new google.maps.InfoWindow({
		content: '<h1>Timpanogos High School</h1>'+
		'<p>This was a great high school. I took some cool drafting classes and played on the basketball team. The Timberwolves was a cool mascot.</p>',
		maxWidth: 300
	});
	var highSchool = new google.maps.Marker({
		position: {lat: 40.322897, lng: -111.691525},
		map: map,
		title: "highSchool"
	});
	highSchool.addListener('click', function() {
		highSchoolWindow.open(map, highSchool);
	});
		
	// Church
	var churchWindow = new google.maps.InfoWindow({
		content: '<h1>Church</h1>'+
		'<p>My ward was assigned to this Stake Center my whole life. When I was a kid, the carpet gym floor was replaced with wood. The steeple is also new.</p>',
		maxWidth: 300
	});
	var church = new google.maps.Marker({
		position: {lat: 40.326111, lng: -111.694104},
		map: map,
		title: "church"
	});
	church.addListener('click', function() {
		churchWindow.open(map, church);
	});
		
	// Tennis Courts
	var tennisWindow = new google.maps.InfoWindow({
		content: '<h1>Windsor Tennis Courts</h1>'+
		'<p>One of the best courts around. Most of the time it is empty, the surface is high-quality, and the lights work swell. This is where I almost became Roger Federer--Orem version.</p>',
		maxWidth: 300
	});
	var tennis = new google.maps.Marker({
		position: {lat: 40.320422, lng: -111.699654},
		map: map,
		title: "Tennis"
	});
	tennis.addListener('click', function() {
		tennisWindow.open(map, tennis);
	});			
}