//import bg from "../assets/images/other/3.png";
//import Partner1 from "../assets/images/partners/1.png";
//import Partner2 from "../assets/images/partners/2.png";
//import Partner3 from "../assets/images/partners/3.png";
//import Partner4 from "../assets/images/partners/4.png";
//import Partner5 from "../assets/images/partners/5.png";
//import Partner6 from "../assets/images/partners/6.png";
//import Partner7 from "../assets/images/partners/7.png";
//import Partner8 from "../assets/images/partners/8.png";
//import Partner9 from "../assets/images/partners/9.png";
//import Partner10 from "../assets/images/partners/10.png";
//import Partner11 from "../assets/images/partners/11.png";
//import Partner12 from "../assets/images/partners/12.png";
//import Partner13 from "../assets/images/partners/13.png";
//import Partner14 from "../assets/images/partners/14.png";
//import Partner15 from "../assets/images/partners/15.png";
//import Partner16 from "../assets/images/partners/16.png";
//import Partner17 from "../assets/images/partners/17.png";
//import Partner18 from "../assets/images/partners/18.png";
import React from "react";
import Layout from "../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";

const Partners = ({seo}) => {

    const {partners, images} = usePage().props;
    console.log(partners)
  /*const partners = [
    {
      logo: "/client/assets/images/partners/1.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/2.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/3.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/4.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/5.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/6.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/7.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/8.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/9.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/10.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/11.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/12.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/13.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/14.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/15.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/16.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/17.png",
      name: "co Name",
    },
    {
      logo: "/client/assets/images/partners/18.png",
      name: "co Name",
    },
  ];*/
  return (
      <Layout seo={seo}>
          <>
              <section className="mb-10 lg:h-96 h-60 w-full">
                  <img src={images[0]} alt="" className="w-full h-full object-cover" />
              </section>
              <section className="wrapper">
                  <div>Our partners</div>
                  <div className=" lg:text-5xl text-3xl mb-10 lg:mb-20  ">
                      We are trusted by many <br />
                      leading companies in Georgia
                  </div>
                  <div className="block pb-40 text-center lg:text-left">
                      {partners.map((partner, index) => {
                          return (
                              <div
                                  key={index}
                                  className="w-72 mx-3 mb-12 text-center inline-block grayscale transition-all duration-300 hover:grayscale-0"
                              >
                                  <img className="mx-auto mb-5 " src={partner.file_url_full} alt="" />
                                  <p className="text-sm ">{partner.company_name}</p>
                              </div>
                          );
                      })}
                  </div>
              </section>
          </>
      </Layout>

  );
};

export default Partners;
