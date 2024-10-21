import dynamic from "next/dynamic";
import Layout from "./layout";
import styles from "../styles/dEstamos.module.scss";

export default function dEstamos() {
    const NotSSRMaps = dynamic(() => import("../components/map/mapComponent"), {
        ssr: false,
    })
    return(
        <Layout home>
            <div className={styles.Container}>
                <NotSSRMaps/>
            </div>
        </Layout>
    )
}
