import React from "react";
import config from "../content.config.js";

export default function BecauseTheyLoveUs() {
  const { title, comments } = config.becauseTheyLoveUs;

  const CommentCard = ({logoUrl, userImageUrl, paragraph, name, position}) => (
    <div className="flex flex-col flex-start gap-2 md:gap-4 h-full p-6 md:p-8 w-[319px] min-w-[319px] md:w-[384px] md:min-w-[384px]
    bg-white rounded-custom-radius-20 shadow-custom-shadow-3 border-1 border-[#E2E8F0]">
      <div className="flex flex-row items-center h-16 w-full py-4">
        <img className="h-8 w-fit" src={logoUrl}></img>
      </div>
      <p className="h-[88px] md:h-[190px] w-full text-[16px] md:text-[24px] leading-[140%] md:leading-[160%] font-normal">
        { paragraph }
      </p>
      <div className="flex flex-row pt-4 gap-4 h-20 w-full">
        <img src={userImageUrl}></img>
        <div className="flex flex-col justify-center">
          <span className="h-[29px] text-[18px] leading-[160%] text-[#000]">
            { name }
          </span>
          <span className="h-[22px] text-[16px] leading-[140%] text-[#475569]">
            { position }
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col items-start py-12 pb-4 md:py-20 md:pb-0 overflow-hidden relative">
      <div className="absolute w-[1360px] h-[277px] md:h-[421px] top-[99px] md:top-[182px] md:left-1/2 transform -translate-x-1/2 bg-[#FDE68A] z-0"></div>
      <div className="flex flex-row md:h-[62px] w-full items-center md:px-20 justify-center md:justify-start">
        <span className="flex leading-[110%] text-[32px] md:text-[56px] font-extrabold text-[#0F172A]">
          {title}
        </span>
        <div className="hidden md:flex items-start gap-6 h-12 ml-auto">
          <button>
            <img src="/assets/buttonLeft.png"></img>
          </button>
          <button>
            <img src="/assets/buttonRight.png"></img>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-scroll h-[350px] md:h-[590px] w-full items-center z-10">
        <div className="flex flex-row gap-6 w-full h-[296px] md:h-[430px] overflow-y-visible justify-center">
          {comments.map((comment, index) => (
            <CommentCard
              key={index}
              logoUrl={comment.logoUrl}
              userImageUrl={comment.userImageUrl}
              paragraph={comment.paragraph}
              name={comment.name}
              position={comment.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

