import Link from "next/link";
import styles from "../topbar/topbar.module.css";

export default function TopBar() {
    return(
        <div className={styles.topbar}>
            <div className={styles.topbarWrapper}>
                <div className={styles.left}>
                    <Link className={styles.logo} href="/">Academia Seneca</Link>
                </div>
                <div className={styles.right}>
                    <Link href="/dEstamos" className={styles.MenuItem}>Donde Estamos</Link>
                    <Link href="/qSomos" className={styles.MenuItem}>Quienes Somos</Link>
                </div>
            </div>
        </div>
    )
}
