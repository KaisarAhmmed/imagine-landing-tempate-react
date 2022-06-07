import React from "react";
import ContactBg from "../../images/contact_bg.webp";

const Contact = () => {
    return (
        <div
            className="py-20 bg-fixed bg-cover relative z-[1] before:absolute before:content-[''] before:h-full before:w-full before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#4286f4] before:to-[#42e2f4] before:-z-10 before:opacity-60"
            style={{ backgroundImage: `url(${ContactBg})` }}
        >
            <div className="container flex justify-center">
                <div className="w-7/12 text-center mb-16">
                    <h2 className="text-4.5xl text-imagine-white font-bold">
                        Contact Us
                    </h2>
                </div>
            </div>
            <div className="container flex justify-center">
                <div className="w-7/12">
                    <div className="bg-imagine-white p-10">
                        <h3 className="text-[1.5rem] mb-5">Contact Form</h3>

                        <form action="">
                            <div className="flex gap-4 mb-4">
                                <div>
                                    <label htmlFor="firstname">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        className="border mt-1.5 border-[#CED4DA] py-2 px-3 focus:outline-none focus:border-[#4383F4] w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        className="border mt-1.5 border-[#CED4DA] py-2 px-3 focus:outline-none focus:border-[#4383F4] w-full"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="border mt-1.5 border-[#CED4DA] py-2 px-3 focus:outline-none focus:border-[#4383F4] w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="border mt-1.5 border-[#CED4DA] py-2 px-3 focus:outline-none focus:border-[#4383F4] w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Leave your message here..."
                                    className="border mt-1.5 border-[#CED4DA] py-2 px-3 focus:outline-none focus:border-[#4383F4] w-full h-32"
                                />
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="imagine-blue-btn text-base cursor-pointer"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
