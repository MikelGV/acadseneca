import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'


export default function Home() {
  return (
    <Layout home>
      <div className={styles.main}>
        <div className={styles.imgWrapper}>
          <img className={styles.mainImg} src="/img/optiona.jpg" alt="" />
          <div className={styles.centered}>
            <h1 className={styles.centeredLogo}>Academia Seneca</h1>
            <h2 className={styles.centeredTitle}>DIVIÉRTETE ESTUDIANDO</h2>
            <p className={styles.centeredText}>
              Clases particulares adaptadas a las necesidades de cada alumno
              Refuerzo escolar personalizado y preparación para los examense oficiales de idiomas
            </p>
          </div>
        </div>

        <div className={styles.experience}>
            <h1 className={styles.expTitle}>+30 años de experiencia, +10000</h1>
            <p className={styles.expText}>
              Nuestra academia ofrece una atención absolutamente personalizada, focalizada en el rendimiento y satisfactión del alumno.
            </p>
          </div>

          <div className={styles.aboutWrapper}>
            <div className={styles.aboutLeft}>
              <img className={styles.leftImg} src="/img/aboutTheFormationOfGroups.jpg" alt="" />
              <p className={styles.leftText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis, minima ipsum dolore in, pariatur quaerat placeat error inventore natus dolor harum! Debitis recusandae consequuntur earum! Hic odio saepe in?</p>
            </div>
            <div className={styles.aboutRight}>
              <img className={styles.rightImg} src="/img/aboutTheTeachers.jpg" alt="" />
              <p className={styles.rightText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis, minima ipsum dolore in, pariatur quaerat placeat error inventore natus dolor harum! Debitis recusandae consequuntur earum! Hic odio saepe in?</p>
            </div>
          </div>

          <div className={styles.coursesWrapper}>
            <div className={styles.primaria}>
              <img className={styles.pImg} src="" alt="" />
              <h2 className={styles.pText}></h2>
            </div>
            <div className={styles.eso}>
              <img className={styles.eImg} src="" alt="" />
              <h2 className={styles.eText}></h2>
            </div>
            <div className={styles.bachiller}>
              <img className={styles.bImg} src="" alt="" />
              <h2 className={styles.bText}></h2>
            </div>
            <div className={styles.uni}>
              <img className={styles.uImg} src="" alt="" />
              <h2 className={styles.uText}></h2>
            </div>
            <div className={styles.idiomas}>
              <img className={styles.iImg} src="" alt="" />
              <h2 className={styles.iText}></h2>
            </div>
          </div>
      </div>
    </Layout>
  )
}
