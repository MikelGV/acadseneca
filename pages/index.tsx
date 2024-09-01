'use client'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout/layout'
import Experience from '../components/experiene/experience'
import Courses from '../components/courses/courses'
import Contact from '../components/contact/contact'

export default function Home() {
  return (
    <Layout home>
      <div className={styles.main}>
        <div className={styles.imgWrapper}>
          <img className={styles.mainImg} src="/Img/optiona.jpg" alt="" />
          <div className={styles.centered}>
            <h1 className={styles.centeredLogo}>Academia Seneca</h1>
            <h2 className={styles.centeredTitle}>DIVIÉRTETE ESTUDIANDO</h2>
            <p className={styles.centeredText}>
              Clases particulares adaptadas a las necesidades de cada alumno
              Refuerzo escolar personalizado y preparación para los examense oficiales de idiomas
            </p>
          </div>
        </div>
        <Experience/>
        <Courses/>
        <Contact/>
      </div>
    </Layout>
  )
}
