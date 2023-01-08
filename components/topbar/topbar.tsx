import Link from "next/link"

export default function TopBar() {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="left">
                    <div className="leftWrapper">
                        <h1 className="logo">Academia Seneca</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="rightWrapper">
                        <Link href="/dondeEstamos" className="">Donde Estamos</Link>
                        <Link href="quienesSomos" className="">Quienes Somos</Link>
                        <Link href="contact" className="">Contacto</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}