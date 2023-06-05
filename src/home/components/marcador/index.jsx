import React from "react";
import { Marker } from "@react-google-maps/api";
import "./style.css";
import PropTypes from "prop-types";

const Marcador = ({ position }) => {
  return (
    <Marker
      position={position}
      draggable={false}
      options={{ label: { text: position.text, className: "Mark" } }}
    />
  );
};

Marcador.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Marcador;
