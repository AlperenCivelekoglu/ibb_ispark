import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import "./App.css";

export default function App() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // API'ye GET isteği yapıyoruz
    fetch("http://localhost:8000/api/parkingspot/")
      .then((response) => response.json())
      .then((data) => {
        // JSON'dan veriyi alıp, state'e atıyoruz
        const fetchedMarkers = data.features.map((feature) => ({
          geocode: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]], // LatLng sırasını düzeltelim
          popUp: feature.properties.park_name // Pop-up'da park_name gösterebiliriz, ya da başka bir alan
        }));
        setMarkers(fetchedMarkers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Custom icon oluşturuyoruz
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38] // Icon boyutu
  });

  // Custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  return (
    <MapContainer center={[41.05566, 28.9922]} zoom={13} style={{ height: "60vh", width: "60%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />

      <MarkerClusterGroup 
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}