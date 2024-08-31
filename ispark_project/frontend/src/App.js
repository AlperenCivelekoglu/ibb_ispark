// // src/App.js
// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import MapComponent from "./components/MapComponent";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="container">
//       <Header />
//       <main className="map-container">
//         <MapComponent />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;


// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapComponent from "./components/MapComponent";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="map-container">
        <MapComponent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
