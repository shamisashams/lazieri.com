import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import Arrow from "../assets/images/svg/arrow-left.svg";
//import ArrowWhite from "../assets/images/svg/arrow-left-white.svg";
import { FiChevronRight } from "react-icons/fi";
//import Img1 from "../assets/images/gallery/1.png";
//import Img2 from "../assets/images/gallery/2.png";
//import Img3 from "../assets/images/gallery/3.png";
//import Img4 from "../assets/images/gallery/4.png";
//import Img5 from "../assets/images/gallery/5.png";
//import Img6 from "../assets/images/gallery/6.png";
//import Img7 from "../assets/images/gallery/7.png";
//import Img8 from "../assets/images/gallery/8.png";
//import Img9 from "../assets/images/gallery/9.png";
//import Img10 from "../assets/images/gallery/10.png";
//import Img11 from "../assets/images/gallery/11.png";
//import Img12 from "../assets/images/gallery/12.png";
//import Img13 from "../assets/images/gallery/13.png";
//import Img14 from "../assets/images/gallery/14.png";
//import Img15 from "../assets/images/gallery/15.png";

import Layout from "../Layouts/Layout";

const Home = ({seo}) => {
  /*const categories = [
    {
      link: "/",
      name: "Kitchen",
      img: "/client/assets/images/gallery/1.png",
    },
    {
      link: "/",
      name: "Bedroom",
      img: "/client/assets/images/gallery/2.png",
    },
    {
      link: "/",
      name: "living room",
      img: "/client/assets/images/gallery/3.png",
    },
    {
      link: "/",
      name: "Special Offer",
      img: "/client/assets/images/gallery/4.png",
    },
    {
      link: "/",
      name: "External Facade Cladding",
      img: "/client/assets/images/gallery/5.png",
    },
    {
      link: "/",
      name: "Open Area",
      img: "/client/assets/images/gallery/6.png",
    },
  ];*/

    const {categories,gallery,images,special_offer} = usePage().props;

  /*const gallery = [
    {
      link: "/",
      img: "/client/assets/images/gallery/6.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/7.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/8.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/9.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/10.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/11.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/12.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/13.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/2.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/3.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/4.png",
    },
    {
      link: "/",
      img: "/client/assets/images/gallery/5.png",
    },
  ];*/
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
                              href={route('client.category.show',item.slug)}
                              key={index}
                              className="w-full text-center group"
                          >
                              <div className="relative w-full sm:h-80 h-60 overflow-hidden mb-4">
                                  <img
                                      className="w-full h-full object-cover scale-110  group-hover:scale-100 transition-all duration-500"
                                      src={item.file}
                                      alt=""
                                  />
                                  <div className="absolute left-0 top-0 w-full h-full bg-gray-900/[0.3] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                                      <span>Learn more</span>
                                  </div>
                              </div>
                              <div className="text-lg font-bold">{item.title}</div>
                          </Link>
                      );
                  })}
              </section>
              <section className="wrapper flex flex-col md:flex-row md:items-center justify-between pb-20">
                  <div className="xl:pl-20 md:mr-10 mb-10 md:mb-0 max-w-2xl ">
                      <div className="xl:text-7xl lg:text-5xl text-4xl md:mb-10 mb-5">
                          About us
                      </div>
                      <p className="text-justify md:mb-10 mb-5">
                          There are many variations of passages of Lorem Ipsum available, but
                          the majority have suffered alteration in some form, by injected
                          humour, or randomised words which don't look even slightly
                          believable. There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some form,
                          by injected humour, or randomised words which don't look even
                          slightly believable.
                      </p>
                      <Link className="text-lg font-bold" href={route('client.about.index')}>
                          Learn more
                          <img className="inline-block ml-4" src="/client/assets/images/svg/arrow-left.svg" alt="" />
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
                          {special_offer ? <div className="p-6 border border-solid border-white shrink-0">
                              <div className="bg-white p-4">
                                  <div className="opacity-50">{special_offer.categories[0].title}</div>
                                  <div className="text-sm mt-2 mb-6">
                                      {special_offer.title}
                                  </div>
                                  <img className="mx-auto" src={special_offer.latest_image.file_url_full} alt="" />
                                  <Link
                                      href={route('client.contact.index')}
                                      className="flex justify-between items-center bg-custom-dark text-white px-4 py-2"
                                  >
                                      <span>Make an Order</span>
                                      <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/[0.5] text-custom-dark">
                                          <FiChevronRight />
                                      </div>
                                  </Link>
                              </div>
                          </div>:null}
                          <div className="text-white md:ml-20 max-w-2xl mt-10 md:mt-0">
                              <div className="opacity-md:50">
                                  There are many variations of passages of Lorem Ipsum available,
                                  but the majority have suffered alteration in some form, by
                                  injected humour, or randomised words which don't look even
                                  slightly believable.
                              </div>
                              <div className="xl:text-7xl lg:text-5xl text-4xl my-6 ">
                                  Special <br />
                                  Offer
                              </div>
                              <Link className="text-lg font-bold" href={route('client.category.special')}>
                                  View All
                                  <img className="inline-block ml-4" src="/client/assets/images/svg/arrow-left-white.svg" alt="" />
                              </Link>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="wrapper2 py-20">
                  <div className="flex justify-between lg:items-center items-end mb-5 flex-col sm:flex-row">
                      <div className="flex  lg:items-center  flex-col lg:flex-row">
                          <div className=" xl:text-7xl lg:text-5xl text-4xl ">Gallery</div>
                          <div className="opacity-50 max-w-xl lg:ml-5">
                              There are many variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some form, by
                              injected
                          </div>
                      </div>
                      <Link className="text-lg font-bold" href={route('client.gallery.index')}>
                          Learn more
                          <img className="inline-block ml-4" src="/client/assets/images/svg/arrow-left.svg" alt="" />
                      </Link>
                  </div>
                  <div className="flex flex-wrap justify-between">
                      {gallery.map((item, index) => {
                          return (
                              <Link
                                  href={item.link}
                                  key={index}
                                  className="relative sm:h-80 h-auto flex-grow group"
                              >
                                  <img
                                      className="w-full h-full object-cover"
                                      src={item.img}
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
