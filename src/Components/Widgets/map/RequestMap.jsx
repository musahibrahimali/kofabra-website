import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import './RequestMap.css';

function RequestMap() {

    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    const defaultProps = {
        center: {
            currentPosition
            // lat: 59.95,
            // lng: 30.33
        },
        zoom: 14
    };

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };

    return (
        <div className="request__map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCXYDgclWjShQXy1e3_edqAZS47X71np30" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                <Marker
                    lat={currentPosition.lat}
                    lng={currentPosition.lng}
                    text="Home"
                />
            </GoogleMapReact>
        </div>
    );
}

export default RequestMap;
