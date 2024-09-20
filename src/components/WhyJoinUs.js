import React from "react";
import DesktopWindow from "./DesktopWindow";
import config from "../content.config";

export default function WhyJoinUs() {
    const { articles } = config.whyJoinUs;

    return (
        <section className="h-[689px] md:h-[816px] p-[16px_16px_56px_16px] md:p-[160px_80px] overflow-hidden">
            <div className="flex flex-col md:flex-row py-8 px-4 md:p-20 md:items-center gap-8 md:gap-20 h-[617px] md:h-[496px] bg-white shadow-custom-shadow rounded-custom-radius-20 relative">
                <div className="flex flex-col gap-6 w-full md:w-[520px] md:min-w-[520px] h-[287px] md:h-[274px] items-center md:items-start">
                    <h2 className="h-[62px] font-extrabold text-[32px] md:text-[56px] leading-[110%] text-[#0F172A] text-center md:text-left">
                        Why join us
                    </h2>
                    <div className="flex flex-col">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className="flex flex-row gap-3 md:items-center"
                            >
                                <img
                                    className="h-fit mt-[10px] md:mt-0"
                                    src="/assets/vector.png"
                                ></img>
                                <span className="text-[#0F172A] leading-[140%] md:leading-[180%] text-[16px] md:text-[20px] font-normal">
                                    {article}
                                </span>
                            </div>
                        ))}
                    </div>
                    <button className="z-10 box-border flex justify-center items-center p-4 w-fit border-2 border-[#78350F] text-[#78350F] rounded-md text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                        Sign up now
                    </button>
                </div>
                <div
                    className="h-[386px] w-[440px] md:h-[625.24px] md:w-[713px] absolute -bottom-[50px] -left-[40px] md:top-[-60.19px] md:left-[605px] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/assets/deco-video.png)`,
                    }}
                />
                <div className="w-full h-[350px]">
                    <DesktopWindow image="url(/assets/desktop-bg.png)" />
                </div>
            </div>
        </section>
    );
}