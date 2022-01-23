import React from "react";
import HeroImage from "../../images/hero.svg";

const Hero = () => {
    return (
        <section className="relative">
            <div className="container flex flex-row h-screen items-center">
                <div className="w-1/2">
                    <h1 className="text-5.5xl text-imagine-black font-bold mb-3">
                        Make Your Business More Profitable
                    </h1>
                    <p className="text-base font-light leading-7 text-imagine-grays mb-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam assumenda ea quo cupiditate facere deleniti
                        fuga officia.
                    </p>
                    <a className="imagine-blue-btn text-base" href="">
                        Get Started
                    </a>
                </div>
                <img
                    className="absolute right-20 bottom-10"
                    src={HeroImage}
                    alt="Hero Image"
                />
            </div>
        </section>
    );
};

export default Hero;
