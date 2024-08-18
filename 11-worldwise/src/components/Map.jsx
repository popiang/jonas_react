import { useNavigate } from "react-router-dom";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import styles from "./Map.module.css";
import { useGeolocation } from "../hookes/useGeolocation";
import Button from "../components/Button";
import { useUrlPosition } from "../hookes/useUrlPosition";

function Map() {
    const { cities } = useCities();

	// this is the coordinate used as the center of the map
    const [mapPosition, setMapPosition] = useState([40, 0]);

	// geolocationPosition are the coordinates retrieved when user click Get My Location
    const {
		isLoading: isLoadingPosition,
        position: geolocationPosition,
        getPosition,
    } = useGeolocation();
	
	// get the lat long from url
	const [mapLat, mapLng] = useUrlPosition();

	// this is to sync between mapLat/mapLng(retrieved from url) and mapPosition, when mapLat and mapLng are changed
    useEffect(() => {
        if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    }, [mapLat, mapLng]);


	// this is to sync between geolocationPosition and mapPosition, it executes when geolocationPosition is changed
    useEffect(() => {
        if (geolocationPosition)
            setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }, [geolocationPosition]);

    return (
        <div className={styles.mapContainer}>
            {!geolocationPosition && (
                <Button type="position" onClick={getPosition}>
                    {isLoadingPosition ? "Loading..." : "Use your position"}
                </Button>
            )}
            <MapContainer
                center={mapPosition}
                zoom={13}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (
                    <Marker
                        position={[city.position.lat, city.position.lng]}
                        key={city.id}
                    >
                        <Popup>
                            <span>{city.emoji}</span>{" "}
                            <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                ))}

				{/* center the map according to position in mapPosition */}
                <ChangeCenter position={mapPosition} />

				{/* detect user click on the map */}
                <DetectClick />
            </MapContainer>
        </div>
    );
}

// center the map according to the supplied position
function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);

    return null;
}

// navigate to form when user click on the map
function DetectClick() {
    const navigate = useNavigate();

    useMapEvents({
        click: (e) => {
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        },
    });
}

export default Map;
