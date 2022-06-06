import React from "react";
import AboutImage from "../../images/undraw_bookmarks_r6up.svg";
import { FcCheckmark } from "react-icons/fc";

const About = () => {
    return (
        <div className="py-20 bg-[#F6F6F6]">
            <div className="container flex justify-center">
                <div className="w-7/12 text-center mb-16">
                    <h2 className="text-4.5xl text-imagine-black font-bold mb-4">
                        About Us
                    </h2>
                </div>
            </div>
            <div className="container flex flex-row items-center">
                <div className="w-7/12">
                    <img src={AboutImage} alt="communication" />
                </div>
                <div className="w-5/12 ml-24">
                    <h2 className="text-4.5xl font-bold mb-8">Our Mission</h2>
                    <p className="text-imagine-grays mb-8 leading-6">
                        Eos cumque optio dolores excepturi rerum temporibus
                        magni recusandae eveniet, totam omnis consectetur maxime
                        quibusdam expedita dolorem dolor nobis dicta labore
                        quaerat esse magnam unde, aperiam delectus! At maiores,
                        itaque.
                    </p>
                    <ul className="text-imagine-grays leading-10">
                        <li>
                            <FcCheckmark className="inline mr-3" />
                            Laborum enim quasi at modi
                        </li>
                        <li>
                            <FcCheckmark className="inline mr-3" />
                            Ad at tempore
                        </li>
                        <li>
                            <FcCheckmark className="inline mr-3" />
                            Labore quaerat esse
                        </li>
                    </ul>
                    <a className="imagine-blue-btn text-base mt-8" href="">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
