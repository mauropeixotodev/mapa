import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { HomeContexto } from "../../contexto";
import Marcador from "../marcador";

const Mapa = () => {
  const { marcadores } = React.useContext(HomeContexto);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_LINK_API,
  });

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: -23.582593, lng: -46.563949 }}
        zoom={4}
      >
        <>
          {marcadores.map((marcador, index) => {
            return <Marcador key={index} position={marcador} />;
          })}
        </>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};
export default Mapa;
