import Layout from "./layout";
import styles from "../styles/qSomos.module.scss"


export default function qSomos() {
    return(
        <Layout home> 
            <div className={styles.container}>
                <div className={styles.containerWrapper}>
                    <div className={styles.textWrapper}>
                        <h1 className={styles.Title}>Quiénes Somos</h1>
                        <p className={styles.Text1}>
                            En julio de 1989, hace ya casi 35 años, dos jóvenes recién graduadas emprendieron su carrera en el ámbito de la educación, marcando el inicio de la Academia Séneca / Centro de Estudios Séneca. Este proyecto se convirtió en pionero en la creación de academias independientes, con el objetivo inicial de ofrecer apoyo y refuerzo en diversas asignaturas a niños y jóvenes que requerían asistencia académica.

                            Con el paso del tiempo, el compromiso con la excelencia educativa nos llevó a expandir nuestros servicios, reconociendo la importancia fundamental del aprendizaje de idiomas. Así, no solo nos enfocamos en el refuerzo de lenguas extranjeras, sino que también incorporamos programas orientados a la obtención de titulaciones oficiales a nivel estatal e internacional, respondiendo a la creciente demanda de competencias lingüísticas en un mundo globalizado.

                            La trayectoria de la Academia Séneca / Centro de Estudios Séneca es un testimonio de nuestra dedicación al desarrollo integral de nuestros estudiantes, combinando tradición e innovación en la educación durante más de tres décadas.                        
                        </p>
                        <br/>
                        <p className={styles.Text2}>
                            La Academia Séneca / Centro de Estudios Séneca, con sedes en el barrio de Cabieces (Santurtzi) y en Gallarta, ambos en Vizcaya, se dedica a ofrecer una educación de calidad en cursos de apoyo en todas las asignaturas y en la enseñanza de idiomas. Los idiomas más demandados en nuestra academia son Euskera, Inglés, Francés y Alemán.

                            Nuestra prioridad es el éxito académico de nuestros alumnos, por lo que nos enfocamos en brindar una enseñanza de excelencia, caracterizada por un enfoque motivador y personalizado. Para ello, contamos con grupos reducidos de un máximo de 8 estudiantes, lo que nos permite ofrecer una atención individualizada y adaptada a las necesidades de cada alumno.

                            Nuestra metodología combina lo mejor de los métodos tradicionales de enseñanza con el uso de nuevas tecnologías, como plataformas de e-learning, redes sociales, tablets y portátiles. Esta integración de recursos asegura que el proceso de aprendizaje sea dinámico, efectivo y acorde con los desafíos educativos actuales.

                            Todo esto es posible gracias a un equipo de docentes altamente cualificados, comprometidos con guiar y apoyar a nuestros estudiantes en su desarrollo académico y personal. En la Academia Séneca / Centro de Estudios Séneca, nos esforzamos por crear un entorno de aprendizaje que fomente la excelencia y prepare a nuestros alumnos para enfrentar con éxito sus futuros desafíos académicos y profesionales.
                        </p>

                        <img className={styles.Img} src="Img/Raquel-Bego-Maria-AcadSenecajpg.jpg" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
