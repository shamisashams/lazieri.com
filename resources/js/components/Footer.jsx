import React, {useState} from "react";
//import map from "../assets/images/other/1.png";
import { SocialMedia } from "./SmallComps";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'

const Footer = () => {
  const { pathname, info, errors, localizations } = usePage().props;

    const [values, setValues] = useState({
        email: "",
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route("client.subscribe.subscribe"), values);
    }


  return (
    <footer
      className={`py-10 pb-20 mt-10 bg-neutral-50 relative overflow-hidden ${
        pathname === route('client.contact.index') ? "hidden" : "block"
      }`}
    >
      {" "}
      <img
        className="absolute bottom-0 right-10 xl:w-auto w-1/2 sm:block hidden"
        src="/client/assets/images/other/1.png"
        alt=""
      />
      <div className="wrapper2 relative z-20 ">
        <div className="mb-10 flex items-center">
          <span className="mr-5"> {__('client.footer_follow_us',localizations)}</span> <SocialMedia />
        </div>
        <div className="text-2xl ">{__('client.footer_newsletter',localizations)}</div>
        <p className="opacity-50 my-5">
            {__('client.footer_newsletter_text',localizations)}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-wrap relative z-10 mb-10">
          <input
            className="sm:h-14 h-10 pl-3  border border-solid border-custom-dark "
            type="text"
            placeholder={__('client.form_email',localizations)}
            name="email"
            onChange={handleChange}
          />
            {errors.email && (
                <div className="error">
                    {errors.email}
                </div>
            )}
          <button className="sm:h-14  h-10 sm:px-14 px-5 bg-custom-dark text-white ml-3 border border-solid border-custom-dark">
              {__('client.footer_subscribe_btn',localizations)}
          </button>
        </form>
        <a href="#" className="font-bold mb-5 block">
          <IoMdMail className="inline-block w-5 h-5 mr-4" />
            {info.email}
        </a>
        <a href="#" className="font-bold ">
          <IoMdCall className="inline-block w-5 h-5 mr-4" />
            {info.phone}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
