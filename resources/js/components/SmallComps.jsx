//import sm1 from "../assets/images/sm/1.png";
//import sm2 from "../assets/images/sm/2.png";
//import sm3 from "../assets/images/sm/3.png";
import React from "react";
import { usePage } from "@inertiajs/inertia-react";

export const SocialMedia = () => {
    const { info } = usePage().props;
    console.log(info);
    return (
        <div className="flex items-center justift-center">
            <a className="transition hover:-translate-y-1" href={info.facebook}>
                <img src="/client/assets/images/sm/1.png" alt="" />
            </a>
            <a
                className="transition hover:-translate-y-1 mx-5"
                href={info.instagram}
            >
                <img src="/client/assets/images/sm/2.png" alt="" />
            </a>
            <a className="transition hover:-translate-y-1" href={info.twitter}>
                <img src="/client/assets/images/sm/3.png" alt="" />
            </a>
        </div>
    );
};

export const Languages = () => {
    const { locales, currentLocale, locale_urls } = usePage().props;
    return (
        <div className="flex items-center justift-center font-bold">
            {Object.keys(locales).map((name, index) => {
                if (locales[name] !== currentLocale) {
                    return (
                        <a
                            href={locale_urls[name]}
                            key={name + "locale"}
                            className="opacity-50"
                        >
                            {name}
                        </a>
                    );
                } else {
                    return <div className="underline mx-3">{name}</div>;
                }
            })}
        </div>
    );
};

export const Paginations = () => {
    <div className=" flex justify-center items-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
        repudiandae in atque deserunt nesciunt ducimus omnis laboriosam
        voluptate eaque, nihil consectetur aperiam at quidem dolorem ipsa
        officiis necessitatibus? Voluptatem, aliquam!
        <span className="text-lg px-5 opacity-100">1</span>
        <span className="text-lg px-5 opacity-50">2</span>
        <span className="text-lg px-5 opacity-50">3</span>
    </div>;
};
