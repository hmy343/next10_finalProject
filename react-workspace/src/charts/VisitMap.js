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

const center = [35.19020298251348, 129.06939532398673];
const marker = [129.11682107120114, 35.18344111342029]
function getColor(d) {
    return d > 14000 ? '#800026' :
        d > 13000 ? '#BD0026' :
            d > 7000 ? '#E31A1C' :
                d > 6000 ? '#FC4E2A' :
                    d > 5000 ? '#FD8D3C' :
                        d > 4000 ? '#FEB24C' :
                            d > 300 ? '#FED976' :
                                '#FFEDA0';
}

export default function VisitMap() {
    const [poly, setPoly] = useState(null)
    // const [poly2, setPoly] = useState(null)
    useEffect(() => {
        const guguns = statesData.features.map(item => item.properties.SIG_KOR_NM)
        const vstrSl = statesData.features.map(item => item.properties.vstr);
        console.log(vstrSl)
        let tmp = statesData.features.map((state, idx) => {

            const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

            // console.log( isFlat(coordinates) )

            console.log(idx, getColor(vstrSl[idx]), vstrSl[idx])
            return (
                <Polygon
                    pathOptions={{
                        fill: true,
                        fillColor: getColor(vstrSl[idx]),
                        fillOpacity: 0.7,
                        weight: 2,
                        opacity: 1,
                        dashArray: 3,
                    }}
                    
                    positions={coordinates}
                    >
                    <Tooltip>{guguns[idx]}:{vstrSl[idx]+'(만명)'}</Tooltip>
                </Polygon>

            )
        })
        console.log('tmp', tmp.length)
        // let tmp2 = stateData.features.map((state) =>{
        //     const coordinates2 = state.geometry.coordinates
        // })
        // console.log( tmp )
        setTimeout(() => {
            setPoly(tmp)
        }, 1000 * 0.1)

    }, [])
    function isFlat(latlngs) {
        return (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
    }
    return (
        <>
            <MapContainer
                center={center}
                zoom={10}
                style={{ width: '48vw', height: '45vh' }}
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

                {poly}
            </MapContainer>
        </>
    );
}