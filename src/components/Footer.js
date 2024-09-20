import React from "react";
import config from "../content.config";

export default function Footer() {
    const { items, socialMedia, copyright, footerLinks } = config.footer;

    return (
        <footer
            className="flex flex-col justify-center items-start md:px-20 w-full bg-[#0F172A]
    text-[16px] leading-[140%] font-normal text-[#E2E8F0]"
        >
            <div className="flex flex-col md:flex-row justify-center py-12 gap-12 w-full border-b border-solid border-[#334155] border-x-0 border-yb-[1px]">
                {Object.values(items).map((item, indexObj) => (
                    <div key={indexObj} className="flex flex-col items-start w-full md:w-[284px]">
                        {item.map((button, index) => (
                            <a href={button.link} key={index} className="flex py-3 h-[42px] justify-center w-full md:justify-start">
                                {button.text}
                            </a>
                        ))}
                    </div>
                ))}
                <div className="flex flex-col items-center md:items-start w-full md:w-[284px] gap-2">
                    <span className="flex py-3 h-[42px]">Get the App</span>
                    <button className="flex h-[46px] items-center">
                        <img className="w-[119.66px] h-[40px] min-w-[119.66px] min-h-[40px]" alt="app store" src="/assets/App Store - Filled.png"></img>
                    </button>
                    <button className="flex h-[46px] items-center">
                        <img className="w-[135px] h-[40px] min-w-[135px] min-h-[40px]" alt="play store" src="/assets/Google Play.png"></img>
                    </button>
                    <span className="flex p-[48px_0px_12px]">Follow Us</span>
                    <div className="flex flex-row gap-4 h-6">
                        {socialMedia.map((media, index) => (
                            <a href={media.link} key={index} className="flex py-3 h-[42px]">
                                <img className="w-6 h-6 min-w-6 min-h-6" src={media.icon}></img>
                            </a>
                        ))}
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="flex flex-col md:flex-row py-12 md:py-6 w-full gap-6">
                    <span className="text-center md:text-left">
                        {copyright}
                    </span>
                    <div className="flex flex-row gap-8 items-center md:ml-auto justify-center ">
                    {footerLinks.map((item, index) => (
                            <a href={item.link} key={index} className="flex gap-2 items-center">
                                {item.icon && <img className="w-6 h-6 min-w-6 min-h-6" src={item.icon}></img>}
                                <span className="flex items-center py-3 md:py-0">{item.text}</span>
                            </a>
                        ))}
                    </div>
            </div>
        </footer>
    );
}
