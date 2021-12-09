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
import img2 from '../img/logo.png';
import img3 from '../img/home1.png';
import img4 from '../img/people.png';
import axios from 'axios';
// import { Icon, icon } from 'leaflet';



const center = [35.18677932512122, 129.11274781616942];
const icon = L.icon({iconUrl:img, iconSize:[20,20] });
const icon1 = L.icon({iconUrl:img2, iconSize:[20,20] });
const icon2 = L.icon({iconUrl:img3, iconSize:[20,20] });
const icon3 = L.icon({iconUrl:img4, iconSize:[20,20] });

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
        const locations1=[]
        const locanames1=[]
        const locations2=[]
        const locanames2=[]
        const locations3=[]
        const locanames3=[]
        const locations4=[]
        const locanames4=[]

        
        const {data} = await axios.get('http://localhost:9797/search');
        const td = data.td_lat_lot.map(item=>item)
        const td_lat = data.td_lat_lot.map((item)=>{
            locations.push([item.lat,item.lot])
            locanames.push(item.tour_ds_nm)
        })
        // const td_lat_lots = data.td_lat_lot.map((item)=>{
        //     if(item.main_type=='자연관광지'){
        //         locations1.push([item.lat.toFixed(6),item.lot.toFixed(6)])
        //         locanames1.push(item.tour_ds_nm)
        //     }else if(item.main_type=='역사관광지'){
        //         locations2.push([item.lat.toFixed(6),item.lot.toFixed(6)])
        //         locanames2.push(item.tour_ds_nm)
        //     }else if(item.main_type=='휴양관광지'){
        //         locations3.push([item.lat.toFixed(6),item.lot.toFixed(6)])
        //         locanames3.push(item.tour_ds_nm)
        //     }else if(item.main_type=='기타관광지'){
        //         locations4.push([item.lat.toFixed(6),item.lot.toFixed(6)])
        //         locanames4.push(item.tour_ds_nm)
        //     }
        // })
        console.log(locations)
        console.log(locanames)

        
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
                        {/* <Marker position={locations2} icon={icon1} >                        
                        <Popup>{locanames2}</Popup>
                        </Marker>
                         <Marker position={locations3} icon={icon2} >                         
                         <Popup>{locanames3}</Popup>
                        </Marker>
                        <Marker position={locations4} icon={icon3} >                        
                        <Popup>{locanames4}</Popup>
                        </Marker> */}

                    
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