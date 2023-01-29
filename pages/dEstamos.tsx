import Layout from "../components/layout/layout";
import styles from "../styles/dEstamos.module.css";

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

export default function dEstamos() {
    return(
        <Layout home>
            <div className={styles.container}>this is donde estamos</div>
        </Layout>
    )
}