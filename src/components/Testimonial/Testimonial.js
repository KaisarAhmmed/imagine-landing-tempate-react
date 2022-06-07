import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: "John Smith",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
            photo: "https://i.ibb.co/6DcRdkr/xperson-2-jpg-pagespeed-ic-t-EQm-Go-VJYm.png",
        },
        {
            id: 2,
            name: "Robert Agular",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
            photo: "https://i.ibb.co/kH3kvKb/xperson-3-jpg-pagespeed-ic-RSh-AAJX8ye.png",
        },
        {
            id: 3,
            name: "Carla Smith",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
            photo: "https://i.ibb.co/F5qc55k/xperson-1-jpg-pagespeed-ic-7rs-O3-E8-HOL-1.png",
        },
        {
            id: 4,
            name: "Emely Hoper",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
            photo: "https://i.ibb.co/Cw43Zhn/xperson-6-jpg-pagespeed-ic-s-Auv9j-H-0q.jpg",
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="pt-20 pb-28 bg-[#F6F6F6]">
            <div className="container flex justify-center">
                <div className="w-7/12 text-center mb-16">
                    <h2 className="text-4.5xl text-imagine-black font-bold">
                        Testimonials
                    </h2>
                </div>
            </div>
            <div className="container flex flex-row justify-center items-center">
                <div className="w-7/12">
                    <Slider {...settings}>
                        {reviews.map((review) => (
                            <div key={review.id}>
                                <img
                                    src={review.photo}
                                    alt={review.name}
                                    className="w-[100px] rounded-full shadow-ig-t-box-shadow mx-auto mb-6"
                                />
                                <p className="text-center text-imagine-grays text-3.5xl leading-8 mb-6">
                                    {review.text}
                                </p>
                                <p className="text-center mb-5 font-bold">
                                    {review.name}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
