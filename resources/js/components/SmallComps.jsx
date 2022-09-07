//import sm1 from "../assets/images/sm/1.png";
//import sm2 from "../assets/images/sm/2.png";
//import sm3 from "../assets/images/sm/3.png";
import React from "react";

export const SocialMedia = () => {
  return (
    <div className="flex items-center justift-center">
      <a className="transition hover:-translate-y-1" href="#">
        <img src="/client/assets/images/sm/1.png" alt="" />
      </a>
      <a className="transition hover:-translate-y-1 mx-5" href="#">
        <img src="/client/assets/images/sm/2.png" alt="" />
      </a>
      <a className="transition hover:-translate-y-1" href="#">
        <img src="/client/assets/images/sm/3.png" alt="" />
      </a>
    </div>
  );
};

export const Languages = () => {
  return (
    <div className="flex items-center justift-center font-bold">
      <a href="#" className="opacity-50">
        Geo
      </a>
      <div className="underline ml-3">Eng</div>
    </div>
  );
};

export const Paginations = () => {
  <div className=" flex justify-center items-center">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
    repudiandae in atque deserunt nesciunt ducimus omnis laboriosam voluptate
    eaque, nihil consectetur aperiam at quidem dolorem ipsa officiis
    necessitatibus? Voluptatem, aliquam!
    <span className="text-lg px-5 opacity-100">1</span>
    <span className="text-lg px-5 opacity-50">2</span>
    <span className="text-lg px-5 opacity-50">3</span>
  </div>;
};
