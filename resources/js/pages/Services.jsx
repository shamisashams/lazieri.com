//import Img1 from "../assets/images/services/1.png";
//import Img2 from "../assets/images/services/2.png";
//import Img3 from "../assets/images/services/3.png";
//import Img4 from "../assets/images/services/4.png";
//import bg from "../assets/images/services/bg.png";
import React from "react";
import Layout from "../Layouts/Layout";

const Services = ({seo}) => {
  return (
      <Layout seo={seo}>
          <div className="wrapper pb-20">
              <div className=" lg:text-5xl text-3xl mb-10 lg:mb-20  ">Services</div>
              <section className="grid lg:grid-cols-2 gap-20 lg:gap-y-72 relative">
                  <img
                      className="lg:block hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  -z-10"
                      src="/client/assets/images/services/bg.png"
                      alt=""
                  />
                  <div className="flex items-end">
                      <div>
                          <div className="lg:text-5xl text-2xl ">
                              measurement{" "}
                              <span className="opacity-10 lg:text-9xl text-7xl ">1</span>
                          </div>
                          <p className="opacity-50 text-justify md:text-base text-sm">
                              There are many variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some form, by
                              injected humour, or{" "}
                          </p>
                      </div>
                      <div className="w-32 h-40 ml-5 overflow-hidden shrink-0">
                          <img className="w-full h-full object-cover" src="/client/assets/images/services/1.png" alt="" />
                      </div>
                  </div>
                  <div className="flex items-end lg:-translate-y-20">
                      <div>
                          <div className="lg:text-5xl text-2xl ">
                              rendering{" "}
                              <span className="opacity-10 lg:text-9xl text-7xl ">3</span>
                          </div>
                          <p className="opacity-50 text-justify md:text-base text-sm">
                              There are many variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some form, by
                              injected humour, or{" "}
                          </p>
                      </div>
                      <div className="w-32 h-40 ml-5 overflow-hidden shrink-0">
                          <img className="w-full h-full object-cover" src="/client/assets/images/services/2.png" alt="" />
                      </div>
                  </div>
                  <div className="flex items-end">
                      <div className="w-32 h-40 mr-5 overflow-hidden shrink-0">
                          <img className="w-full h-full object-cover" src="/client/assets/images/services/3.png" alt="" />
                      </div>
                      <div>
                          <div className="lg:text-5xl text-2xl ">
                              primary drawing{" "}
                              <span className="opacity-10 lg:text-9xl text-7xl ">2</span>
                          </div>
                          <p className="opacity-50 text-justify md:text-base text-sm">
                              There are many variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some form, by
                              injected humour, or{" "}
                          </p>
                      </div>
                  </div>
                  <div className="flex items-end  lg:-translate-y-10">
                      <div className="w-32 h-40 mr-5 overflow-hidden shrink-0">
                          <img className="w-full h-full object-cover" src="/client/assets/images/services/4.png" alt="" />
                      </div>
                      <div>
                          <div className="lg:text-5xl text-2xl ">
                              Installation{" "}
                              <span className="opacity-10 lg:text-9xl text-7xl ">4</span>
                          </div>
                          <p className="opacity-50 text-justify md:text-base text-sm">
                              There are many variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some form, by
                              injected humour, or{" "}
                          </p>
                      </div>
                  </div>
              </section>
          </div>
      </Layout>

  );
};

export default Services;
