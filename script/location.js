var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5746932, 126.9789672),
        level: 3 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var markerPosition  = new kakao.maps.LatLng(37.5746932, 126.9789672); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

//컨트롤
// var mapTypeControl = new kakao.maps.MapTypeControl();

// map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// var zoomControl = new kakao.maps.ZoomControl();
// map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
