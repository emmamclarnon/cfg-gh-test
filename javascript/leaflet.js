var map = L.map('mapid').setView([53.815101 , 	-1.562214], 12);

    L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=c4fdde49b9a14b189c0fc231906018e5', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	apikey: 'c4fdde49b9a14b189c0fc231906018e5'}).addTo(map);

var aubIcon = L.icon({
    iconUrl: 'aub.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //hadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([53.815101 , 	-1.562214] ,{icon: aubIcon, title: 'LS6 Cafe'}).addTo(map).bindPopup("LS6 Cafe");
L.marker([53.828075 , 	-1.537715],{title: 'Seven Arts Cafe',icon: aubIcon}).addTo(map).bindPopup("Seven Arts Cafe");
//L.marker([53.815101 , 	-1.562214], {icon: aubIcon}).addTo(map).bindPopup("LS6 Cafe");
