import { MapContainer, TileLayer} from 'react-leaflet';
import LocationMarker from "./LocationMarker";
import ToiletPostsMarker from "./ToiletPostsMarker";
import "./Map.css";

export default function Map(props) { 
  const defaultCenter = [51.51648,-0.12778];
  const zoom = 15;

  return (
    <div className='map-container'>
    <MapContainer center={defaultCenter} zoom={zoom} scrollWheelZoom>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <ToiletPostsMarker />
    </MapContainer>
    </div>
  )
}

