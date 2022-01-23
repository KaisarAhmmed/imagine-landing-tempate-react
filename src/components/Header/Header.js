import React from "react";
import Logo from "../../images/logo.png";

function Header() {
    return (
        <header className="py-6 absolute w-full top-0 z-50">
            <div className="container flex flex-row items-center">
                <div className="basis-1/4">
                    <a href="">
                        <img className="h-8" src={Logo} alt="logo" />
                    </a>
                </div>
                <div className="basis-3/4">
                    <nav className="">
                        <ul className="flex flex-row justify-end text-imagine-black">
                            <li>
                                <a className="menu_btn" href="">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="menu_btn" href="">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a className="menu_btn" href="">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="menu_btn" href="">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a className="menu_btn" href="">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="menu_btn" href="">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
