import React from "react";
import config from "../content.config.js";

export default function CollectibleSneakers() {
  const { heading, description, buttons, items } = config.collectibleSneakers;

  return (
    <>
      <main className="p-[48px_16px] md:p-20 flex flex-col md:flex-row justify-between items-center gap-[80px]">
        <div className="flex flex-col text-center md:text-left gap-[32px]">
          <h2 className="text-[56px] md:text-[72px] font-extrabold leading-[110%]">
            {heading}
          </h2>
          <p className="text-[18px] font-normal leading-[160%]">
            {description}
          </p>
          <div className="text-[#78350F] text-[20px] flex justify-center md:justify-start gap-4">
            <button className="px-8 py-4 rounded-md border-2 border-[#78350F] font-medium tracking-[0.5px] leading-[24px]">
              {buttons.signUp}
            </button>
            <button className="px-3 py-2 flex items-center">
              <img src={"/assets/play-circle.png"} alt="play-circle" />
              <span className="text-inherit pl-2 text-[16px]">
                {buttons.watchDemo}
              </span>
            </button>
          </div>
        </div>

        <div className="relative w-[361px] h-[314.2px] md:w-[486px] md:h-[423px] flex">
          <div className="absolute bg-[#FBBF24] w-[271.61px] h-[276.32px] md:w-[367px] md:h-[372px] top-[50px] left-[40px] rounded-[50px]"></div>
          <img
            src={"/assets/sneakers.png"}
            alt="Sneaker"
            className="relative min-w-[361px] min-h-[288.21px] w-[361px] h-[288.21px] md:min-w-[486px] md:min-h-[388px] md:w-[486px] md:h-[388px]"
          />
        </div>
      </main>

      <section className="py-12 px-4 md:p-20 flex flex-wrap justify-center gap-20">
        {items.map((item, index) => (
          <div key={index} className="items-center md:items-start w-[373px] flex flex-col gap-4 relative">
            <img
              alt="box-icon"
              className={`absolute ${item.imgStyle}`}
              src={item.imgSrc}
            />
            <img
              alt="icon"
              className={item.iconSize}
              src={item.iconSrc}
            />
            <h3 className="text-[20px] font-medium leading-[22px]">
              {item.title}
            </h3>
            <p className="text-center md:text-left text-[18px] font-normal leading-[28.8px]">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}