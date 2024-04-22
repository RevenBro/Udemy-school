import React from 'react'

import { Link, useNavigate } from 'react-router-dom/dist'

import SearchIcon from '../../../assets/images/search-icon.svg'
import MoreIcon from '../../../assets/images/more-icon.svg'
import NotifyIcon from '../../../assets/images/notify-icon.svg'

function Teachers({teachers, setTeachers}) {
  const navigate = useNavigate()

  const handleSinglePage = (evt) => {
    navigate(`/single-page/${evt.target.id}`)
  }

  const handleInputChange = (evt) => {
    const teacherData = JSON.parse(window.localStorage.getItem("teacher"))
    const filteredData = teacherData.filter(item => item.fullName.toLowerCase().includes(evt.target.value.toLowerCase()))
    setTeachers(filteredData)
  }
  return (
    <div className="flex flex-col bg-white">
      <div className='flex flex-row items-center justify-end mb-[20px] pt-[34px] pb-[21px] pr-[104px]'>
        <div className='flex items-center gap-[48px]'>
          <button>
            <img src={NotifyIcon} width={28} height={28}/>
          </button>
          <button className='text-[#424242] rounded-lg font-semibold text-[14px] leading-[17.36px]'>Log out</button>
        </div>
      </div>
      <div className='flex items-center justify-between mb-[28px] pl-[38px] pr-[100px]'>
        <h2 className='text-[#4F4F4F] font-medium text-[20px] leading-[24.8px]'>Teachers</h2>
        <Link to={"/add"} className='w-[118px] text-center rounded-[4px] bg-[#509CDB] py-[12px] hover:opacity-80 text-white font-semibold text-[14px] leading-[17.36px]'>Add Teachers</Link>
      </div>
      <div className='flex py-[16px] ml-[38px] mr-[100px] pl-[48px] relative mb-[30px] bg-[#E0E0E0]'>
        <img className='absolute top-[35%] left-[16px]' src={SearchIcon} width={16} height={16}/>
        <input onChange={handleInputChange} className='w-full bg-[#E0E0E0] rounded-sm outline-none' type="search" placeholder='Search for a student by name or email' autoComplete='off' />
    </div>

    <div className="ml-[38px] mr-[100px]">
    <table className='w-[100%]'>
        <thead> 
            <tr>
                <th className='py-[16px] text-[#424242] font-bold text-[14px] leading-[14.88px]'>Name</th>
                <th className='py-[16px] text-[#424242] font-bold text-[14px] leading-[14.88px]'>Subject</th>
                <th className='py-[16px] text-[#424242] font-bold text-[14px] leading-[14.88px]'>Class</th>
                <th className='py-[16px] text-[#424242] font-bold text-[14px] leading-[14.88px]'>Email address</th>
                <th className='py-[16px] text-[#424242] font-bold text-[14px] leading-[14.88px]'>Gender</th>
                <th className='py-[16px] text-[#424242] font-bold text-[14px] leading-[14.88px]'>Action</th>
            </tr>
        </thead>
        <tbody>
            {teachers.map((item, index) => (
                <tr className='even:bg-[#EBF6FF80]' key={index}>
                    <td className='text-[#4F4F4F] font-medium text-[14px] leading-[14.88px] py-[15px] text-center flex items-center gap-[10px] justify-center'>
                      <img src={item.avatarImg} width={24} height={24}/>
                      {item.fullName}
                      </td>
                    <td className='text-[#4F4F4F] font-medium text-[14px] leading-[14.88px] py-[15px] text-center'>{item.subject}</td>
                    <td className='text-[#4F4F4F] font-medium text-[14px] leading-[14.88px] py-[15px] text-center'>
                        {item.class == "0" ? "React N1" : ""}
                        {item.class == "1" ? "React N2" : ""}
                        {item.class == "2" ? "React N3" : ""}
                        {item.class == "3" ? "React N4" : ""}
                        {item.class == "4" ? "React N5" : ""}
                    </td>
                    <td className='text-[#4F4F4F] font-medium text-[14px] leading-[14.88px] py-[15px] text-center'>{item.email}</td>
                    <td className='text-[#4F4F4F] font-medium text-[14px] leading-[14.88px] py-[15px] text-center'>
                        {item.gender == "0" ? "Female" : ""}
                        {item.gender == "1" ? "Male" : ""}
                    </td>
                    <td className='text-[#4F4F4F] font-medium text-[14px] leading-[14.88px] py-[15px] text-center'>
                        <button id={item.id} onClick={handleSinglePage}>
                            <img id={item.id} src={MoreIcon} alt="more" width={18} height={18}/>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default Teachers