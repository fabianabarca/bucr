let mapL1, mapL2, mapL1Back, mapStops0, mapStops1;

var busIcon = L.icon({
    iconUrl: 'img/b_azul_fondo_blanco.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
});

function initializeMapL1() {
    console.log("Initializing Map L1");
    mapL1 = L.map('L1-educacion').setView([9.94106128502, -84.0468330945], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapL1);

    fetch('geojson/geojsonL1.json')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, { style: { color: "#00C0F3" } }).addTo(mapL1);
        })
        .catch(error => console.error('Error loading geojsonL1.json:', error));

    // L.geoJSON(geojsonL1, { style: { color: "#00C0F3" } }).addTo(mapL1);
}

function initializeMapL1Back() {
    console.log("Initializing Map L1 Back");
    mapL1Back = L.map('L1-deportivas').setView([9.94106128502, -84.0468330945], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapL1Back);

    fetch('geojson/geojsonL1Back.json')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, { style: { color: "#00C0F3" } }).addTo(mapL1Back);
        })
        .catch(error => console.error('Error loading geojsonL1Back.json:', error));

    // L.geoJSON(geojsonL1Back, { style: { color: "#00C0F3" } }).addTo(mapL1Back);
}

function initializeMapL2() {
    console.log("Initializing Map L2");
    mapL2 = L.map('L2-educacion').setView([9.94106128502, -84.0468330945], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapL2);

    // Fetch the GeoJSON data for mapL2
    fetch('geojson/geojsonL2.json')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, { style: { color: "#005DA4" } }).addTo(mapL2);
        })
        .catch(error => console.error('Error loading geojsonL2.json:', error));

    // L.geoJSON(geojsonL2, { style: { color: "#005DA4" } }).addTo(mapL2);
}

function initializeMapStops0() {
    console.log("Initializing Map Stops 0");
    mapStops0 = L.map('mapa-paradas-0').setView([9.94106128502, -84.0468330945], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapStops0);

    fetch('geojson/geojsonStops0.json')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    // Create and return the custom marker for each stop
                    return L.marker(latlng, { icon: busIcon });  // Use your custom icon here
                },
                onEachFeature: function (feature, layer) {
                    // Create a popup for each bus stop
                    layer.bindPopup("<strong>" + feature.properties.stop_name + "</strong><br>" + feature.properties.stop_desc);
                }
            }).addTo(mapStops0);
            
        })
        .catch(error => console.error('Error loading geojson_stops_0.json:', error));

    // paradas sentido finca 1 a finca 3
    // var markerEducacion = L.marker([9.935610136323218, -84.04899295728595], {icon: busIcon}).addTo(mapStops0).bindPopup(popupEducacion);
    // var markerArtesPlasticas = L.marker([9.935501598287884, -84.05217559901489], {icon: busIcon}).addTo(mapStops0).bindPopup("Artes Plásticas");
    // var markerCienciasSalud = L.marker([9.93860832346218, -84.0517499001992], {icon: busIcon}).addTo(mapStops0).bindPopup("Ciencias de la Salud");
    // var markerMicrobiologia = L.marker([9.93832361909286, -84.04876049840074], {icon: busIcon}).addTo(mapStops0).bindPopup("Microbiología");
    // var markerLANAMME = L.marker([9.935903915437937, -84.04537504744147], {icon: busIcon}).addTo(mapStops0).bindPopup("LANAMME");
    // var markerIngenieria = L.marker([9.937467311441507, -84.04467644300775], {icon: busIcon}).addTo(mapStops0).bindPopup("Ingeniería");
    // var markerCienciasSociales = L.marker([9.938029607676915, -84.04237892478906], {icon: busIcon}).addTo(mapStops0).bindPopup("Ciencias Sociales");
    // var markerINIE = L.marker([9.939451647823137, -84.04307776266035], {icon: busIcon}).addTo(mapStops0).bindPopup("INIE");
    // var markerCICICA = L.marker([9.940155168862551, -84.04450675690296], {icon: busIcon}).addTo(mapStops0).bindPopup("CICICA");
    // var markerOBS = L.marker([9.943761220391434, -84.04468346245408], {icon: busIcon}).addTo(mapStops0).bindPopup("OBS");
    // var markerOdontologia = L.marker([9.946441050827925, -84.0451915613564], {icon: busIcon}).addTo(mapStops0).bindPopup("Odontología");
}

function initializeMapStops1() {
    console.log("Initializing Map Stops 1");
    mapStops1 = L.map('mapa-paradas-1').setView([9.94106128502, -84.0468330945], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapStops1);

    fetch('geojson/geojsonL1.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, { style: { color: "#00C0F3" } }).addTo(mapStops1);
    })
    .catch(error => console.error('Error loading geojsonL1.json:', error));

    // paradas sentido finca 3 a finca 1
    var markerOdontologia1 = L.marker([9.946529500847424, -84.04535458313804], {icon: busIcon}).addTo(mapStops1).bindPopup("Odontología");
    var markerEDUFI = L.marker([9.943381444081362, -84.04495180739714], {icon: busIcon}).addTo(mapStops1).bindPopup("EDUFI");
    var markerNutricion = L.marker([9.939134591559855, -84.04468654565294], {icon: busIcon}).addTo(mapStops1).bindPopup("Nutrición");
    var markerCIMARAuditorio = L.marker([9.938980381389706, -84.0436758508172], {icon: busIcon}).addTo(mapStops1).bindPopup("CIMAR / Auditorio");
    var markerCIMPA = L.marker([9.939472792042086, -84.042189216776], {icon: busIcon}).addTo(mapStops1).bindPopup("CIMPA");
    var markerCienciasSociales1 = L.marker([9.938130529026141, -84.04229551510366], {icon: busIcon}).addTo(mapStops1).bindPopup("Ciencias Sociales");
    var markerIngenieria1 = L.marker([9.937468669419962, -84.04501822768842], {icon: busIcon}).addTo(mapStops1).bindPopup("Ingeniería");
    var markerLANAMME1 = L.marker([9.93589305371453, -84.04546950911886], {icon: busIcon}).addTo(mapStops1).bindPopup("LANAMME");
    var markerEducacion1 = L.marker([9.935610136323218, -84.04899295728595], {icon: busIcon}).addTo(mapStops1).bindPopup("Educación");
    var markerArtesPlasticas1 = L.marker([9.935501598287884, -84.05217559901489], {icon: busIcon}).addTo(mapStops1).bindPopup("Artes Plásticas");
}


$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    const target = $(e.target).attr("aria-controls");
    console.log("Switched tab to:", target);

    if (target === 'l1-deportivas-tab-pane') {
        if (!mapL1) initializeMapL1();
        setTimeout(() => mapL1.invalidateSize(), 100);
    } else if (target === 'l2-deportivas-tab-pane') {
        if (!mapL2) initializeMapL2();
        setTimeout(() => mapL2.invalidateSize(), 100);
    } else if (target === 'l1-educacion-tab-pane') {
        if (!mapL1Back) initializeMapL1Back();
        setTimeout(() => mapL1Back.invalidateSize(), 100);
    }

    if (target === 'paradas-0-tab-pane') {
        if (!mapStops0) initializeMapStops0();
        setTimeout(() => mapStops0.invalidateSize(), 100);
    } else if (target === 'paradas-1-tab-pane') {
        if (!mapStops1) initializeMapStops1();
        setTimeout(() => mapStops1.invalidateSize(), 100);
    } 
});

document.addEventListener('DOMContentLoaded', function () {
    if (!mapL1) {
        initializeMapL1();
        setTimeout(() => mapL1.invalidateSize(), 100);
    }
    if (!mapStops0) {
        initializeMapStops0();
        setTimeout(() => mapStops0.invalidateSize(), 100);
    }
});
