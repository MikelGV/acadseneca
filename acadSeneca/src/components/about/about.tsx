import styles from '../about/about.module.css';

export default function About() {
    return(
        <div className={styles.aboutWrapper}>
            <div className={styles.aboutLeft}>
              <img className={styles.leftImg} src="/Img/aboutTheFormationOfGroups.jpg" alt="" />
              <p className={styles.leftText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis, minima ipsum dolore in, pariatur quaerat placeat error inventore natus dolor harum! Debitis recusandae consequuntur earum! Hic odio saepe in?</p>
            </div>
            <div className={styles.aboutRight}>
              <img className={styles.rightImg} src="/Img/aboutTheTeachers.jpg" alt="" />
              <p className={styles.rightText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis, minima ipsum dolore in, pariatur quaerat placeat error inventore natus dolor harum! Debitis recusandae consequuntur earum! Hic odio saepe in?</p>
            </div>
        </div>
    )
}