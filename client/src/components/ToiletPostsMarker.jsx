import {Marker, Popup, useMap } from "react-leaflet";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import toilet from "../img/toilet.png";
import axios from "axios";
import "./ToiletPostsMarker.css";

export default function ToiletPostsMarker() {
  
   const markerIcon = new L.icon({
    iconUrl: toilet,
    iconSize: [50, 40]
   })
  
  const [posts,setPosts] = useState([]);
  
  async function fetchAllPosts() { 
    const response = await axios.get("/posts/");
    setPosts(response.data);
    console.log(response.data);
    return response;
  }

  useEffect(() => { 
    fetchAllPosts();
  }, []);

  function makingStars(post) {
    const result = "";
    for (let i=0; i < post.rating; i++) {
      console.log()
    }
    return result;
  }

  return posts.map((post, index) => {
    return <Marker key={index} position={[post.latitude, post.longitude]} icon={markerIcon}>
      <Popup>
        <img src={post.image_url} />
        <div>
          Rating: {post.rating}  <br />
          Paper 🧻: {post.paper} <br />
          Free 💰: {post.free} <br />
          comment📝: {post.comment}
        </div>
      </Popup>
    </Marker>
  });
} 