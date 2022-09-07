import React, {useState} from "react";
import Layout from "../Layouts/Layout";
import { FiMapPin, FiSend } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { SocialMedia } from "../components/SmallComps";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'

const Contact = ({seo , info}) => {

    const { errors } = usePage().props;

    const [values, setValues] = useState({
        full_name: "",
        email: "",
        phone: "",
        message: "",
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post(route("client.contact.mail"), values);
    }

    function handleClick(e) {
        e.preventDefault();
        Inertia.post(route("client.contact.mail"), values);
    }

  return (
      <Layout seo={seo}>
          <div className="wrapper">
              <div className="xl:text-7xl lg:text-5xl text-4xl mb-14">Contact</div>
              <div className="flex justify-between items-stretch pb-20 lg:flex-nowrap flex-wrap">
                  <div className="shrink-0 flex flex-col justify-between">
                      <div>
                          <div className="text-slate-500 font-bold mb-2 text-sm">
                              <FiMapPin className="inline-block mr-3 align-middle"/> address
                          </div>
                          <div className="font-bold text-lg mb-6">
                              {info.address}
                          </div>
                          <div className="text-slate-500 font-bold mb-2 text-sm">
                              <BsTelephone className="inline-block mr-3 align-middle"/> Phone
                              number
                          </div>
                          <div className="font-bold text-lg mb-6">{info.phone}</div>
                          <div className="text-slate-500 font-bold mb-2 text-sm">
                              <FiSend className="inline-block mr-3 align-middle"/> Email
                              address
                          </div>
                          <div className="font-bold text-lg mb-6">{info.email}</div>
                      </div>
                      <div>
                          <div className="text-slate-500 font-bold mb-3 mt-10">
                              {" "}
                              Social links
                          </div>
                          <SocialMedia/>
                      </div>
                  </div>
                  <iframe
                      className="md:mx-10 md:w-1/2 w-full md:max-w-3xl mt-10 md:mt-0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1053.062943750575!2d44.774606994703205!3d41.709473858122436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd2bb99a4d7%3A0x1bda3c277b2c242e!2s7%20Ilia%20Chavchavadze%20Avenue%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1662362521644!5m2!1sen!2sge"
                      style={{border: "0"}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <form onSubmit={handleSubmit} className="max-w-lg lg:mt-0 mt-10">
                      <div className=" lg:text-5xl text-3xl mb-5  ">Get in touch</div>
                      <p className="opacity-50 mb-7">Tell us how we can help you</p>

                      <input
                          className="text-sm border-b border-solid border-gray-500 outline-0 w-full  mb-5 h-8"
                          type="text"
                          placeholder="Enter your full name"
                          name="full_name"
                          onChange={handleChange}
                      />
                      {errors.full_name && <div>{errors.full_name}</div>}
                      <input
                          className="text-sm border-b border-solid border-gray-500 outline-0 w-full  mb-5 h-8"
                          type="text"
                          placeholder="Enter your email address"
                          name="email"
                          onChange={handleChange}
                      />
                      {errors.email && <div>{errors.email}</div>}
                      <input
                          className="text-sm border-b border-solid border-gray-500 outline-0 w-full  mb-5 h-8"
                          type="text"
                          placeholder="Enter your mobile number"
                          name="phone"
                          onChange={handleChange}
                      />
                      {errors.phone && <div>{errors.phone}</div>}
                      <textarea
                          className="text-sm border-b border-solid border-gray-500 outline-0 w-full  mb-5 h-8 pt-1"
                          placeholder="Enter message here"
                          name="message"
                          onChange={handleChange}
                      />
                      {errors.message && <div>{errors.message}</div>}
                      <button
                          className="h-12 px-14 bg-custom-dark text-white border border-solid border-custom-dark w-full">
                          Send message
                      </button>
                  </form>
              </div>
          </div>
      </Layout>

  );
};

export default Contact;
