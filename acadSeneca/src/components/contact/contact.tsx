
import { useState } from "react";
import styles from "../contact/contact.module.scss";


export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        html: '',
    });

    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending....');

        try {
            const res = await fetch('/api/email/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (res.status === 200) {
                setStatus("Email sent Successfully!");
            } else {
                setStatus("Failed to send email.")
            }
        } catch (error) {
            console.error("error sending email:", error)
            setStatus("An error occurred while sending the email.")
        }
    };

    return (
        <div className={styles.FormWrapper}>
            <h2 className={styles.ContactUs}>Contáctanos</h2>
            <form className={styles.Form} onSubmit={handleSubmit}>
                <input className={styles.Name} type="text" placeholder="Nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                <input className={styles.Email} type="email" placeholder="ejemplo@gmail.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                <textarea className={styles.Message} rows={4} placeholder="Escribe tu mensaje" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>

                <div>
                    <button className={styles.Button} type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}
