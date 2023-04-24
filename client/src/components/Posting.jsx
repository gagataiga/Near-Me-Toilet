import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Posting.css";
import { MapContainer, TileLayer} from 'react-leaflet';
import LocationMarker from "./LocationMarker";
import axios from "axios";

export default function Posting() { 

  const [postData, setPostData] = useState({
        longitude: 0,
        latitude: 0,
        rating: 0,
        paper: "",
        free: "",
        comment: "",
    });
  
  const [file, setImageFile] = useState({});

  // user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPostData({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
     });
  }, []);

  const handlePostDataChange = event => { 
    const { name, value } = event.target;   
    setPostData(prevState => ( { ...prevState, [name]: value } ));
  }

  const handlePostImageChange = (event) => { 
    setImageFile(event.target.files[0]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    const imageURL = await axios.post("/posts/uploadImage", formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    
    // posts all data 
    const newPostData = {
      ...postData,
      image_url: imageURL.data
    }
    const response = await axios.post("/posts/", newPostData);
  }

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
            <form onSubmit={handleSubmit} >
            <fieldset>
              <legend>Rating: Do you think the toilet is clean?</legend>
                <input type="radio" id="rating-3" name="rating" value="3" onChange={handlePostDataChange}/>
                <label htmlFor="rating-3">3</label>
                <input type="radio" id="rating-2" name="rating" value="2" onChange={handlePostDataChange}/>
                <label htmlFor="rating-2">2</label>
                <input type="radio" id="rating-1" name="rating" value="1" onChange={handlePostDataChange}/>
                <label htmlFor="rating-1">1</label>
            </fieldset>
            
            <fieldset>
              <legend>Is There toilet paper</legend>
                <input type="radio" id="paper-yes" name="paper" value="Yes" onChange={handlePostDataChange}/>
                <label htmlFor="paper-yes">Yes</label>
                <input type="radio" id="paper-no" name="paper" value="No" onChange={handlePostDataChange} />
                <label htmlFor="paper-no">No</label>
            </fieldset>
            
            <fieldset>
              <legend>Is Toilet free</legend>
                <input type="radio" id="toilet-free-yes" name="free" value="Yes" onChange={handlePostDataChange} />
                <label htmlFor="toilet-free-yes">Yes</label>
                <input type="radio" id="toilet-free-no" name="free" value="No" onChange={handlePostDataChange}/>
                <label htmlFor="toilet-free-no">No</label>
            </fieldset>  
            
              <div className="comment-container">
                <label htmlFor="comment">Comment:
                <textarea placeholder="Is the toilet that you want to upload clean ? feel free to comment" id="message" name="comment" rows="10" value={postData.comment} onChange={handlePostDataChange} />  
              </label>
              </div>
    
              <div className="img-upload-container">
                <label htmlFor="image-upload">Toilet Image :
                  <input type="file" name="image" id="image-upload" onChange={handlePostImageChange}idaccept="image/*" />
                </label>
              </div>
    
              <div className="btn-conainer">
              <button className="submit-btn" type="submit">Post</button>
              </div>
          </form>
          </div>
    </>
  )
}

