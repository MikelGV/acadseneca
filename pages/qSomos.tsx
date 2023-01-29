import Layout from "../components/layout/layout";
import styles from "../styles/qSomos.module.css"


export default function qSomos() {
    return(
        <Layout home>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <h1 className={styles.leftTitle}>Quiénes Somos</h1>
                        <p className={styles.leftText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, earum beatae velit sint maxime aperiam? Aperiam blanditiis est ipsa? Similique mollitia repellendus tenetur blanditiis fugiat in voluptatum hic eos voluptatem!
                        </p>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </Layout>
    )
}