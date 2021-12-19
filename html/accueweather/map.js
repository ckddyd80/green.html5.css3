var mapContainer = document.getElementById('map'), 
mapOption = {
    center: new kakao.maps.LatLng(37.44871224480417, 126.6985289391815),
    level: 3
}

// 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다.
var map = new kakao.maps.Map(mapContainer, mapOption);