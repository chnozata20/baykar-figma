import React from 'react'
import DesktopWindow from './DesktopWindow';
import config from '../content.config';

export default function GrowYourCollection() {
    const { heading, description, buttons } = config.growYourCollection;

    const ActiveButton = ({icon, text}) => (
        <button className='flex flex-row items-center p-4 w-64 min-w-64 h-[56px] shadow-custom-shadow-4 rounded-[12px] bg-white'>
            <img className='flex w-6 h-6' src={icon}></img>
            <span className='flex pl-4 h-6 font-medium text-[20px] leading-[24px] text-[#0F172A] tracking-[0.5px]'>
                {text}
            </span>
            <img className='flex w-6 h-6 ml-auto' src='/assets/arrow-right.png'></img>
        </button>
    );
    const PassiveButton = ({icon, text}) => (
        <button className='flex flex-row items-center p-4 w-64 min-w-64 h-[56px] rounded-[12px]'>
            <img className='flex w-6 h-6' src={icon}></img>
            <span className='flex pl-4 h-6 font-medium text-[20px] leading-[24px] text-[#0F172A] tracking-[0.5px]'>
                {text}
            </span>
        </button>
    );


  return (
    <section className="flex flex-col items-start py-12 px-4 md:p-[80px_80px_128px] gap-8 md:gap-20 h-[996px] pb-0 overflow-hidden relative">
        <img src='/assets/Waves.png' className='top-[312px] left-0 absolute h-[684px] min-w-[1440px] md:min-w-full md:w-full z-0'></img>
        <div className='flex flex-col items-start gap-8 text-[#0F172A] z-40 items-center md:items-start'>
            <h2 className='flex h-[62px] leading-[110%] font-extrabold text-[32px] md:text-[56px]' >{heading}</h2>
            <p className='font-normal text-[16px] md:leading-[140%] md:text-[18px] md:leading-[160%] text-center md:text-left'>{description}</p>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-20 h-[556px] z-10'>
            <div className='flex flex-row md:flex-col items-start gap-4 w-screen md:w-64 overflow-x-auto md:overflow-x-visible'>
                {buttons.active.map((button, index) =>
                <ActiveButton
                key={index}
                icon={button.icon} text={button.text}/>)}
                {buttons.passive.map((button, index) =>
                <PassiveButton
                key={index}
                icon={button.icon} text={button.text}/>)}
            </div>
            <div className='flex items-start gap-[10px] w-[944px] h-[556px] relative'>
                <div className='w-[294px] h-[201px] md:w-[759px] md:h-[451px] absolute top-0 left-0 z-10'>
                    <DesktopWindow image = "url(/assets/desktop-bg.png)"/>
                </div>
                <div className='w-[295px] h-[202px] md:w-[759px] md:h-[451px] absolute top-[57px] md:top-[105px] left-[36px] md:left-[94px] z-20'>
                    <DesktopWindow image = "url(/assets/TheBestPictureOne.png)"/>
                </div>
                <img src='/assets/growYCPicture.png'
                className='w-[94px] md:w-64 h-[105px] md:h-[286px] absolute left-[calc(29%)] top-[121px] md:left-auto md:top-[202px] md:right-[0px] z-30'>
                </img>
        </div>
        </div>
    </section>
  )
}

