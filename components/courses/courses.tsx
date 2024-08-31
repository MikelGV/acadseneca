'use client'

import styles from '../courses/courses.module.scss'

export default function Courses() {
    return (
        <>
            <div className={styles.coursesWrapper}>

                <div className={styles.primaria}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/primaria.jpg" alt="" />
                        <p className={styles.Title}>PRIMARIA</p>
                    </div>
                    <div className={styles.TextWrapper}>
                        <p className={styles.TextTitle}>
                            Asignaturas de apoyo:
                        </p>
                        <p className={styles.Text}>
                            Matematicas-
                            Euskera 
                            -Ingles 
                            -Lengua(Castellano).
                        </p>
                    </div>
                </div>

                <div className={styles.education}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/eso.jpg" alt="" />
                        <p className={styles.Title}>E.S.O</p>
                    </div>
                    <p className={styles.TextTitle}> 
                        Asignaturas de apoyo:
                    </p>
                    <p className={styles.Text}> 
                            Matematicas, Euskera, Ingles, Lengua(Castellano), Fisica y Química.
                    </p>
                </div>

                <div className={styles.education}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/bachiller.jpg" alt="" />
                        <p className={styles.Title}>BACHILLERATO</p>
                    </div>

                    <p className={styles.TextTitle}>
                        Asignaturas de apoyo:
                    </p>
                    <p className={styles.Text}>
                            Matematicas, Euskera, Ingles, Lengua(Castellano), Fisica, Química, Selectividad(PAU).

                    </p>
                </div>
            </div>

            <div className={styles.bottomGrid}>

                <div className={styles.rightEducation}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/uni.jpg" alt="" />
                        <p className={styles.Title}>UNIVERSIDAD</p>
                    </div>

                    <div className={styles.rightTextWrapper}> 
                        <p className={styles.rightTextTitle}>
                            Asignaturas de apoyo:
                        </p>
                        <p className={styles.rightText}>Matematicas, Euskera, Fisica, Quimica, Inglés</p>
                    </div>
                </div>

                <div className={styles.leftEducation}>
                    <div className={styles.ImgWrapper}> 
                        <img className={styles.Img} src="/Img/language.jpg" alt="" />
                        <p className={styles.Title}>IDIOMAS</p>
                    </div>
                    <div className={styles.bTextWrapper}> 
                        <div className={styles.ingles}>
                            <p className={styles.b1TextTitle}>
                                Inglés:
                            </p>
                            <p className={styles.inglesB1Text}>
                                    Centro oficial preparador de examenes de la Universidad de Cambridge(Porcentaje de aprobados de un 95%).
                            </p>
                            </div>
                        </div>
                    

                        <div className={styles.frances}>
                            <p className={styles.botTextTitle}>
                                Francés:
                            </p>
                            <p className={styles.b1Text}>
                                Preparación para la Escuela Oficial de Idiomas - Todo los niveles
                            </p>
                        </div>
                        <div className={styles.aleman}>
                            <p className={styles.botTextTitle}>
                                Alemán:
                            </p>
                            <p className={styles.b1Text}>
                                Preparación para la Escuela Oficial de Idiomas - Todo los niveles
                            </p>
                        </div>
                        <div className={styles.euskera}>
                            <p className={styles.botTextTitle}>
                                Euskera:
                            </p>
                            <p className={styles.b1Text}>
                                Preparación para la Escuela Oficial de Idiomas - Todo los niveles: E.G.A / PL / APOYO
                            </p>
                        </div>
                </div>

            </div>
        </>
        
    )
}
