'use client'

import { useForm } from "react-hook-form"
import { sendEmail } from "../../utils/send-email";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name"> Full Name </label>
                <input type="text" placeholder="Full Name" {...register("name", {required: true})} />
            </div>
            <div>
                <label htmlFor="name"> Email Address </label>
                <input type="email" placeholder="example@example.com" {...register("email", {required: true})} />
            </div>
            <div>
                <label htmlFor="message"> Message </label>
                <textarea rows={4} placeholder="Type your message" {...register("message", {required:true})}></textarea>
            </div>

            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
