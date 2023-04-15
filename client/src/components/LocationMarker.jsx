import { Marker, Popup, useMap } from "react-leaflet";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import person from "../img/person.png";

export default function LocationMarker() { 
  const [position, setPosition] = useState(null);

  const map = useMap();

  const markerIcon = new L.icon({
    iconUrl: person,
    iconSize: [80, 80]
  })
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, []);

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>
      This is your location
      </Popup>
    </Marker>
  )
} 