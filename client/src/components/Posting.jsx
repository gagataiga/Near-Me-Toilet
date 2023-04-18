import React, {useEffect,useRef,useState } from "react";
import "./Posting.css";
import { MapContainer, TileLayer} from 'react-leaflet';
import LocationMarker from "./LocationMarker";

export default function Posting() { 
  // posting 
  //  user location => locations table

  // -> toilet-posts table
  //  user rating
  //  toilet image
  //  paper
  //  free or not
  //  comment

  const defaultCenter = [51.51648, -0.12778];
  const zoom = 15;


  return (
    <>
      <div className="map-container">
        <div >
          <p>
          Did you find a new toilet? The position you are in must be the position where the toilet is.
          </p>
        </div>
        <MapContainer center={defaultCenter} zoom={zoom} scrollWheelZoom style={{ height: "30vh" ,width:"100%"}}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <LocationMarker/>
      </MapContainer>
    </div>

      <div className="post-container">
        <form method="post">
    
        <fieldset>
          <legend>Rating: Do you think the toilet is clean?</legend>
            <input type="radio" id="rating-3" name="rating" value="3" />
            <label htmlFor="rating-3">3</label>
            <input type="radio" id="rating-2" name="rating" value="2" />
            <label htmlFor="rating-2">2</label>
            <input type="radio" id="rating-1" name="rating" value="1" />  
            <label htmlFor="rating-1">1</label>
        </fieldset>
        
        <fieldset>
          <legend>Is There toilet paper</legend>
            <input type="radio" id="paper-yes" name="paper" value="Yes" />
            <label htmlFor="paper-yes">Yes</label>
            <input type="radio" id="paper-no" name="paper" value="No" />
            <label htmlFor="paper-no">No</label>
        </fieldset>
        
        <fieldset>
          <legend>Is Toilet free</legend>
            <input type="radio" id="toilet-free-yes" name="free" value="Yes" />
            <label htmlFor="toilet-free-yes">Yes</label>
            <input type="radio" id="toilet-free-no" name="free" value="No" />
            <label htmlFor="toilet-free-no">No</label>
        </fieldset>  
        
        <label for="comment">Please comment</label>
          <textarea id="message" name="comment" rows="10"></textarea>
       
          <div>
           
          </div>

          <label htmlFor="image-upload">Toilet Image :
          <input type="file" name="image" id="image-upload" idaccept="image/*" />
          </label>

          <button type="submit">Post</button>
      </form>
      </div>
    </>
  )
}