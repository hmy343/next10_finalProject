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
import axios from 'axios';
// import { Icon, icon } from 'leaflet';



const center = [35.18677932512122, 129.11274781616942];
const marker = [35.18344111342029,129.11682107120114];
const icon = L.icon({iconUrl:img, iconSize:[20,20] });

function getColor(d) {
    return d > 5 ? '#800026' :
            d > 3 ? '#E31A1C' :
                    d > 2 ? '#FD8D3C' :
                            d > 1 ? '#FED976' :
                                '#FFEDA0';
}

export default function Map2(){
    const [poly, setPoly] = useState(null)
    // const [poly2, setPoly] = useState(null)
    useEffect( async ()=>{
        const guguns = statesData.features.map(item => item.properties.SIG_KOR_NM)
        const spots = statesData.features.map( item => item.properties.spot ); 
        // console.log(costs)
        const locations=[]
        const locanames=[]
        const {data} = await axios.get('http://localhost:9797/search');
        const td_lat_lots = data.td_lat_lot.map((item)=>{
            locations.push([item.lat,item.lot])
            locanames.push(item.tour_ds_nm)
        })

        console.log(locations)
        let tmp = statesData.features.map((state, idx) => {
            
            const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
            
            // console.log( isFlat(coordinates) )
        
            // console.log(  idx , getColor(costs[idx]), costs[idx])
            return (
                <>
                    <Polygon
                        pathOptions={{
                            fill:true,
                            fillColor:getColor(spots[idx]),
                            fillOpacity:0.7,
                            weight:2,
                            opacity:1,
                            dashArray:3
                        }}
                        positions={coordinates}                        
                        color='green'                  
                    >
                     <Tooltip>{guguns[idx]}:{spots[idx]+'개'}</Tooltip>
                    <Marker position={locations[idx]} icon={icon} >
                       
                       <Popup>
                           {locanames[idx]}
                       </Popup>
                   </Marker>
                    </Polygon>
                    
                </>
            )
        })
        // console.log( 'tmp', tmp.length )
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
        <div style={{backgroundColor: "#6495ED"}}>
           <h4 style={{ padding:5,color:"white", textAlign:"center"}}>주요 관광지 분포(26개 기준)</h4>
        </div>
            <MapContainer
                center={center}
                zoom={10}
                style={{width: '60vw', height: '38.7vh'}}
            >
                    <TileLayer
                    url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=uCho9mIgWqmJ0Ud5xLcu"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    
                     />
                 
                { poly }
            </MapContainer>
        </>
    );
}