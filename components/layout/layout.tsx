import Head from "next/head";
import TopBar from "../topbar/topbar";
import Footer from "../footer/footer";

export default function Layout({children, home}: {children:any, home: boolean}) {
    return(
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
                </style> 
            </Head>
            <header>
                <TopBar />
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    )
}