import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../data/data";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
    return (
        <section className="relative py-20">
            <div className="container flex justify-center">
                <div className="w-7/12 text-center mb-24">
                    <h1 className="text-4.5xl text-imagine-black font-bold mb-4">
                        Our Team
                    </h1>
                    <p className="text-3.5xl text-imagine-grays leading-8 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fuga quos quaerat sapiente nam, id vero.
                    </p>
                </div>
            </div>
            <div className="container grid grid-cols-3 gap-y-10 gap-x-8">
                {TeamData.map((team) => (
                    <div className="group" key={team.id}>
                        <div className="mb-7 relative overflow-hidden">
                            <img
                                src={team.image}
                                alt={team.name}
                                className="duration-300 group-hover:scale-105"
                            />
                            <div className="bg-[#4384F4] flex justify-center text-imagine-white p-5 duration-300 absolute -bottom-[60px] w-full group-hover:bottom-0">
                                <Link
                                    to={team.social.fb}
                                    className="mx-2 text-[14px]"
                                >
                                    <FaFacebookF />
                                </Link>
                                <Link
                                    to={team.social.tw}
                                    className="mx-2 text-[14px]"
                                >
                                    <FaTwitter />
                                </Link>
                                <Link
                                    to={team.social.in}
                                    className="mx-2 text-[14px]"
                                >
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[18px] text-imagine-black mb-1.5">
                                {team.name}
                            </h3>
                            <p className="text-[12px] uppercase text-imagine-blue mb-3">
                                {team.designation}
                            </p>
                            <p className="text-imagine-grays leading-7">
                                {team.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
