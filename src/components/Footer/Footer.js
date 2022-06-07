import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pt-16 pb-12">
            <div className="container flex flex-col">
                <div className="w-full flex justify-center mb-12">
                    <a
                        href=""
                        className="mx-4 text-imagine-blue duration-300 hover:text-imagine-grays"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href=""
                        className="mx-4 text-imagine-blue duration-300 hover:text-imagine-grays"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href=""
                        className="mx-4 text-imagine-blue duration-300 hover:text-imagine-grays"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href=""
                        className="mx-4 text-imagine-blue duration-300 hover:text-imagine-grays"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href=""
                        className="mx-4 text-imagine-blue duration-300 hover:text-imagine-grays"
                    >
                        <FaPinterest />
                    </a>
                </div>
                <div className="w-full flex justify-center">
                    <p className="text-imagine-grays">
                        Copyright ©2022 All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
