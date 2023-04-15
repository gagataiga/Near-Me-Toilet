import React, {useEffect,useState} from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from "./LocationMarker";
import "./Map.css";

export default function Map() { 
  
  const defaultCenter = [51.51648,-0.12778];
  // before making api server, just use this example data
  // locations
  // toilet-posts
  // pictures from cloudry via express server
  const toiletPosts = {
    posts: [{
      longitude: 14.29886,
      latitude: 48.303120,
      rating: 1,
      comment: "Maybe it hasn't been cleaned in a long time",
      location_id: 1,
      paper: "No",
      free: "Yes"
    },
    {
      longitude: 14.28751,
      latitude: 48.30348,
      rating: 1,
      comment: "Maybe it hasn't been cleaned in a long time",
      location_id: 2,
      paper: "No",
      free: "Yes"
    },
    {
      longitude: 14.28847,
      latitude: 48.30429,
      rating: 1,
      comment: "Maybe it hasn't been cleaned in a long time",
      location_id: 3,
      paper: "No",
      free: "Yes"
    }
    ]
  }

   // zoom level
  const zoom = 15;

  return (
    <MapContainer center={defaultCenter} zoom={zoom} scrollWheelZoom>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      {/* location of user */}
    <LocationMarker/>
  </MapContainer>
  )
}

