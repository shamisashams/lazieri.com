//import Member1 from "../assets/images/team/1.png";
//import Member2 from "../assets/images/team/2.png";
//import Member3 from "../assets/images/team/3.png";
//import Member4 from "../assets/images/team/4.png";
//import Member5 from "../assets/images/team/5.png";
//import Member6 from "../assets/images/team/6.png";
//import Member7 from "../assets/images/team/7.png";
//import Member8 from "../assets/images/team/8.png";
import React from "react";
import Layout from "../Layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";

const Team = ({seo}) => {

    const {team} = usePage().props;
    console.log(team)

  const teamMembers = [
    {
      img: "/client/assets/images/team/1.png",
      name: "Name Surname",
      position: "Position",
    },
    {
      img: "/client/assets/images/team/2.png",
      name: "Name Surname",
      position: "Position",
    },
    {
      img: "/client/assets/images/team/3.png",
      name: "Name Surname",
      position: "Position",
    },
    {
      img: "/client/assets/images/team/4.png",
      name: "Name Surname",
      position: "Position",
    },
    {
      img: "/client/assets/images/team/5.png",
      name: "Name Surname",
      position: "Position",
    },
    {
      img: "/client/assets/images/team/6.png",
      name: "Name Surname",
      position: "Position",
    },
    {
      img: "/client/assets/images/team/7.png",
      name: "Name Surname",
      position: "Position",
    },
    {
      img: "/client/assets/images/team/8.png",
      name: "Name Surname",
      position: "Position",
    },
  ];
  return (
      <Layout seo={seo}>
          <div className="wrapper pb-20">
              <div className=" lg:text-5xl text-3xl mb-10 lg:mb-20  ">Our Team</div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16">
                  {team.map((member, index) => {
                      return (
                          <div key={index} className="w-full">
                              <div className="w-full h-96 overflow-hidden">
                                  <img
                                      className="w-full h-full object-cover"
                                      src={member.file.file_url_full}
                                      alt=""
                                  />
                              </div>
                              <div className="text-xl my-3">{member.name} {member.surname}</div>
                              <div>{member.position}</div>
                          </div>
                      );
                  })}
              </div>
          </div>
      </Layout>

  );
};

export default Team;
