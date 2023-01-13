import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import Arrow from "../assets/images/svg/arrow-left.svg";
//import ArrowWhite from "../assets/images/svg/arrow-left-white.svg";
import { FiChevronRight } from "react-icons/fi";

import Layout from "../Layouts/Layout";

const Home = ({ seo }) => {
    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    const { categories, gallery, images, special_offer, localizations } =
        usePage().props;

    return (
        <Layout seo={seo}>
            <>
                <section className="wrapper">
                    <HeroSlider />
                </section>
                <section className="wrapper grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
                    {categories.map((item, index) => {
                        return (
                            <Link
                                href={route("client.category.show", item.slug)}
                                key={index}
                                className="w-full text-center group"
                            >
                                <div className="relative w-full sm:h-80 h-60 overflow-hidden mb-4">
                                    <img
                                        className="w-full h-full object-cover scale-110  group-hover:scale-100 transition-all duration-500"
                                        src={item.thumb}
                                        alt=""
                                    />
                                    <div className="absolute left-0 top-0 w-full h-full bg-gray-900/[0.3] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <span>Learn more</span>
                                    </div>
                                </div>
                                <div className="text-lg font-bold">
                                    {item.title}
                                </div>
                            </Link>
                        );
                    })}
                </section>
                <section className="wrapper flex flex-col md:flex-row md:items-center justify-between pb-20">
                    <div className="xl:pl-20 md:mr-10 mb-10 md:mb-0 max-w-2xl ">
                        <div className="xl:text-5xl lg:text-4xl sm:text-3xl text-xl  md:mb-10 mb-5">
                            {__("client.home_about_header", localizations)}
                        </div>
                        <p className="text-justify md:mb-10 mb-5">
                            {renderHTML(
                                __(
                                    "client.home_about_text",
                                    localizations
                                ).newLineToBr()
                            )}
                        </p>
                        <Link
                            className="text-lg font-bold"
                            href={route("client.about.index")}
                        >
                            {__("client.learn_more", localizations)}
                            <img
                                className="inline-block ml-4"
                                src="/client/assets/images/svg/arrow-left.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                    <img className="md:w-1/2" src={images[0]} alt="" />
                </section>
                <section
                    className="wrapper bg-cover bg-center"
                    style={{ backgroundImage: `url('${images[1]}')` }}
                >
                    <div className="w-full h-full bg-neutral-900/[0.4] py-20">
                        <div className="wrapper2 flex flex-col md:flex-row md:items-center justify-center">
                            {special_offer ? (
                                <div className="p-6 border border-solid border-white shrink-0">
                                    <div className="bg-white p-4">
                                        <div className="opacity-50">
                                            {special_offer.categories[0].title}
                                        </div>
                                        <div className="text-sm mt-2 mb-6">
                                            {special_offer.title}
                                        </div>
                                        <img
                                            className="mx-auto"
                                            src={
                                                special_offer.latest_image
                                                    .file_url_full
                                            }
                                            alt=""
                                        />
                                        <Link
                                            href={route("client.contact.index")}
                                            className="flex justify-between items-center bg-custom-dark text-white px-4 py-2"
                                        >
                                            <span>
                                                {__(
                                                    "client.home_make_order",
                                                    localizations
                                                )}
                                            </span>
                                            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/[0.5] text-custom-dark">
                                                <FiChevronRight />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ) : null}
                            <div className="text-white md:ml-20 max-w-2xl mt-10 md:mt-0">
                                <div className="opacity-md:50">
                                    {renderHTML(
                                        __(
                                            "client.home_special_offer_txt1",
                                            localizations
                                        ).newLineToBr()
                                    )}
                                </div>
                                <div className="xl:text-5xl lg:text-4xl sm:text-3xl text-xl  my-6 ">
                                    {renderHTML(
                                        __(
                                            "client.home_special_offer_txt2",
                                            localizations
                                        ).newLineToBr()
                                    )}
                                </div>
                                <Link
                                    className="text-lg font-bold"
                                    href={route("client.category.show",'Specialoffer')}
                                >
                                    {__("client.view_all", localizations)}
                                    <img
                                        className="inline-block ml-4"
                                        src="/client/assets/images/svg/arrow-left-white.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wrapper2 py-20">
                    <div className="flex justify-between lg:items-center items-end mb-5 flex-col sm:flex-row">
                        <div className="flex  lg:items-center  flex-col lg:flex-row">
                            <div className=" xl:text-5xl lg:text-4xl sm:text-3xl text-xl  ">
                                {__("client.home_gallery", localizations)}
                            </div>
                            <div className="opacity-50 max-w-xl lg:ml-5">
                                {renderHTML(
                                    __(
                                        "client.home_gallery_txt",
                                        localizations
                                    ).newLineToBr()
                                )}
                            </div>
                        </div>
                        <Link
                            className="text-lg font-bold"
                            href={route("client.gallery.index")}
                        >
                            {__("client.learn_more", localizations)}
                            <img
                                className="inline-block ml-4"
                                src="/client/assets/images/svg/arrow-left.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        {gallery.map((item, index) => {
                            return (
                                <Link
                                    href={route("client.gallery.index")}
                                    key={index}
                                    className="relative sm:h-80 h-auto flex-grow group"
                                >
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.thumb}
                                        alt=""
                                    />
                                    <div className="absolute w-full h-full left-0 top-0 bg-white opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </>
        </Layout>
    );
};

export default Home;
