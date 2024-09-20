import React from 'react'
import config from '../content.config';

export default function ShoesCollected() {
  const { title, number } = config.shoesCollected;

  return (
    <section className="flex flex-col items-center justify-center md:p-20 gap-20 h-[717px] overflow-hidden relative bg-[#78350F]">
        <img src='/assets/Chart.png'
        alt="Chart Background"
        className='absolute h-[633px] w-[1049px] min-h-[633px] min-w-[1049px] z-0 left-[25px] md:left-custom-chart-left top-custom-chart-top'></img>
        <img src='/assets/Ellipses.png'
        alt="Ellipses Background"
        className='absolute h-[455px] w-[724px] min-h-[455px] min-w-[724px] z-0 left-[240px] md:left-custom-ellipses-left top-custom-ellipses-top'></img>
        <div className='flex flex-col z-20 text-amber-50 font-extrabold'>
            <span className='leading-[110%] text-[48px] md:text-[96px] text-center'>{number}</span>
            <span className='leading-[110%] text-[32px] md:text-[56px] text-center'>{title}</span>
        </div>
        <img src='/assets/col.png'
        alt="Col"
        className='absolute h-[345px] w-[326px] min-h-[345px] min-w-[326px] z-30 md:left-custom-badge-left -top-[5px] md:top-custom-badge-top'></img>
    </section>
  )
}