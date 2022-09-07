//import Img10 from "../assets/images/gallery/10.png";
//import Img9 from "../assets/images/gallery/9.png";
//import bg from "../assets/images/other/2.png";
import React, { useState } from "react";
import Layout from "../Layouts/Layout";

const About = ({seo, images}) => {
  const [mvContent, setMvContent] = useState(0);
  return (
      <Layout seo={seo}>
          <>
              <section className="mb-10 lg:h-96 h-60 w-full">
                  <img src={images[0]} alt="" className="w-full h-full object-cover" />
              </section>
              <div className="wrapper flex flex-col lg:flex-row">
                  <div className="lg:mr-20 xl:w-1/3">
                      <div className="opacity-50 text-xl">About Us</div>
                      <div className=" lg:text-5xl text-3xl mb-10 lg:mb-20  mt-2">
                          We create comfort <br /> and style
                      </div>
                      <p className="opacity-50 text-justify mb-24 max-w-sm">
                          There are many variations of passages of Lorem Ipsum available, but
                          the majority have suffered alteration in some form, by injected
                          humour, or randomised words which don't look even slightly
                          believable.
                      </p>
                      <img src={images[1]} alt="" className="mb-10 max-h-96" />
                  </div>
                  <div>
                      <img src={images[2]} alt="" className="mb-20 max-h-96" />
                      <div className=" lg:text-5xl text-3xl mb-10  mt-2">
                          Why choose us?
                      </div>
                      <p className="opacity-50 text-justify mb-14 max-w-md">
                          There are many variations of passages of Lorem Ipsum available, but
                          the majority have suffered alteration in some form, by injected
                          humour, or randomised words which don't look even slightly
                          believable.
                      </p>
                      <div className="flex mb-5">
                          <button
                              onClick={() => setMvContent(0)}
                              className={`text-lg mr-5 ${
                                  mvContent === 0 ? "opacity-100" : "opacity-50"
                              }`}
                          >
                              Mission
                          </button>
                          <button
                              onClick={() => setMvContent(1)}
                              className={`text-lg ${
                                  mvContent === 1 ? "opacity-100" : "opacity-50"
                              } `}
                          >
                              Vision
                          </button>
                      </div>
                      {mvContent === 0 ? (
                          <>
                              <p className="opacity-50 text-justify mb-5 max-w-md">
                                  There are many variations of passages of Lorem Ipsum available,
                                  but the majority have suffered alteration in some form, by
                                  injected humour, or randomised words which don't look even
                                  slightly believable.
                              </p>
                              <p className="opacity-50 text-justify mb-5 max-w-md">
                                  There are many variations of passages of Lorem Ipsum available,
                                  but the majority have suffered alteration in some form, by
                                  injected humour, or randomised words which don't look even
                                  slightly believable.
                              </p>
                          </>
                      ) : (
                          <>
                              <p className="opacity-50 text-justify mb-5 max-w-md">
                                  Lazier is a Georgian brand that has been creating customized
                                  furniture for both corporate clients and individuals since 2013.
                                  The enterprise is equipped with the latest European equipment
                                  and works with high-quality wood, Corian (DuPont Corian®) and
                                  Neolith (TheSize Neolith®) materials. To date, the company has
                                  completed more than five hundred successful projects for
                                  individuals and faithfully serves many large companies in the
                                  public and private sectors.
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
