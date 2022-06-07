import React from "react";
import BigFeatureImage from "../../images/undraw_gift_card_6ekc.svg";
import AuthorImage from "../../images/person1.jpeg";

const FeaturesBig = ({ image }) => {
    console.log(image);
    return (
        <div className="feature-big">
            <div className="container flex flex-row items-center py-20">
                <div className="w-7/12" data-aos="fade-right">
                    <img src={BigFeatureImage} alt="communication" />
                </div>
                <div className="w-5/12 ml-14">
                    <h2 className="text-4.5xl font-bold mb-8">
                        Communicate and gather feedback
                    </h2>
                    <p className="text-imagine-grays mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem neque nisi architecto autem molestias
                        corrupti officia veniam.
                    </p>
                    <div
                        className="border-y border-r border-l-[10px] rounded p-5 border-[#4384F4]"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <div className="flex mb-8">
                            <img
                                className="w-12 rounded-full mr-5"
                                src={AuthorImage}
                            />
                            <div className="flex flex-col">
                                <h4>Grey Simpson</h4>
                                <p>Co-Founder, XYZ Inc.</p>
                            </div>
                        </div>
                        <p className="text-imagine-grays">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus vitae ipsa asperiores inventore
                            aperiam iure?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesBig;
