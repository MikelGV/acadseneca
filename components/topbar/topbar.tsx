import Link from "next/link";
import styles from "../topbar/topbar.module.css";

export default function TopBar() {
    return(
        <div className={styles.topbar}>
            <div className={styles.topbarWrapper}>
                <div className={styles.left}>
                    <div className={styles.leftWrapper}>
                        <Link className={styles.logo} href="/">Academia Seneca</Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightWrapper}>
                        <Link href="/dEstamos" className={styles.dEstamos}>Donde Estamos</Link>
                        <Link href="/qSomos" className={styles.qSomos}>Quienes Somos</Link>
                        <Link href="/contact" className={styles.contact}>Contacto</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}