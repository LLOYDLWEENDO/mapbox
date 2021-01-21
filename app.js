	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'ADD YOUR API KEY HERE';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [27.4306751716734,
    -14.0049082837326],
zoom: 5
});
 
map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
 
// limit results to Australia
countries: 'zm',
 
// further limit results to the geographic bounds representing the region of
// New South Wales
bbox: [21.99996,-18.0764899401506,
    33.7027859987275,
    -8.24150701955748],
 
// apply a client side filter to further limit results to those strictly within
// the New South Wales region
filter: function (item) {
// returns true if item contains New South Wales region
return item.context
.map(function (i) {
// id is in the form {index}.{id} per https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
// this example attempts to find the `region` named `New South Wales`
return (
i.id.split('.').shift() === 'region' &&
i.text === 'Zambia'
);
})
.reduce(function (acc, cur) {
return acc || cur;
});
},
mapboxgl: mapboxgl
})
);