var map = L.map('mapid').setView([53.815101 , 	-1.562214], 13);


//L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=c4fdde49b9a14b189c0fc231906018e5', {
//attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//apikey: 'c4fdde49b9a14b189c0fc231906018e5'}).addTo(map);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var aubIcon = L.icon({
  iconUrl: 'aub.png',
  iconSize:[50, 50]
});
L.marker([53.815101 , 	-1.562214] ,{icon: aubIcon, title: 'LS6 Cafe'}).addTo(map).bindPopup("LS6 Cafe \n W: http://www.sevenleeds.co.uk");
L.marker([53.828075 , 	-1.537715],{title: 'Seven Arts Cafe',icon: aubIcon}).addTo(map).bindPopup("Seven Arts Cafe");
//L.marker([53.815101 , 	-1.562214], {icon: aubIcon}).addTo(map).bindPopup("LS6 Cafe");
