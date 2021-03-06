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
// import img from '../img/marker.png';
// import { Icon, icon } from 'leaflet';



const center = [35.18677932512122, 129.11274781616942];
// const icon = L.icon({iconUrl:img, iconSize:[20,20] });

function getColor(d) {
    return d > 2.0 ? '#FF0093' :
    d > 1.5 ? '#FF2993' :
        d > 1.1 ? '#FF3F93' :
            d > 1 ? '#FF6193' :
                d > 0.8 ? '#FF9393' :
                    d > 0.7 ? '#FFA893' :
                        d > 0.6 ? '#FFBF93' :
                            d > 0.5 ? '#FFD893' :
                                        '#FFE793';
}

export default function Map2(){
    const [poly, setPoly] = useState(null)
    // const [poly2, setPoly] = useState(null)
    useEffect( ()=>{
        const guguns = statesData.features.map(item => item.properties.SIG_KOR_NM)
        const jisus = statesData.features.map( item => item.properties.jisu ); 
        console.log(jisus)
        let tmp = statesData.features.map((state, idx) => {
            
            const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
            
            // console.log( isFlat(coordinates) )
        
            // console.log(  idx , getColor(costs[idx]), costs[idx])
            return (
                <>
                    <Polygon
                        pathOptions={{
                            fill:true,
                            fillColor:getColor(jisus[idx]),
                            fillOpacity:0.7,
                            weight:2,
                            opacity:1,
                            dashArray:3
                        }}
                        positions={coordinates}                        
                        color='#585858'                  
                    >
                    {/* <Tooltip permanent>{guguns[idx]}</Tooltip> */}
                    <Tooltip>{guguns[idx]}:{jisus[idx]}</Tooltip>
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
        <div style={{backgroundColor: "#535DA9"}}>
            <h4 style={{ padding:10,color:"white", textAlign:"center"}}>????????? ??????????????????</h4>
        </div>
            <MapContainer
                center={center}
                zoom={11}
                style={{width: '60vw', height: '79.8vh'}}
            >
                    <TileLayer
                    url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=uCho9mIgWqmJ0Ud5xLcu"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    
                     />
                    {/* <Marker position={marker}> */}
                       
                        {/* <Popup>
                            hihihi
                        </Popup> */}
                    {/* </Marker> */}
                { poly }
            </MapContainer>
        </>
    );
}