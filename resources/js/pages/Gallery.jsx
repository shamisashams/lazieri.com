import React, { useState, useRef, useEffect } from "react";
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
import { IoMdClose } from "react-icons/io";
import Layout from "../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";

const Gallery = ({seo}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popItem, setPopItem] = useState(0);
  /*const gallery = [
    "/client/assets/images/gallery/1.png",
    "/client/assets/images/gallery/2.png",
    "/client/assets/images/gallery/3.png",
    "/client/assets/images/gallery/4.png",
    "/client/assets/images/gallery/5.png",
    "/client/assets/images/gallery/6.png",
    "/client/assets/images/gallery/7.png",
    "/client/assets/images/gallery/8.png",
    "/client/assets/images/gallery/9.png",
    "/client/assets/images/gallery/10.png",
    "/client/assets/images/gallery/11.png",
    "/client/assets/images/gallery/12.png",
    "/client/assets/images/gallery/13.png",
  ];*/
  const openPopup = (index) => {
    setPopItem(index);
    setShowPopup(true);
  };
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowPopup(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const {gallery,localizations} = usePage().props;
//console.log(gallery)

    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });


    let links = function (links) {
        let rows = [];
        //links.shift();
        //links.splice(-1);
        {
            links.map(function (item, index) {
                if (index > 0 && index < links.length - 1) {
                    rows.push(
                        <Link
                            href={item.url}
                        >
                            <span className={item.active ? "text-lg px-5 opacity-100" : "text-lg px-5 opacity-50"}>{item.label}</span>

                        </Link>
                    );
                }
            });
        }
        return  rows.length > 1 ? rows : null;
    };

    let linksPrev = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[0].url}>
                <Arrow color="#2F3E51" rotate="90" />
                <Arrow color="#2F3E51" rotate="90" />
            </Link>
        ) : null;
    };
    let linksNext = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[links.length - 1].url}>
                <Arrow color="#2F3E51" rotate="-90" />
                <Arrow color="#2F3E51" rotate="-90" />
            </Link>
        ) : null;
    };

  return (
      <Layout seo={seo}>
          <>
              <div className="wrapper flex  lg:items-center justify-between  flex-col lg:flex-row">
                  <div className=" xl:text-7xl lg:text-5xl text-4xl ">{__('client.gallery_title',localizations)}</div>
                  <div className="opacity-50 max-w-xl ">
                      {renderHTML(__('client.gallery_text',localizations).newLineToBr())}
                  </div>
              </div>
              <section className=" py-10">
                  <div className="flex justify-between lg:items-center items-end mb-5 flex-col sm:flex-row"></div>
                  <div className="flex flex-wrap justify-between">
                      {gallery.data.map((item, index) => {
                          return (
                              <div
                                  onClick={() => openPopup(index)}
                                  key={index}
                                  className="relative sm:h-80 h-auto flex-grow group cursor-pointer"
                              >
                                  <img className="w-full h-full object-cover" src={item.file_url_full} alt="" />
                                  <div className="absolute w-full h-full left-0 top-0 bg-white opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                              </div>
                          );
                      })}
                  </div>
              </section>
              <section
                  className={`fixed w-screen h-screen left-0 top-0 bg-neutral-900/[0.7] backdrop-blur-md z-50 flex items-center justify-center transition-all duration-500 ${
                      showPopup ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                  <div
                      ref={wrapperRef}
                      className="relative flex items-center justify-center p-10 overflow-hidden"
                      style={{ maxHeight: "80%" }}
                  >
                      <img
                          className="max-h-full object-contain"
                          src={gallery.data[popItem].file_url_full}
                          alt=""
                      />
                      <button
                          onClick={() => setShowPopup(false)}
                          className="absolute top-0 right-0 text-white "
                      >
                          <IoMdClose className="w-6 h-6" />
                      </button>
                  </div>
              </section>
              <div className=" flex justify-center items-center py-10">
                  {/*<span className="text-lg px-5 opacity-100">1</span>
                  <span className="text-lg px-5 opacity-50">2</span>
                  <span className="text-lg px-5 opacity-50">3</span>*/}
                  {links(gallery.links)}
              </div>
          </>
      </Layout>

  );
};

export default Gallery;
