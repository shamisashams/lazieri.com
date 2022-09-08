//import Showcase from "../assets/images/gallery/16.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, FreeMode } from "swiper";
import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import Moment from 'moment';
import { Link, usePage } from "@inertiajs/inertia-react";

//import Img13 from "../assets/images/gallery/13.png";
//import Img14 from "../assets/images/gallery/14.png";
//import Img12 from "../assets/images/gallery/12.png";
//import Img11 from "../assets/images/gallery/11.png";
//import Img10 from "../assets/images/gallery/10.png";
//import Img9 from "../assets/images/gallery/9.png";
//import Img8 from "../assets/images/gallery/8.png";
//import Img7 from "../assets/images/gallery/7.png";

const SingleProject = ({seo}) => {
  const imgSlider = ["/client/assets/images/gallery/13.png", "/client/assets/images/gallery/14.png", "/client/assets/images/gallery/12.png", "/client/assets/images/gallery/11.png", "/client/assets/images/gallery/10.png", "/client/assets/images/gallery/9.png", "/client/assets/images/gallery/8.png", "/client/assets/images/gallery/7.png"];

  const {product,category_path,present,slider, localizations} = usePage().props;


    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

  console.log(slider);
  return (
      <Layout seo={seo}>
          <div className="wrapper">
              <section className="mb-10">
                  <div className="opacity-50 text-lg mb-3">{category_path[0].title}</div>
                  <div className=" lg:text-5xl text-4xl">{product.title}</div>
              </section>
              <section>
                  <img src={present.main} alt="" />
              </section>
              <section className="grid md:grid-cols-2 lg:gap-20 gap-10 sm:my-20 my-10">
                  <div className="flex w-full justify-between">
                      <div>
                          <div className="opacity-50 ">{__('client.date',localizations)}</div>
                          <div className="sm:text-2xl text-lg sm:mb-5 mb-3">{Moment(product.created_at).format('DD.MM.YYYY')}</div>
                          {/*<div className="opacity-50 ">Customer</div>
                          <div className="sm:text-2xl text-lg sm:mb-5 mb-3">
                              Customer name
                          </div>
                          <div className="opacity-50 ">Location</div>
                          <div className="sm:text-2xl text-lg sm:mb-5 mb-3">Tbilisi</div>*/}
                          {product.attributes.left.map((item,index) => {
                              return (<div><div className="opacity-50 ">{item.attribute_label}</div>
                                  <div className="sm:text-2xl text-lg sm:mb-5 mb-3">{item.option_label}</div></div>)
                          })}
                      </div>
                      <div className="text-right">
                          {/*<div className="opacity-50 ">Material</div>
                          <div className="sm:text-2xl text-lg sm:mb-5 mb-3">Red Wood</div>
                          <div className="opacity-50 ">Second Spec</div>
                          <div className="sm:text-2xl text-lg sm:mb-5 mb-3">Option one</div>
                          <div className="opacity-50 ">third Spec</div>
                          <div className="sm:text-2xl text-lg sm:mb-5 mb-3">Option two</div>*/}

                          {product.attributes.right.map((item,index) => {
                              return (<div><div className="opacity-50 ">{item.attribute_label}</div>
                                  <div className="sm:text-2xl text-lg sm:mb-5 mb-3">{item.option_label}</div></div>)
                          })}
                      </div>
                  </div>
                  <div className="max-w-md">
                      <div className=" lg:text-5xl text-3xl mb-5">
                          {product.head_1}
                      </div>
                      <p className="text-justify">
                          {renderHTML(product.text_1.newLineToBr())}
                      </p>
                  </div>
                  <div>
                      <img src={present.in_middle_1} alt="" />
                      <div className=" lg:text-5xl text-3xl mb-5 mt-10">
                          {product.head_2}
                      </div>
                      <p className="text-justify max-w-md">
                          {renderHTML(product.text_2.newLineToBr())}
                      </p>
                  </div>
                  <div>
                      <img src={present.in_middle_2} alt="" />
                  </div>
              </section>
              <section className="py-20">
                  <Swiper
                      scrollbar={
                          {
                              // hide: true,
                          }
                      }
                      slidesPerView={4}
                      spaceBetween={30}
                      modules={[Scrollbar, FreeMode]}
                      className="mySwiper scrollbarSlider"
                      freeMode
                      grabCursor={true}
                      breakpoints={{
                          200: {
                              slidesPerView: 1,
                              spaceBetween: 10,
                          },
                          500: {
                              slidesPerView: 2,
                              spaceBetween: 10,
                          },
                          700: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                          },
                          1200: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                          },
                      }}
                  >
                      {slider.map((item, index) => {
                          return (
                              <SwiperSlide key={index}>
                                  <div className="h-72 overflow-hidden pb-10">
                                      <img
                                          className="h-full w-full object-cover"
                                          src={item.file_url_full}
                                          alt=""
                                      />
                                  </div>
                              </SwiperSlide>
                          );
                      })}
                  </Swiper>
              </section>
          </div>
      </Layout>

  );
};

export default SingleProject;
