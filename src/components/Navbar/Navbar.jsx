import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import SiteLogo from '../../assets/images/udemy-logo.svg'
import DashboardIcon from '../../assets/images/dashboard-icon.svg'
import StudentsIcon from '../../assets/images/students-icon.svg'
import BillingIcon from '../../assets/images/billing-icon.svg'
import SettingIcon from '../../assets/images/setting-icon.svg'
import ExamsIcon from '../../assets/images/exams-icon.svg'
import newIcon from '../../assets/images/new-icon.svg'

function Navbar() {
  return (
    <div className='overflow-y-auto bg-[#152259] h-[100vh]'>
        <div className='pt-[26px] pb-[40px] border-b-[#BDBDBD] border-b-[1px]'>
            <img className='ml-[90px]  mb-[22px]' src={SiteLogo} alt="Udemy logo" width={65} height={65}/>
            <strong className='ml-[58px] text-white font-semibold text-[14px] leading-[17.36px]'>Udemy Inter.school</strong>
        </div>
        
        <ul className='ml-[41px] mt-[15px]'>
            <NavLink to="/" className='flex items-center cursor-pointer gap-[16px] py-[11px]'>
                <img src={DashboardIcon} width={16} height={16}/>
                <span className='text-[14px] font-semibold leading-[17.36px] text-white'>Dashboard</span>
            </NavLink>
            <NavLink to="/teachers" className='flex items-center cursor-pointer active:bg-[#509CDB] gap-[16px] py-[11px]'>
                <img src={DashboardIcon} width={16} height={16}/>
                <span className='text-[14px] font-semibold leading-[17.36px] text-white'>Teachers</span>
            </NavLink>
            <NavLink to="/students" className='flex items-center cursor-pointer active:bg-[#509CDB] gap-[16px] py-[11px]'>
                <img src={StudentsIcon} width={16} height={16}/>
                <span className='text-[14px] font-semibold leading-[17.36px] text-white'>Students</span>
            </NavLink>
            <NavLink to={"/billing"} className='flex items-center cursor-pointer active:bg-[#509CDB] gap-[16px] py-[11px]'>
                <img src={BillingIcon} width={16} height={16}/>
                <span className='text-[14px] font-semibold leading-[17.36px] text-white'>Billing</span>
            </NavLink>
            <NavLink to={"/settings"} className='flex items-center cursor-pointer active:bg-[#509CDB] gap-[16px] py-[11px]'>
                <img src={SettingIcon} width={16} height={16}/>
                <span className='text-[14px] font-semibold leading-[17.36px] text-white'>Settings and profile</span>
            </NavLink>
            <NavLink to={"/exams"} className='flex items-center cursor-pointer active:bg-[#509CDB] gap-[16px] py-[11px]'>
                <img src={ExamsIcon} width={16} height={16}/>
                <span className='text-[14px] font-semibold leading-[17.36px] text-white'>Exams</span>
            </NavLink>
            <NavLink to={"/features"} className='flex items-center cursor-pointer active:bg-[#509CDB] gap-[16px] py-[11px] mt-[117px]'>
                <img src={BillingIcon} width={16} height={16}/>
                <span className='mr-[15px] text-[14px] font-semibold leading-[17.36px] text-white'>Features</span>
                <img src={newIcon} width={41} height={14}/>
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar