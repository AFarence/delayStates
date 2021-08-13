mapboxgl.accessToken = 'pk.eyJ1IjoiYWZhcmVuY2UiLCJhIjoiY2tpaWNmZXNrMGF1bzJzcW1uMGRiZnRpbCJ9.uopR-f-9VC4hwT7aEGQpxg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/afarence/ckry8lla501k217s132e0j3pc',
    zoom: 3.25,
    center: [-95.45, 40.725]
});
map.on('load', function(){
    
    map.addLayer({
        'id':'delaydata',
        'type':'fill',
        'source': {
            'type':'geojson',
            'data':'delay.geojson'
        },
        'paint':{
            'fill-color':'#800080',
            'fill-opacity': 0.5

        }
    }, );
})

map.on('click', 'delaydata', function (e) {
    var districtName = e.features[0].properties.NAME_x;
    var session1_avg_delay = e.features[0].properties.session1_avg_delay;
    var session2_avg_delay = e.features[0].properties.session2_avg_delay;
    var session3_avg_delay = e.features[0].properties.session3_avg_delay;
    var session4_avg_delay = e.features[0].properties.session4_avg_delay;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h2>' + districtName + '</h2>' +  '<h3><hr>' 
        + '<br>' + '<p><b>Most Recent Average Session Delay:</b> ' + session4_avg_delay + ' Days</p>'
        + '<br>' + '<p><b>Second Recent Average Session Delay:</b> ' + session3_avg_delay + ' Days</p>'
        + '<br>' + '<p><b>Third Recent Average Session Delay:</b> ' + session2_avg_delay + ' Days</p>'                                                                                                                      
        + '<br>' + '<p><b>Fourth Recent Average Session Delay:</b> ' + session1_avg_delay +  ' Days</p>' )
        .addTo(map);
});
map.on('mouseenter', 'delaydata', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'delaydata', function () {
    map.getCanvas().style.cursor = '';
});
