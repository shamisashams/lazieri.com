import React, { useState, useRef, useEffect } from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import Logo from "../assets/images/logo/1.png";
import { Languages, SocialMedia } from "./SmallComps";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenuUnfoldFill } from "react-icons/ri";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const wrapperRef = useRef(null);

  const [result,setResult] = useState([])

  useOutsideAlerter(wrapperRef);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearch(false);
          setMenu(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

    let interval;
  function handleSearch(e){
      clearInterval(interval);
       interval = setTimeout(function (){
           if(e.target.value.length > 0){
               axios.post(route('search.index'),{term:e.target.value}).then(function(response){
                   console.log(response)
                   setResult(response.data.data);
               })
           } else setResult([]);

      },600)

  }

  const {categories} = usePage().props;

  //console.log(categories)

  const dropdowns = {
    products: [
      {
        link: "/projects",
        text: "Kitchen",
      },
      {
        link: "/projects",
        text: "bedroom",
      },
      {
        link: "/projects",
        text: "living room",
      },
      {
        link: "/projects",
        text: "External facade cladding",
      },
      {
        link: "/projects",
        text: "Open Area",
      },
      {
        link: "/projects",
        text: "Special Offer",
      },
    ],
    lazieri: [
      {
        link: route('client.about.index'),
        text: "About Us",
      },
      {
        link: route('client.team.index'),
        text: "Our Team",
      },
      {
        link: route('client.gallery.index'),
        text: "Gallery",
      },
    ],
  };
  return (
    <header className="relative z-50">
      <div className="wrapper py-2">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <Link href={route('client.home.index')} className="mr-8">
              <img src="/client/assets/images/logo/1.png" alt="" />
            </Link>
            <SocialMedia />
          </div>
          <Languages />
        </div>
        <div className="mt-5 flex  justify-between ">
          <button
            className="md:hidden inline-block"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <IoCloseOutline className="w-6 h-6" />
            ) : (
              <RiMenuUnfoldFill className="w-6 h-6" />
            )}
          </button>
          <ul
            ref={wrapperRef}
            className={`md:relative md:w-auto w-full absolute bg-white top-full md:pb-8 p-5 md:p-0 transition-all duration-300 shadow md:shadow-none ${
              menu ? "left-0" : "-left-full md:left-auto"
            } `}
          >
            <li className="pb-8 inline-block font-bold mr-8">
              <Link href={route('client.home.index')}>Home</Link>
            </li>
            <li className="pb-8 cursor-pointer  md:inline-block font-bold mr-8 group ">
              Products{" "}
              <div className="relative inline-block align-middle">
                <div className="bg-black h-0.5 w-3"></div>
                <div className="group-hover:rotate-90 transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-0.5 h-3"></div>
              </div>
              <div className="md:whitespace-nowrap invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute z-10 pt-4 pb-2 md:-left-10 left-32  md:group-hover:left-0 md:bottom-5 md:top-auto top-0 font-normal text-sm ">
                {categories.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      className="block md:inline-block opacity-50 group-hover:mr-5 transition-all duration-300 whitespace-nowrap md:mb-0 mb-3"
                      href={route('client.category.show',item.slug)}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </li>
            <li className="pb-8 cursor-pointer  md:inline-block font-bold mr-8 group ">
              Lazieri{" "}
              <div className="relative inline-block align-middle">
                <div className="bg-black h-0.5 w-3"></div>
                <div className="group-hover:rotate-90 transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-0.5 h-3"></div>
              </div>{" "}
              <div className="md:whitespace-nowrap invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute z-10 pt-4 pb-2 md:-left-10 left-32  md:group-hover:left-0 md:bottom-5 md:top-auto  top-0 font-normal text-sm ">
                {dropdowns.lazieri.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      className="block md:inline-block opacity-50 group-hover:mr-5 transition-all duration-300 whitespace-nowrap md:mb-0 mb-3 "
                      href={item.link}
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </div>
            </li>
            <li className="pb-8  md:inline-block font-bold mr-8">
              <Link href={route('client.service.index')}>Service</Link>
            </li>
            <li className="pb-8  md:inline-block font-bold mr-8">
              <Link href={route('client.partner.index')}>Partners</Link>
            </li>
            <li className="pb-8 md:inline-block font-bold mr-8">
              <Link href={route('client.contact.index')}>Contact</Link>
            </li>
          </ul>
          <div ref={wrapperRef} className="relative">
            <button
              onClick={() => setSearch(!search)}
              className="z-10 relative"
            >
              {search ? (
                <IoCloseOutline className="w-6 h-6" />
              ) : (
                <FiSearch className="w-6 h-6" />
              )}
            </button>
            <div
              className={`absolute right-0 -top-4 bg-white h-screen p-5 sm:pr-10 pl-7 sm:pl-5 transition-all duration-500 overflow-hidden ${
                search
                  ? "w-screen sm:w-96 opacity-100 visible"
                  : "w-0 opacity-0 invisible"
              }`}
            >
              <input
                className="w-full mb-10"
                type="text"
                placeholder="Search here"
                onKeyUp={handleSearch}
              />

              {/* searched data will appear here 👇🏼 */}
                {result.map((item, index) => {
                    return (
                        <div className="inline-block mr-5 mb-10">
                            <div className="uppercase mb-4">{item.title}</div>
                            <Link href={route('client.product.show',item.slug)} className="block mb-1 opacity-70">
                                {item.text_1}
                            </Link>
                            {/*<Link href="/" className="block mb-1 opacity-70">
                                dfg sghfdg hdfgh
                            </Link>
                            <Link href="/" className="block mb-1 opacity-70">
                                Some link
                            </Link>*/}
                        </div>
                    )
                })}
              {/*<div className="inline-block mr-5 mb-10">
                <div className="uppercase mb-4">products</div>
                <Link href="/" className="block mb-1 opacity-70">
                  Some link
                </Link>
                <Link href="/" className="block mb-1 opacity-70">
                  dfg sghfdg hdfgh
                </Link>
                <Link href="/" className="block mb-1 opacity-70">
                  Some link
                </Link>
              </div>
              <div className="inline-block mr-5 mb-10">
                <div className="uppercase mb-4">products</div>
                <Link href="/" className="block mb-1 opacity-70">
                  dfg sdfg dsfg
                </Link>
                <Link href="/" className="block mb-1 opacity-70">
                  Some link
                </Link>
                <Link href="/" className="block mb-1 opacity-70">
                  ukghkihjkhjk
                </Link>
              </div>
              <div className="inline-block mr-5 mb-10">
                <div className="uppercase mb-4">products</div>
                <Link href="/" className="block mb-1 opacity-70">
                  dfg sdfg dsfg
                </Link>
                <Link href="/" className="block mb-1 opacity-70">
                  Some link
                </Link>
                <Link href="/" className="block mb-1 opacity-70">
                  ukghkihjkhjk
                </Link>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
