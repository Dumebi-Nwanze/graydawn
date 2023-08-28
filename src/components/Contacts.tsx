import React from 'react'
import SolarSystem from "./SolarSystem";
import { useForm, SubmitHandler } from "react-hook-form";
function Contacts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit: SubmitHandler<any> = (formData) => {
        window.location.href = `mailto:graydawn@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
    return (
        <div
            id='contact'
            className="h-screen snap-start px-4 pt-4 lg:px-8 lg:bt-8 pb-16  flex flex-col  justify-center bg-black text-white relative overflow-hidden">
            <SolarSystem />
            <div className='text-center'>
                <h2 className="text-4xl mb-4 underline">Contact Us</h2>
                <p className='text-2xl'>Like what you see, reachout let&apos;s chat.</p>
            </div>
            <div className='z-50'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto mt-10"
                >
                    <div className="flex space-x-2 justify-between">
                        <input
                            {...register("name")}
                            className="contactInput w-[100px] md:w-fit"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            {...register("email")}
                            className="contactInput w-[150px] md:w-fit"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <input
                        {...register("subject")}
                        className="contactInput" type="text" placeholder="Subject" />
                    <textarea
                        {...register("message")}
                        className="contactInput" placeholder="Message" />
                    <button
                        type="submit"
                        className="mt-4  btn-black px-8 py-4 border border-white hover:text-black text-lg font-medium w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contacts