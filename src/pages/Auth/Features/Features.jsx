import React from 'react'

import NotifyIcon from '../../../assets/images/notify-icon.svg'

function Features() {
  return (
    <div className='flex flex-row items-center justify-end mb-[66px] pt-[34px] pb-[21px] pr-[104px]'>
    <div className='flex items-center gap-[48px]'>
      <button>
        <img src={NotifyIcon} width={28} height={28}/>
      </button>
      <button className='text-[#424242] rounded-lg font-semibold text-[14px] leading-[17.36px]'>Log out</button>
    </div>
  </div>
  )
}

export default Features