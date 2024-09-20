import React from 'react'

export default function DesktopWindow({image}) {
  return (
    <div className='flex flex-col bg-white w-full h-full bg-white rounded-custom-radius-20 relative shadow-custom-shadow'>
        <img className='h-[41px] w-fit' src='/assets/topBar.png'></img>
        <div className='flex h-full bg-cover bg-center justify-center items-center m-[5px] rounded-b-custom-radius-20'
        style={{ backgroundImage: image }}>
            <img className='flex w-[144px] h-[144px]' src='/assets/play-icon.png'></img>
        </div>
    </div>
  )
}
