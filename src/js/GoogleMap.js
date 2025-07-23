function initMap() {
    const skipton = { lat: 53.9614, lng: -2.0175 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: skipton,
        zoom: 13,
        styles: [
            {
                elementType: 'geometry',
                stylers: [{ color: '#1d2c4d' }],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{ color: '#8ec3b9' }],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#1a3646' }],
            },
            {
                featureType: 'administrative.country',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#4b6878' }],
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#0a2433' }],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#11243b' }],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#304a7d' }],
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }],
            },
        ],
    });

    new google.maps.Marker({
        position: skipton,
        map: map,
        title: 'Skipton',
    });
}
