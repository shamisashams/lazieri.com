//import Img10 from "../assets/images/gallery/10.png";
//import Img9 from "../assets/images/gallery/9.png";
//import bg from "../assets/images/other/2.png";
import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";

const About = ({ seo, images }) => {
    const [mvContent, setMvContent] = useState(0);

    const { localizations } = usePage().props;

    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    return (
        <Layout seo={seo}>
            <>
                <section className="mb-10 lg:h-96 h-60 w-full">
                    <img
                        src={images[0]}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </section>
                <div className="wrapper flex flex-col lg:flex-row">
                    <div className="lg:mr-20 lg:w-1/2">
                        <div className="opacity-50 text-xl">
                            {__("client.about_title", localizations)}
                        </div>
                        <div className=" lg:text-5xl text-3xl mb-10 lg:mb-20  mt-2">
                            {renderHTML(
                                __(
                                    "client.about_h1",
                                    localizations
                                ).newLineToBr()
                            )}
                        </div>
                        <p className="opacity-50 text-justify mb-24 ">
                            {renderHTML(
                                __(
                                    "client.about_text1",
                                    localizations
                                ).newLineToBr()
                            )}
                        </p>
                        <img
                            src={images[1]}
                            alt=""
                            className="mb-10 max-h-96"
                        />
                    </div>
                    <div>
                        <img
                            src={images[2]}
                            alt=""
                            className="mb-20 max-h-96"
                        />
                        <div className=" lg:text-5xl text-3xl mb-10  mt-2">
                            {renderHTML(
                                __(
                                    "client.about_h2",
                                    localizations
                                ).newLineToBr()
                            )}
                        </div>
                        <p className="opacity-50 text-justify mb-14 max-w-md">
                            {renderHTML(
                                __(
                                    "client.about_text2",
                                    localizations
                                ).newLineToBr()
                            )}
                        </p>
                        <div className="flex mb-5">
                            <button
                                onClick={() => setMvContent(0)}
                                className={`text-lg mr-5 ${
                                    mvContent === 0
                                        ? "opacity-100"
                                        : "opacity-50"
                                }`}
                            >
                                {__("client.about_tab1_title", localizations)}
                            </button>
                            <button
                                onClick={() => setMvContent(1)}
                                className={`text-lg ${
                                    mvContent === 1
                                        ? "opacity-100"
                                        : "opacity-50"
                                } `}
                            >
                                {__("client.about_tab2_title", localizations)}
                            </button>
                        </div>
                        {mvContent === 0 ? (
                            <>
                                <p className="opacity-50 text-justify mb-5 max-w-md">
                                    {renderHTML(
                                        __(
                                            "client.about_tab1_p1",
                                            localizations
                                        ).newLineToBr()
                                    )}
                                </p>
                                <p className="opacity-50 text-justify mb-5 max-w-md">
                                    {renderHTML(
                                        __(
                                            "client.about_tab1_p2",
                                            localizations
                                        ).newLineToBr()
                                    )}
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="opacity-50 text-justify mb-5 max-w-md">
                                    {renderHTML(
                                        __(
                                            "client.about_tab2_p1",
                                            localizations
                                        ).newLineToBr()
                                    )}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </>
        </Layout>
    );
};

export default About;
