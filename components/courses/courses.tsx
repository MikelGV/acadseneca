import styles from '../courses/courses.module.css'

export default function Courses() {
    return (
        <>
            <div className={styles.coursesWrapper}>

                <div className={styles.primaria}>
                    <img className={styles.pImg} src="/Img/primaria.jpg" alt="" />
                    <p className={styles.pText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet adipisci quo architecto iure, ut quibusdam libero, nemo pariatur alias esse exercitationem in illo voluptas corrupti doloremque dolores ipsam. Velit, accusamus!</p>
                </div>

                <div className={styles.eso}>
                    <img className={styles.eImg} src="/Img/eso.jpg" alt="" />
                    <p className={styles.eText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis ratione impedit exercitationem expedita voluptas dolorem fugiat nisi at. Saepe labore necessitatibus ad iure aut suscipit ea sed recusandae provident?</p>
                </div>

                <div className={styles.bachiller}>
                    <img className={styles.bImg} src="/Img/bachiller.jpg" alt="" />
                    <p className={styles.bText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis non mollitia quod, aperiam ut deleniti nam magni consequuntur repellat earum voluptas sequi quia suscipit laboriosam veniam doloribus? Porro, labore accusamus!</p>
                </div>
            </div>

            <div className={styles.bottomGrid}>

                <div className={styles.uni}>
                    <img className={styles.uImg} src="/Img/uni.jpg" alt="" />
                    <p className={styles.uText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis nihil aliquam doloremque corporis, veritatis repudiandae dolorum, fugit perferendis ipsum aspernatur architecto itaque quia sequi assumenda sint vel fuga veniam?</p>
                </div>

                <div className={styles.idiomas}>
                    <img className={styles.iImg} src="/Img/language.jpg" alt="" />
                    <p className={styles.iText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis ut aperiam. Voluptatibus fugiat sapiente aperiam sequi pariatur earum eius officia, omnis libero, iste cum inventore voluptatum voluptates magni. Vero.</p>
                </div>

            </div>
        </>
        
    )
}