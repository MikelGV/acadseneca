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
              <img className={styles.pImg} src="/img/primaria.jpg" alt="" />
              <p className={styles.pText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet adipisci quo architecto iure, ut quibusdam libero, nemo pariatur alias esse exercitationem in illo voluptas corrupti doloremque dolores ipsam. Velit, accusamus!</p>
            </div>

            <div className={styles.eso}>
              <img className={styles.eImg} src="/img/eso.jpg" alt="" />
              <p className={styles.eText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis ratione impedit exercitationem expedita voluptas dolorem fugiat nisi at. Saepe labore necessitatibus ad iure aut suscipit ea sed recusandae provident?</p>
            </div>

            <div className={styles.bachiller}>
              <img className={styles.bImg} src="/img/bachiller.jpg" alt="" />
              <p className={styles.bText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis non mollitia quod, aperiam ut deleniti nam magni consequuntur repellat earum voluptas sequi quia suscipit laboriosam veniam doloribus? Porro, labore accusamus!</p>
            </div>

          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.uni}>
              <img className={styles.uImg} src="/img/uni.jpg" alt="" />
              <p className={styles.uText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis nihil aliquam doloremque corporis, veritatis repudiandae dolorum, fugit perferendis ipsum aspernatur architecto itaque quia sequi assumenda sint vel fuga veniam?</p>
            </div>

            <div className={styles.idiomas}>
              <img className={styles.iImg} src="/img/language.jpg" alt="" />
              <p className={styles.iText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis ut aperiam. Voluptatibus fugiat sapiente aperiam sequi pariatur earum eius officia, omnis libero, iste cum inventore voluptatum voluptates magni. Vero.</p>
            </div>
          </div>

          <div className={styles.teacherSlider}></div>

      </div>
    </Layout>
  )
}
