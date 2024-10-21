import Head from "next/head";
import TopBar from "../components/topbar/topbar";
import Footer from "../components/footer/footer";
import 'leaflet/dist/leaflet.css';
  
export default function Layout({children, home}: {children:any, home: boolean}) {
    return(
        <div>
            <Head>
                <link rel="icon" href="./favicon.ico"/>
                <meta name="title" title="Academia Seneca / Centro de estudio seneca"/>
                <meta name="description" content="Academia Seneca / Centro de 
                    estudio seneca, en Kabiezes y Gallarta"/>
            </Head>
            <TopBar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
