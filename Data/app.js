/*
  async function initMap() {
    try {
      const response = await fetch('/api/vehicle'); // Fetch from the relative path
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
  
      const map = L.map('map').setView([data[0].latitude, data[0].longitude], 14);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  
      const vehicleMarker = L.marker([data[0].latitude, data[0].longitude], {
        icon: L.icon({
          iconUrl: 'https://img.icons8.com/color/48/000000/car.png',
          iconSize: [48, 48],
          iconAnchor: [24, 24]
        })
      }).addTo(map);
  
      const routeCoordinates = data.map(point => [point.latitude, point.longitude]);
      const routePath = L.polyline(routeCoordinates, { color: 'red' }).addTo(map);
  
      updateVehiclePosition(data, vehicleMarker, map);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  function updateVehiclePosition(data, vehicleMarker, map) {
    let index = 0;
    setInterval(() => {
      if (index < data.length) {
        const newPosition = [data[index].latitude, data[index].longitude];
        vehicleMarker.setLatLng(newPosition);
        map.panTo(newPosition);
        index++;
      }
    }, 5000); // Update every 5 seconds
  }
  
  window.onload = initMap;*/
  
  /*
  
async function initMap() {
  console.log('initMap called');
  
  const map = L.map('map').setView([0, 0], 2);  // Center at (0,0) for testing

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  console.log('Map initialized');
}

window.onload = initMap;
*/

console.log('app.js loaded');

async function initMap() {
  console.log('initMap called');
  
  try {
    const response = await fetch('/api/vehicle');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log('Data fetched:', data);

    const map = L.map('map').setView([data[0].latitude, data[0].longitude], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const vehicleMarker = L.marker([data[0].latitude, data[0].longitude], {
      icon: L.icon({
        iconUrl: 'https://img.icons8.com/color/48/000000/car.png',
        iconSize: [48, 48],
        iconAnchor: [24, 24]
      })
    }).addTo(map);

    const routeCoordinates = data.map(point => [point.latitude, point.longitude]);
    const routePath = L.polyline(routeCoordinates, { color: 'red' }).addTo(map);

    updateVehiclePosition(data, vehicleMarker, map);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function updateVehiclePosition(data, vehicleMarker, map) {
  let index = 0;
  setInterval(() => {
    if (index < data.length) {
      const newPosition = [data[index].latitude, data[index].longitude];
      vehicleMarker.setLatLng(newPosition);
      map.panTo(newPosition);
      index++;
    }
  }, 5000); // Update every 5 seconds
}

window.onload = initMap;

  
