import styles from '../experiene/experience.module.css'

export default function Experience() {
    return(
        <div className={styles.experience}>
            <h1 className={styles.expTitle}>+30 años de experiencia, +10000</h1>
            <p className={styles.expText}>
                Nuestra academia ofrece una atención absolutamente personalizada, focalizada en el rendimiento y satisfactión del alumno.
            </p>
        </div>
    )
}