import React from "react";
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [35.155537496459566, 129.00286795345752];

export default function Map2(){
    return(
        <MapContainer
            center={center}
            zoom={10}
            style={{width: '100vw', height: '100vh'}}
        >
            
        </MapContainer>
    );
}