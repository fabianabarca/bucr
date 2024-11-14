let mapL1, mapL2, mapL1Back;

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
});

document.addEventListener('DOMContentLoaded', function () {
    if (!mapL1) {
        initializeMapL1();
        setTimeout(() => mapL1.invalidateSize(), 100);
    }
});
