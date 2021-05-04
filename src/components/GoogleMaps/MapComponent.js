import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const MapComponent = ({ coordinates }) => {
    console.log(coordinates.position);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAWb6OiPykdc2h1KNJZh4QvoM84FfQnJbg"
    })

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className="Map">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                    lat: coordinates.position._lat,
                    lng: coordinates.position._long
                }}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* child component i.e. markers */}
            </GoogleMap>
        </div>
    ) : (<div className="loading">Loading...</div>)
}

export default MapComponent;