'use client'

import { display } from '@mui/system';
import { useState } from 'react';
import styles from '../courses/courses.module.scss'

export default function Courses() {
    const [isActive, setIsActive] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);


  const toggleHide = () => {
    setIsActive(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  }

  const toggleHide2 = () => {
    setIsActive(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
  }

  const toggleHide3 = () => {
     setIsActive(false);
     setIsActive2(false);
     setIsActive3(true);
    setIsActive4(false);
   }

  const toggleHide4 = () => {
     setIsActive(false);
     setIsActive2(false);
     setIsActive3(false);
    setIsActive4(true);
   }

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
                        <ul className={styles.Text}>
                            <li>Matematicas</li>
                            <li>Euskera</li>
                            <li>Ingles</li>
                            <li>Lengua(Castellano)</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.education}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/eso.jpg" alt="" />
                        <p className={styles.Title}>E.S.O</p>
                    </div>
                    <div className={styles.TextWrapper}>
                        <p className={styles.TextTitle}> 
                            Asignaturas de apoyo:
                        </p>
                        <ul className={styles.Text}>
                            <li>Matematicas</li>
                            <li>Euskera</li>
                            <li>Ingles</li>
                            <li>Lengua(Castellano)</li>
                            <li>Fisica</li>
                            <li>Química</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.education}>
                    <div className={styles.ImgWrapper}>
                        <img className={styles.Img} src="/Img/bachiller.jpg" alt="" />
                        <p className={styles.Title}>BACHILLERATO</p>
                    </div>

                    <div className={styles.TextWrapper}>
                        <p className={styles.TextTitle}>
                            Asignaturas de apoyo:
                        </p>
                        <ul className={styles.Text}>
                            <li>Matematicas</li>
                            <li>Euskera</li>
                            <li>Ingles</li>
                            <li>Lengua(Castellano)</li>
                            <li>Fisica</li>
                            <li>Química</li>
                            <li>Selectividad(PAU)</li>
                        </ul>
                    </div>
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
                        <ul className={styles.Text}>
                            <li>Matematicas</li>
                            <li>Euskera</li>
                            <li>Ingles</li>
                            <li>Lengua(Castellano)</li>
                            <li>Fisica</li>
                            <li>Química</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.leftEducation}>
                    <div className={styles.ImgWrapper}> 
                        <img className={styles.Img} src="/Img/language.jpg" alt="" />
                        <p className={styles.Title}>IDIOMAS</p>
                    </div>
                    <div className={styles.ButtonWrapper}> 
                        <div className={styles.ingles}>
                            <button className={styles.b1TextTitle} onClick={toggleHide}>
                                Inglés:
                            </button>
                        </div>
                        <div className={styles.frances}>
                            <button className={styles.botTextTitle} onClick={toggleHide2} >
                                Francés:
                            </button>
                        </div>
                        <div className={styles.aleman}>
                            <button className={styles.botTextTitle} onClick={toggleHide3}>
                                Alemán:
                            </button>
                        </div>
                        <div className={styles.euskera}>
                            <button className={styles.botTextTitle} onClick={toggleHide4}>
                                Euskera:
                            </button>
                        </div>
                    </div>

                    <div className={styles.bTextWrapper}>
                        <p className={styles.inglesB1Text} style={{ display: isActive ? "block" : "none" }}>
                            Centro oficial preparador de examenes de la Universidad de Cambridge(Porcentaje de aprobados de un 95%).
                        </p>
                        <p className={styles.b1Text} style={{ display: isActive2 ? "block" : "none" }}>
                            Preparación para la Escuela Oficial de Idiomas - Todo los niveles de Francés.
                        </p>
                        <p className={styles.b1Text} style={{ display: isActive3 ? "block" : "none" }}>
                            Preparación para la Escuela Oficial de Idiomas - Todo los niveles de Alemán.
                        </p>
                        <p className={styles.b1Text} style={{ display: isActive4 ? "block" : "none" }}>
                            Preparación para la Escuela Oficial de Idiomas - Todo los niveles: E.G.A / PL / APOYO
                        </p>
                    </div>
                    

                </div>

            </div>
        </>
        
    )
}
