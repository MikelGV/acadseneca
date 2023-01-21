import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styles from '../Slider/slider.module.css';

export default function Slider() {
    return(
        <div className={styles.container}>
            <div className={styles.arrow}>
                <ArrowLeftOutlined/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.slide}>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src="/img/teacherExample.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.arrow}>
                <ArrowRightOutlined/>
            </div>
        </div>
    )
}