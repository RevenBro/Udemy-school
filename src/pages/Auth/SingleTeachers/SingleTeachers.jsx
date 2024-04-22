import React from 'react'
import { useParams } from 'react-router-dom'

import NotifyIcon from '../../../assets/images/notify-icon.svg'

function SingleTeachers({teachers}) {
  const {id} = useParams()

  const singleData = teachers.find(item => item.id == id)
  console.log(singleData);
  return (
    <div className="flex flex-col">
      <div className='flex flex-row items-center justify-end mb-[66px] pt-[34px] pb-[21px] pr-[104px]'>
        <div className='flex items-center gap-[48px]'>
          <button>
            <img src={NotifyIcon} width={28} height={28}/>
          </button>
          <button className='text-[#424242] rounded-lg font-semibold text-[14px] leading-[17.36px]'>Log out</button>
        </div>
      </div>

      <div className='mx-[230px] flex items-center justify-between gap-[105px]'>
        <div className='flex flex-col items-center'>
          <img className='mb-[50px] rounded-[50%]' src={singleData.avatarImg} alt="teacher's img" width={280} height={280}/>
          <strong className='font-bold text-[16px] leading-[19.84px] text-[#1A1A1A]'>{singleData.fullName}</strong>
          <span className='text-[#A7A7A7] font-bold text-[14px] leading-[17.36px]'>{singleData.subject}</span>
        </div>

        <div className='w-[335px]'>
          <h3 className='font-semibold text-[16px] leading-[19.84px] text-[#1A1A1A] mb-[16px]'>About</h3>
          <p className='text-[#A7A7A7] font-medium leading-[21px] mb-[40px]'>{singleData.about}</p>
          <div className='flex gap-[142px]'>
            <div className='flex flex-col gap-[8px]'>
              <strong className='font-semibold text-[14.88px] leading-[14.88px] text-[#1A1A1A]'>Age</strong>
              <span className='text-[#A7A7A7] font-medium text-[14px] leading-[17.36px]'>{singleData.age}</span>
            </div>
            <div className='flex flex-col gap-[8px]'>
              <strong className='font-semibold text-[14.88px] leading-[14.88px] text-[#1A1A1A]'>Gender</strong>
              <span className='text-[#A7A7A7] font-medium text-[14px] leading-[17.36px]'>{singleData.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTeachers