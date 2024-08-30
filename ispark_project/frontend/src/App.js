import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css"
import "./App.css";

export default function App() {

  // create custom icon
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    //iconUrl: require("./icons/placeholder.png"),
    iconSize: [38, 38] // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  // markers
  const markers = [
    {
      geocode: [41.0488233569155, 28.9879749441319],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [41.0488233569155, 28.9879749441319],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [41.0495232987717, 28.9955656052444,],
      popUp: "Hello, I am pop up 3"
    }
  ];

  return (
    <MapContainer center={[41.05566, 28.9922]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  // Tile URL'sini burada belirtin
      />

      <MarkerClusterGroup 
      chunkedLoading
      iconCreateFunction={createClusterCustomIcon}
      >

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}

      </MarkerClusterGroup>
    </MapContainer>
  );
}
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/parkingspot/')
//       .then(response => {
//         console.log(response.data);
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Parking Spots</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.park_name} - {item.location_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
