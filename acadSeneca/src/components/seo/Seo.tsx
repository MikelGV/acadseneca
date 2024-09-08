import Head from "next/head";

const siteTitle: string = "Academia Seneca";

export default function Seo() {
    return(
        <Head>
            <meta name="description" content="Academia Seneca" />
            <meta name="og:title" content={siteTitle}/>
        </Head>
    )
}