import React from 'react'

import NotifyIcon from '../../../assets/images/notify-icon.svg'
import AddIcon from '../../../assets/images/add-icon.svg'
import BankIcon from '../../../assets/images/bank-icon.svg'
import CapIcon from '../../../assets/images/cap-icon.svg'
import SupportIcon from '../../../assets/images/support-icon.svg'
import ArrowTopIcon from '../../../assets/images/arrow-top.svg'
import { useNavigate } from 'react-router-dom'

function Dashboard({token}) {
  const navigate = useNavigate()

  const logoutClick = () => {
    window.localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div>
      <div className='flex items-center justify-between mb-[50px] pt-[34px] pb-[21px] bg-[#efeeee] pl-[140px] pr-[121px]'>
        <div className='flex flex-col'>
          <strong className='text-[16px] text-[#424242] font-medium leading-[19.84px]'>Learn  how to launch faster</strong>
          <span className='text-[16px] text-[#424242] leading-[19.84px]'>watch our webinar for tips from our experts and get a limited time offer.</span>
        </div>
        <div className='flex items-center gap-[48px]'>
          <button>
            <img src={NotifyIcon} width={28} height={28}/>
          </button>
          <button onClick={logoutClick} className='bg-[#509CDB] w-[120px] py-[11.5px] text-white rounded-lg font-semibold text-[14px] leading-[17.36px] hover:opacity-80'>Log out</button>
        </div>
      </div>

      <div className='flex items-end justify-center'>
        <div>
          <h2 className='text-[#4F4F4F] font-semibold text-[36px] leading-[44.65px]'>Welcome to your dashboard, Udemy school</h2>
          <p className='text-[#4F4F4F] font-semibold text-[24px] leading-[29.77px] ml-[105px] mt-[23px]'>Uyo/school/@teachable.com</p>
          <ul className='mt-[60px] ml-[89px] space-y-[50px]'>
            <li className='flex items-start'>
              <img src={AddIcon} width={36} height={36}/>
              <div className='w-[485px] ml-[20px]'>
                <strong className='text-[#4F4F4F] font-medium text-[24px] leading-[#4F4F4F] mb-[16px]'>Add other admins </strong>
                <p className='text-[#4F4F4F] text-[14px] leading-[18.63px]'>Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!</p>
              </div>
            </li>
            <li className='flex items-start'>
              <img src={BankIcon} width={36} height={36}/>
              <div className='w-[485px] ml-[20px]'>
                <strong className='text-[#4F4F4F] font-medium text-[24px] leading-[#4F4F4F] mb-[16px]'>Add Add classes</strong>
                <p className='text-[#4F4F4F] text-[14px] leading-[18.63px]'>Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!</p>
              </div>
            </li>
            <li className='flex items-start'>
              <img src={CapIcon} width={36} height={36}/>
              <div className='w-[485px] ml-[20px]'>
                <strong className='text-[#4F4F4F] font-medium text-[24px] leading-[#4F4F4F] mb-[16px]'>Add students</strong>
                <p className='text-[#4F4F4F] text-[14px] leading-[18.63px]'>Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!</p>
              </div>
            </li>
          </ul>
        </div>
        <button className='bg-[#152259] w-[181px] h-[60px] ml-[35px] mb-[17px] flex items-center justify-center rounded-[30px] hover:opacity-80'>
          <img src={SupportIcon} width={16} height={16}/>
          <span className='text-white ml-[8px] mr-[39px]'>Support</span>
          <img src={ArrowTopIcon} width={8} height={4}/>
        </button>
      </div>
    </div>
  )
}

export default Dashboard