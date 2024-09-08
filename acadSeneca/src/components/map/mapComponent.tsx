import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "../map/mapComponent.module.scss"

export default function Maps() {
    const icon = L.icon({
        iconUrl: "/Img/marker-icon.png",
        iconSize: [45, 45],
        iconAnchor: [23, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <div className={styles.Container}>
            <MapContainer className={styles.ContainerWrapper} center={[43.31750, -3.05381]} zoom={15} scrollWheelZoom={false}> 
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[43.317382, -3.073305]} icon={icon} >
                    <Popup>
                        Academia Seneca en: <br/> P.º Blasco Ibanez Páseálekyá. <br /> Gallarta (Abanto y Zierbana).
                    </Popup>
                </Marker>
                <Marker position={[43.321433, -3.034734]} icon={icon}>
                    <Popup>
                        Academia Seneca en: <br/>Los Hoyos Bidea, 9, 48980 <br/> Santurtzi (Cabiezes), Bizkaia
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
