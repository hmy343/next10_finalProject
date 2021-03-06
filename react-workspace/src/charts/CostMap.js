import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import {
    MapContainer,
    TileLayer,
    Polygon,
    Tooltip   
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from "../data/data2";
// import '../css/Map2.css';
import img from '../img/costmap.png';

const center = [35.19020298251348, 129.06939532398673];
const marker = [129.11682107120114,35.18344111342029]
function getColor(d) {
    return d > 90000 ? '#800026' :
           d > 80000  ? '#BD0026' :
           d > 22000  ? '#E31A1C' :
           d > 20000  ? '#FC4E2A' :
           d > 10000   ? '#FD8D3C' :
           d > 3000   ? '#FEB24C' :
           d > 200   ? '#FED976' :
                      '#FFEDA0' ;
}

export default function CostMap(){
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

                
                <Polygon
                    pathOptions={{
                        fill:true,
                        fillColor:getColor(costs[idx]),
                        fillOpacity:0.7,
                        weight:2,
                        opacity:1,
                        dashArray:3,
                    }}
                    positions={coordinates}
                    
                >
                    
                <Tooltip>{guguns[idx]}:{costs[idx]+"원"}</Tooltip>
                </Polygon>
                // <img src="../img/costmap.png" alt="범례" style={{position:"absolute"}} />
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
            <h4 style={{ padding:10,color:"white", textAlign:"center"}}>구별 1인당 소비금액</h4>
        </div>
            <MapContainer
                center={center}
                zoom={11}
                style={{width: '60vw', height: '76vh'}}
            >
                    <TileLayer
                    url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=uCho9mIgWqmJ0Ud5xLcu"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    
                     />
                    {/* <Marker position={this.marker}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        
                    </Marker> */}
                
                { poly }
                
            </MapContainer>
            
        </>
    );
}