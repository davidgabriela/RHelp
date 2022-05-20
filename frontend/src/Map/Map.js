import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

function MyMap(props) {
    const [position, setPosition] = useState();

    useEffect(() => {
        if (props.position) {
            const coords = [props.position[1], props.position[0]];
            setPosition(coords);
        }
    }, [props.position]);

    if (position !== undefined) {
        return (
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: 500, width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker
                    position={position}
                    icon={
                        new Icon({
                            iconUrl: markerIconPng,
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                        })
                    }
                ></Marker>
            </MapContainer>
        );
    } else return <p>Loading...</p>;
}

export default MyMap;
