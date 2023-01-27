import Layout from "../components/layout/layout";
import styles from "../styles/qSomos.module.css"


export default function qSomos() {
    return(
        <Layout home>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className="left">
                        <h1 className="leftTitle">Quiénes Somos</h1>
                        <p className="leftText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, earum beatae velit sint maxime aperiam? Aperiam blanditiis est ipsa? Similique mollitia repellendus tenetur blanditiis fugiat in voluptatum hic eos voluptatem!
                        </p>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </Layout>
    )
}