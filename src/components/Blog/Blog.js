import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const blogData = [
        {
            id: 1,
            title: "Make Your Business More Profitable",
            image: "https://preview.colorlib.com/theme/imagine/images/ximg_1.jpg.pagespeed.ic.CEoAKbN9Wd.webp",
            author: "Ham Brook",
            date: "June 6, 2022",
            category: "News",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
            url: "https://www.google.com",
        },
        {
            id: 2,
            title: "Make Your Business More Profitable",
            image: "https://preview.colorlib.com/theme/imagine/images/ximg_2.jpg.pagespeed.ic.f8blglsL85.webp",
            author: "Ham Brook",
            date: "June 6, 2022",
            category: "News",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
            url: "https://www.google.com",
        },
        {
            id: 3,
            title: "Make Your Business More Profitable",
            image: "https://preview.colorlib.com/theme/imagine/images/ximg_3.jpg.pagespeed.ic.PYTtDsT5yr.webp",
            author: "Ham Brook",
            date: "June 6, 2022",
            category: "News",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
            url: "https://www.google.com",
        },
    ];
    return (
        <section className="py-20">
            <div className="container flex justify-center">
                <div className="w-7/12 text-center mb-16">
                    <h2 className="text-4.5xl text-imagine-black font-bold">
                        Blog Posts
                    </h2>
                </div>
            </div>
            <div className="container grid grid-cols-3 gap-[30px]">
                {blogData.map((blog) => (
                    <div key={blog.id} className="">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-[210px] object-cover mb-6"
                        />
                        <div>
                            <Link to={blog.url}>
                                <h3 className="text-[30px] text-imagine-black mb-2 leading-9">
                                    {blog.title}
                                </h3>
                            </Link>
                            <p className="text-imagine-grays flex text-[14px] mb-6">
                                <span className="pr-7 relative before:absolute before:h-1.5 before:w-1.5 before:bg-imagine-grays before:rounded-full before:right-2.5 before:top-2">
                                    {blog.author}
                                </span>
                                <span className="pr-7 relative before:absolute before:h-1.5 before:w-1.5 before:bg-imagine-grays before:rounded-full before:right-2.5 before:top-2">
                                    {blog.date}
                                </span>
                                <span>
                                    <Link
                                        to={blog.url}
                                        className="text-imagine-blue"
                                    >
                                        {blog.category}
                                    </Link>
                                </span>
                            </p>
                            <p className="text-imagine-grays leading-7 mb-5">
                                {blog.desc}
                            </p>
                            <p>
                                <Link
                                    to={blog.url}
                                    className="text-imagine-blue"
                                >
                                    Continue Reading...
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
