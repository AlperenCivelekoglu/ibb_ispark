import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MarkerCluster from "./MarkerCluster";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const markerCluster = new MarkerCluster();

  useEffect(() => {
    fetch("http://localhost:8000/api/parkingspot/")
      .then((response) => response.json())
      .then((data) => {
        const fetchedMarkers = data.features.map((feature) => ({
          geocode: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
          popUp: feature.properties.park_name,
        }));
        setMarkers(fetchedMarkers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMarkers = markers.filter(marker =>
    marker.popUp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38],
  });

  return (
    <div className="map-container-wrapper">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="map-container">
        <MapContainer center={[41.05566, 28.9922]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup 
            chunkedLoading
            iconCreateFunction={markerCluster.createClusterCustomIcon}
          >
            {filteredMarkers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;




// // src/components/MapComponent.js
// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Icon } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// import MarkerCluster from "./MarkerCluster";
// import "leaflet/dist/leaflet.css";
// import "./MapComponent.css";

// const MapComponent = () => {
//   const [markers, setMarkers] = useState([]);
//   const markerCluster = new MarkerCluster();

//   useEffect(() => {
//     fetch("http://localhost:8000/api/parkingspot/")
//       .then((response) => response.json())
//       .then((data) => {
//         const fetchedMarkers = data.features.map((feature) => ({
//           geocode: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
//           popUp: feature.properties.park_name,
//         }));
//         setMarkers(fetchedMarkers);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const customIcon = new Icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//     iconSize: [38, 38],
//   });

//   return (
//     <MapContainer center={[41.05566, 28.9922]} zoom={13} style={{ height: "100%", width: "100%" }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MarkerClusterGroup 
//         chunkedLoading
//         iconCreateFunction={markerCluster.createClusterCustomIcon}
//       >
//         {markers.map((marker, index) => (
//           <Marker key={index} position={marker.geocode} icon={customIcon}>
//             <Popup>{marker.popUp}</Popup>
//           </Marker>
//         ))}
//       </MarkerClusterGroup>
//     </MapContainer>
//   );
// };

// export default MapComponent;
