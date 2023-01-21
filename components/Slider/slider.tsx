import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styles from '../Slider/slider.module.css';

export default function Slider() {
    return(
        <div className={styles.container}>
            <div className={styles.arrow}>
                <ArrowLeftOutlined/>
            </div>
            <div className={styles.wrapper}></div>
            <div className={styles.arrow}>
                <ArrowRightOutlined/>
            </div>
        </div>
    )
}