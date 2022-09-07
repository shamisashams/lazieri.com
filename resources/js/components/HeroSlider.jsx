import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Pagination, Navigation } from "swiper";
import { usePage } from "@inertiajs/inertia-react";

//import Img1 from "../assets/images/hero/1.png";
//import Img2 from "../assets/images/hero/2.png";
//import Img3 from "../assets/images/hero/3.png";

const HeroSlider = () => {
    const {sliders} = usePage().props;
  const nextRef = useRef(null);
  const data = [
    {
      title: "Modern kitchen",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority hform, by injected humour, or randomised words wslightly believable.",
      img: "/client/assets/images/hero/1.png",
    },
    {
      title: "Blue Color Armchair",
      paragraph:
        "Lorem ipsum dolor sit, amet consectetur adipisicing eliente? Sit voluptates hic ad dignissimos quo ut deserunt corrupti fugit explicabo orem ",
      img: "/client/assets/images/hero/2.png",
    },
    {
      title: "Black & White",
      paragraph:
        "consectetur adipisicing elit. Illo quisquam assumenda id velit commodi saepe fuga exercitationem consectetur sapiente? Sit voluptates hic ad dignissimo",
      img: "/client/assets/images/hero/3.png",
    },
  ];


    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

  return (
    <div className="relative">
      {" "}
      <Swiper
        loop
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[EffectFade, Pagination, Navigation]}
        className="heroSwiper w-full"
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {sliders.map((item, index) => {
          return (
            <SwiperSlide key={index} className="overflow-hidden">
              <div className="bg-white mb-3 flex xl:items-center justify-between sm:pr-40 flex-col xl:flex-row">
                <div className="xl:text-7xl lg:text-5xl text-4xl whitespace-nowrap heroTitle transition-all duration-1000 ">
                  {item.title}
                </div>
                <p className="text-sm max-w-lg opacity-50 xl:mx-auto">
                  {renderHTML(item.description)}
                </p>
              </div>

              <div className="overflow-hidden transition-all duration-1000 heroImg ">
                <img src={item.file} alt="" />
              </div>
            </SwiperSlide>
          );
        })}{" "}
      </Swiper>
      <button
        ref={nextRef}
        className="xl:text-7xl lg:text-5xl text-4xl absolute sm:top-0 bottom-6 sm:bottom-auto sm:text-inherit text-white sm:right-0 right-2 z-20"
      >
        Next
      </button>
    </div>
  );
};

export default HeroSlider;
