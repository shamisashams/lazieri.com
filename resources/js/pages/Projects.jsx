//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import Img7 from "../assets/images/gallery/7.png";
//import Img8 from "../assets/images/gallery/8.png";
//import Img9 from "../assets/images/gallery/9.png";
//import Img10 from "../assets/images/gallery/10.png";
//import Img11 from "../assets/images/gallery/11.png";
import { Paginations } from "../components/SmallComps";
import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import Moment from 'moment';

const Projects = ({seo}) => {
  const otherLinks = [
    {
      link: "/",
      text: "All Projects",
    },
    {
      link: "/kitchen",
      text: "Kitchen",
    },
    {
      link: "/",
      text: "bedroom",
    },
    {
      link: "/",
      text: "living room",
    },
    {
      link: "/",
      text: "External facade cladding",
    },
    {
      link: "/",
      text: "Open Area",
    },
    {
      link: "/",
      text: "Special Offer",
    },
  ];

  const projects = [
    {
      link: "/single-project",
      img: "/client/assets/images/gallery/7.png",
      category: "Kitchen",
      name: "Project Name",
      date: "12.06.2022",
    },
    {
      link: "/single-project",
      img: "/client/assets/images/gallery/8.png",
      category: "Kitchen",
      name: "Project Name",
      date: "12.06.2022",
    },
    {
      link: "/single-project",
      img: "/client/assets/images/gallery/9.png",
      category: "Kitchen",
      name: "Project Name",
      date: "12.06.2022",
    },
    {
      link: "/single-project",
      img: "/client/assets/images/gallery/10.png",
      category: "Kitchen",
      name: "Project Name",
      date: "12.06.2022",
    },
    {
      link: "/single-project",
      img: "/client/assets/images/gallery/11.png",
      category: "Kitchen",
      name: "Project Name",
      date: "12.06.2022",
    },
  ];

  const {category, categories, pathname, products, localizations} = usePage().props;

  console.log(products)

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
              <section className="wrapper">
                  <div className="flex justify-between lg:items-center flex-col lg:flex-row">
                      <div className="opacity-50 text-lg mb-3">{__('client.products_title',localizations)}</div>
                      <div>
                          <Link
                              key={0}
                              className={`inline-block  group-hover:mr-5  whitespace-nowrap mb-3 mr-5 ${
                                  pathname === route('client.category.index')
                                      ? "opacity-100 "
                                      : " text-sm  opacity-50"
                              }`}
                              href={route('client.category.index')}
                          >
                              {__('client.all_products',localizations)}
                          </Link>
                          {categories.map((item, index) => {
                              return (
                                  <Link
                                      key={index + 1}
                                      className={`inline-block  group-hover:mr-5  whitespace-nowrap mb-3 mr-5 ${
                                          route('client.category.show',item.slug) === pathname
                                              ? "opacity-100 "
                                              : " text-sm  opacity-50"
                                      }`}
                                      href={route('client.category.show',item.slug)}
                                  >
                                      {item.title}
                                  </Link>
                              );
                          })}
                          <Link
                              key={0}
                              className={`inline-block  group-hover:mr-5  whitespace-nowrap mb-3 mr-5 ${
                                  pathname === route('client.category.special')
                                      ? "opacity-100 "
                                      : " text-sm  opacity-50"
                              }`}
                              href={route('client.category.special')}
                          >
                              {__('client.special_offer',localizations)}
                          </Link>
                      </div>
                  </div>
                  <div className="flex justify-between lg:items-center mt-5 flex-col lg:flex-row">
                      <div className="xl:text-7xl lg:text-5xl text-4xl">{category.title}</div>
                      <div className="opacity-50 max-w-2xl lg:text-end">
                          {renderHTML(category.description)}
                      </div>
                  </div>
              </section>
              <section className="wrapper2 py-20 sm:columns-2">
                  {products.data.map((item, index) => {
                      return (
                          <div key={index} className="lg:w-3/4 mx-auto border-b mb-10 pb-5">
                              <Link href={route('client.product.show',item.slug)}>
                                  <img className="w-full" src={item.image} alt="" />
                              </Link>
                              <div className="flex justify-between text-sm opacity-50 mb-2 mt-6  ">
                                  <span>{item.categories[0].title}</span>
                                  <span>{__('client.date',localizations)}: {Moment(item.created_at).format('DD.MM.YYYY')}</span>
                              </div>
                              <div>{item.title}</div>
                          </div>
                      );
                  })}
              </section>
              <div className=" flex justify-center items-center">
                  {/*<span className="text-lg px-5 opacity-100">1</span>
                  <span className="text-lg px-5 opacity-50">2</span>
                  <span className="text-lg px-5 opacity-50">3</span>*/}
                  {links(products.links)}
              </div>
          </>
      </Layout>

  );
};

export default Projects;
