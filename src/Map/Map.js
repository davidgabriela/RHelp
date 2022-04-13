import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function MyMap() {
    const position = [44.439663, 26.096306];
    return (
        <MapContainer
            className='map'
            center={position}
            zoom={12}
            style={{ height: 800, width: "100%" }}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
    );
}

export default MyMap;
