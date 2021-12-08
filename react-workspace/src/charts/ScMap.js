import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import {
    MapContainer,
    TileLayer,
    Polygon,
    Marker,   
    Popup,
    Polyline,
    Tooltip
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from "../data/data2";
import L from 'leaflet';
import img from '../img/marker.png';
// import { Icon, icon } from 'leaflet';



const center = [35.18677932512122, 129.11274781616942];
const marker = [35.18344111342029,129.11682107120114];
const icon = L.icon({iconUrl:img, iconSize:[20,20] });
const point=[[129.0323071781523,
    35.11642681309375],[129.03225241229467,
        35.116443502545195],[129.03216713785164,
            35.11651532668207]]

function getColor(d) {
    return d = "#fff";
  }

export default function Map2(){
    const [poly, setPoly] = useState(null)
    // const [poly2, setPoly] = useState(null)
    useEffect( ()=>{
        const guguns = statesData.features.map(item => item.properties.SIG_KOR_NM)
        const costs = statesData.features.map( item => item.properties.cost ); 
        console.log(costs)
        let tmp = statesData.features.map((state, idx) => {
            
            const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
            
            // console.log( isFlat(coordinates) )
        
            console.log(  idx , getColor(costs[idx]), costs[idx])
            return (
                <>
                    <Polygon
                        pathOptions={{
                            fill:true,
                            fillColor:getColor(costs[idx]),
                            fillOpacity:0.7,
                            weight:2,
                            opacity:1,
                            dashArray:3
                        }}
                        positions={coordinates}                        
                        color='green'                  
                    >
                    {/* <Tooltip permanent>{guguns[idx]}</Tooltip> */}
                    <Tooltip>{guguns[idx]}:{costs[idx]}</Tooltip>
                    </Polygon>
                    
                </>
            )
        })
        console.log( 'tmp', tmp.length )
        // let tmp2 = stateData.features.map((state) =>{
        //     const coordinates2 = state.geometry.coordinates
        // })
        // console.log( tmp )
        setTimeout(()=>{
            setPoly( tmp )
        }, 1000*0.1)
        
    }, [])
    function isFlat(latlngs) {
        return (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
    }
    return(
        <>
            <MapContainer
                center={center}
                zoom={10}
                style={{width: '60vw', height: '43.8vh'}}
            >
                    <TileLayer
                    url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=uCho9mIgWqmJ0Ud5xLcu"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    
                     />
                    <Marker position={marker} icon={icon} >
                       
                        <Popup>
                            hihihi
                        </Popup>
                    </Marker>
                { poly }
            </MapContainer>
        </>
    );
}