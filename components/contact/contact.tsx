'use client'

import { useForm } from "react-hook-form"
import { sendEmail } from "../../utils/send-email";
import styles from "../contact/contact.module.scss";

export type FormData = {
    name: string,
    email: string,
    message: string,
};

export default function Contact() {

    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <div className={styles.FormWrapper}>
            <h2 className={styles.ContactUs}>Contáctanos</h2>
            <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
                <input className={styles.Name} type="text" placeholder="Nombre" {...register("name", {required: true})} />
                <input className={styles.Email} type="email" placeholder="ejemplo@gmail.com" {...register("email", {required: true})} />
                <textarea className={styles.Message} rows={4} placeholder="Escribe tu mensaje" {...register("message", {required:true})}></textarea>

                <div>
                    <button className={styles.Button}>Submit</button>
                </div>
            </form>
        </div>
    )
}
