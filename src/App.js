import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function App() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAyqBmUePso0iFdhVOlLR5uwmmu7sKVvIc",
  });

  return  isLoaded ? (
    <div >
      <GoogleMap
        zoom={10}
        center={{ lat: 90, lng: 90 }}
        mapContainerStyle={{ width: "500px", height: "500px", border: '2px solid red' }}
      >

      </GoogleMap>
    </div>
  ) : <div><h1>Loading............</h1></div>
}

export default App;
