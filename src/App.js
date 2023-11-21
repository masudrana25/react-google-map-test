import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";

function App() {
  const data = [
  {
    id: 1,
      name: 'Buriganga',
      position: { lat: 89, lng: 89.7 },
     WL: 24.4,
      DWL: 34.5
  },
  {
    id: 2,
    name: 'Buriganga',
    position: { lat: 89, lng: 89.7 },
    WL: 24.4,
    DWL: 34.5
  },
  {
    id: 3,
    name: 'Buriganga',
    position: { lat: 89, lng: 89.7 },
    WL: 24.4,
    DWL: 34.5
  }
];


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAyqBmUePso0iFdhVOlLR5uwmmu7sKVvIc",
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (id) => {
    if (id === activeMarker) {
      return;
    }
    setActiveMarker(id);
  };

  return  isLoaded ? (
    <div >
      <GoogleMap
        zoom={10}
        center={{ lat: 90, lng: 90 }}
        mapContainerStyle={{ width: "500px", height: "500px", border: '2px solid red' }}
        onClick={()=> setActiveMarker(null)}
      >

        {
          data.map(data => {
            <Marker
              key={data.id}
              position={data.position}
              onClick={() => handleActiveMarker(data.id)}

            >

              {
                activeMarker === data.id ?
                  <InfoWindow onCloseClick={()=> setActiveMarker(null)}>
                    <div>
                      <h3>{data.name}</h3>
                      <p>Water Label : {data.WL}</p>
                      <p>Danger Water Label : {data.DWL}</p>
                    </div>
                  </InfoWindow> : null
              }

            </Marker>
          })
        }



      </GoogleMap>
    </div>
  ) : <div><h1>Loading............</h1></div>
}

export default App;
