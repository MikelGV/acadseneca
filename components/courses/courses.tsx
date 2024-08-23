import styles from '../courses/courses.module.css'

export default function Courses() {
    return (
        <>
            <div className={styles.coursesWrapper}>

                <div className={styles.primaria}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/primaria.jpg" alt="" />
                        <p className={styles.Title}>PRIMARIA</p>
                    </div>
                    <p className={styles.Text}>
                        Asignaturas de apoyo:
                            Matematicas, Euskera, Ingles y Lengua(Castellano).
                    </p>
                </div>

                <div className={styles.education}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/eso.jpg" alt="" />
                        <p className={styles.Title}>E.S.O</p>
                    </div>
                    <p className={styles.Text}> 
                        Asignaturas de apoyo:
                            Matematicas, Euskera, Ingles, Lengua(Castellano), Fisica y Química.
                    </p>
                </div>

                <div className={styles.education}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/bachiller.jpg" alt="" />
                        <p className={styles.Title}>BACHILLERATO</p>
                    </div>
                    <p className={styles.Text}>
                        Asignaturas de apoyo:
                            Matematicas, Euskera, Ingles, Lengua(Castellano), Fisica, Química, Selectividad(PAU).

                    </p>
                </div>
            </div>

            <div className={styles.bottomGrid}>

                <div className={styles.education}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/uni.jpg" alt="" />
                        <p className={styles.Title}>UNIVERSIDAD</p>
                    </div>
                    <p className={styles.Text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis nihil aliquam doloremque corporis, veritatis repudiandae dolorum, fugit perferendis ipsum aspernatur architecto itaque quia sequi assumenda sint vel fuga veniam?</p>
                </div>

                <div className={styles.education}>
                    <div className={styles.ImgWrapper}> 
                        <img className={styles.Img} src="/Img/language.jpg" alt="" />
                        <p className={styles.Title}>IDIOMAS</p>
                    </div>
                    <p className={styles.Text}>
                        Inglés: Centro oficial preparador de examenes de la Universidad de Cambridge(Porcentaje de aprobados de un 95%).
                    </p>
                </div>

            </div>
        </>
        
    )
}
