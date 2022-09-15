import React from "react";
import Layout from "../Layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";

const Services = ({ seo, images }) => {
    const { localizations } = usePage().props;

    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    return (
        <Layout seo={seo}>
            <div className="wrapper pb-20">
                <div className=" lg:text-5xl text-3xl mb-10 lg:mb-20  ">
                    {__("client.services_title", localizations)}
                </div>
                <section className="grid lg:grid-cols-2 gap-20 lg:gap-y-72 relative">
                    <img
                        className="lg:block hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  -z-10"
                        src="/client/assets/images/services/bg.png"
                        alt=""
                    />
                    <div className="flex items-end">
                        <div>
                            <div className="lg:text-5xl text-2xl ">
                                {__("client.service1_title", localizations)}{" "}
                                <span className="opacity-10 lg:text-9xl text-7xl ">
                                    1
                                </span>
                            </div>
                            <p className="opacity-50 text-justify md:text-base text-sm">
                                {renderHTML(
                                    __(
                                        "client.service1_txt",
                                        localizations
                                    ).newLineToBr()
                                )}{" "}
                            </p>
                        </div>
                        <div className="w-32 h-40 ml-5 overflow-hidden shrink-0">
                            <img
                                className="w-full h-full object-cover"
                                src={images[0]}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex items-end lg:-translate-y-20">
                        <div>
                            <div className="lg:text-5xl text-2xl ">
                                {__("client.service3_title", localizations)}{" "}
                                <span className="opacity-10 lg:text-9xl text-7xl ">
                                    3
                                </span>
                            </div>
                            <p className="opacity-50 text-justify md:text-base text-sm">
                                {renderHTML(
                                    __(
                                        "client.service3_txt",
                                        localizations
                                    ).newLineToBr()
                                )}{" "}
                            </p>
                        </div>
                        <div className="w-32 h-40 ml-5 overflow-hidden shrink-0">
                            <img
                                className="w-full h-full object-cover"
                                src={images[1]}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex items-end">
                        <div className="w-32 h-40 mr-5 overflow-hidden shrink-0">
                            <img
                                className="w-full h-full object-cover"
                                src={images[2]}
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="lg:text-5xl text-2xl ">
                                {__("client.service2_title", localizations)}{" "}
                                <span className="opacity-10 lg:text-9xl text-7xl ">
                                    2
                                </span>
                            </div>
                            <p className="opacity-50 text-justify md:text-base text-sm">
                                {renderHTML(
                                    __(
                                        "client.service2_txt",
                                        localizations
                                    ).newLineToBr()
                                )}{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-end  lg:-translate-y-10">
                        <div className="w-32 h-40 mr-5 overflow-hidden shrink-0">
                            <img
                                className="w-full h-full object-cover"
                                src={images[3]}
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="lg:text-5xl text-2xl ">
                                {__("client.service4_title", localizations)}{" "}
                                <span className="opacity-10 lg:text-9xl text-7xl ">
                                    4
                                </span>
                            </div>
                            <p className="opacity-50 text-justify md:text-base text-sm">
                                {renderHTML(
                                    __(
                                        "client.service4_txt",
                                        localizations
                                    ).newLineToBr()
                                )}{" "}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Services;
