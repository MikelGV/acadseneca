import Contact from '../components/contact/contact'
import Courses from '../components/courses/courses'
import Experience from '../components/experiene/experience'
import Layout from './layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
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
