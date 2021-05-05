import React from "react";
import { Map, GeoJSON, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
const CovidMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "grey",
    weight: 1,
    color: "black",
    fillOpacity: 0.7,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    layer.bindTooltip(
      `
        <p>${name.length }<p>
        <p>${name.length - 1} - ${name.length + 2}</p>
      `,
      {
        permanent:true, 
        direction: "center",
        className: "my-labels"
      }).openTooltip();
  };
return (
    <Map 
    style={{ height: "90vh" }} 
    zoom={2} 
    center={[20, 60]} 
    zoomEnd={(e) => console.log('I zoomed', e)}
    >
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </Map>
  );
};

export default CovidMap;
