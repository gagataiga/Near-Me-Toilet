import {Marker, Popup, useMap } from "react-leaflet";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import toilet from "../img/toilet.png";

export default function ToiletPostsMarker() {
  
   const markerIcon = new L.icon({
    iconUrl: toilet,
    iconSize: [50, 40]
   })
  
  const toiletPosts = [{
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
      comment: "hogeですね",
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

  return toiletPosts.map((post, index) => {
    return <Marker key={index} position={[post.latitude, post.longitude]} icon={markerIcon}>
      <Popup>
        Rating: {post.rating}  <br />
        Paper: {post.paper} <br />
        Free: {post.free} <br />
        comment: {post.comment}
      </Popup>
    </Marker>
  });
} 