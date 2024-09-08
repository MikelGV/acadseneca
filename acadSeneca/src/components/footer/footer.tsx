import style from "../footer/footer.module.scss"

export default function Footer() {
    return(
        <div className={style.footer}>
            <div className={style.footerWrapper}>
                <div className={style.left}>
                    <h1 className={style.leftTitle}>Sobre Nosotros</h1>
                    <p className={style.leftText}>
                        Desde hace más de 30 años, la filosofía de Academia Seneca queda resumida en nuestro lema "El verdadero protagonista es el alumno".
                    </p>
                </div>
                <div className={style.right}>
                    <h1 className={style.rightTitle}>Dónde Estamos</h1>
                    <p className={style.rightText}>
                        Localización 1:
                            Los Hoyos Bidea, 9, 48980 Santurtzi, Bizkaia <br />
                            Telefono: 94 471 46 10 <br />
                        Localización 2: <br />
                            P.º Blasco Ibanez Páseálekyá, 1 BIS, 48500 Gallarta
                    </p>
                </div>
            </div>
            <div className={style.miniFooter}>
                <h1 className={style.logo}>Academia Seneca</h1>
            </div>
        </div>
    )
}
