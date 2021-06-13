import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// AIzaSyCXYDgclWjShQXy1e3_edqAZS47X71np30

function RequestMap() {

    const [currentPosition, setCurrentPosition] = useState({});

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    const locations = [
        {
            name: "Home Location",
            location: {
                currentPosition
            },
        },
    ];

    useEffect(
        () => {
            navigator.geolocation.getCurrentPosition(success);
        }
    );

    const defaultCenter = {
        // currentPosition
        lat: 59.95,
        lng: 30.33
    };

    return (
        <>
            <LoadScript
                googleMapsApiKey='AIzaSyAMqAaiPohfojuQmHwgBREm9Re-dvumWac'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    center={defaultCenter}
                >
                    {
                        locations.map(
                            item => {
                                return (
                                    <Marker key={item.name} position={item.location} />
                                )
                            }
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </>
    );
}

export default RequestMap;
