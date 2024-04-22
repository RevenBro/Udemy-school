import React, { useState } from 'react'

import NotifyIcon from '../../../assets/images/notify-icon.svg'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AddTeachers({teachers, setTeachers}) {
  const navigate = useNavigate()

  const [imgUrl, setImgUrl] = useState(null)
  const inputImgChange = (evt) => {
    setImgUrl(URL.createObjectURL(evt.target.files[0]));
  }

  const handleAddTeachers = (evt) => {
    evt.preventDefault()
    const data = {
      id: teachers.length ? teachers[teachers.length - 1].id + 1 : 1,
      avatarImg: imgUrl,
      fullName: evt.target.fullName.value,
      subject: evt.target.subject.value,
      class: evt.target.class.value,
      email: evt.target.email.value,
      gender: evt.target.gender.value,
      about: evt.target.about.value,
      age: evt.target.age.value
    };
    if(imgUrl == null) {
      toast.error("Choose a picture!")
    }
    else {
      setTeachers([...teachers, data]);
      setTimeout(() => {
        navigate("/teachers")
      }, 1500)
      window.localStorage.setItem("teachers", JSON.stringify(data))
      toast.success('Successfully added!')
      evt.target.reset() 
    }

  }

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className='flex flex-row items-center justify-end mb-[20px] pt-[34px] pb-[21px] pr-[104px]'>
        <div className='flex items-center gap-[48px]'>
          <button>
            <img src={NotifyIcon} width={28} height={28}/>
          </button>
          <button className='text-[#424242] rounded-lg font-semibold text-[14px] leading-[17.36px]'>Log out</button>
        </div>
      </div>

      <form onSubmit={handleAddTeachers} className='pb-[15px]'>
      <div className='flex items-center justify-between pl-[38px] pr-[100px]'>
        <h2 className='text-[#4F4F4F] font-medium text-[20px] leading-[24.8px]'>Add teacher</h2>
        <button type='submit' className='bg-[#509CDB] w-[80px] text-white py-[12px] rounded-[5px] hover:opacity-80'>Save</button>
      </div>

      <div className='flex items-start justify-between mt-[42px]'>
        <div className='ml-[42px] w-[40%] flex flex-col gap-[34px] mt-[-11px]'>
          <label className='space-y-1'>
            <span className='text-[#8A8A8A] font-medium text-[14px] leading-[17.36px]'>Full Name</span>
            <input name='fullName' className='w-full py-[12px] pl-[10px] border-[#A7A7A7] border-[1px] rounded-md outline-none' type="text" placeholder='Full Name' required autoComplete='off'/>
          </label>

          <label className='space-y-1'>
            <span className='text-[#8A8A8A] font-medium text-[14px] leading-[17.36px]'>Email address</span>
            <input name='email' className='w-full py-[12px] pl-[10px] border-[#A7A7A7] border-[1px] rounded-md outline-none' type="email" placeholder='Email address' required autoComplete='off'/>
          </label>

          <label className='space-y-1'>
            <span className='text-[#8A8A8A] font-medium text-[14px] leading-[17.36px]'>Subject</span>
            <input name='subject' className='w-full py-[12px] pl-[10px] border-[#A7A7A7] border-[1px] rounded-md outline-none' type="text" placeholder='Subject' required autoComplete='off'/>
          </label>

          <label className='space-y-1'>
            <span className='text-[#8A8A8A] font-medium text-[14px] leading-[17.36px]'>About</span>
            <input name='about' className='w-full pt-[12px] pb-[122px] pl-[10px] border-[#A7A7A7] border-[1px] rounded-md outline-none' type="text" placeholder='About' required autoComplete='off'/>
          </label>
        </div>

        <div className='mr-[100px] w-[40%] flex flex-col gap-[34px]'>
          <label className='space-y-1'>
            <span className='block text-[#8A8A8A] font-medium text-[14px] leading-[17.36px]'>Class</span>
            <select name='class' className='w-full py-[12px] outline-none border-[1px] rounded-md border-[#A7A7A7]'>
              <option disabled>Class</option>
              <option value="0">React N1</option>
              <option value="1">React N2</option>
              <option value="2">React N3</option>
              <option value="3">React N4</option>
              <option value="4">React N5</option>
            </select>
          </label>

          <label className='space-y-1'>
            <span className='block text-[#8A8A8A] font-medium text-[14px] leading-[17.36px]'>Gender</span>
            <select name='gender' className='w-full py-[12px] outline-none border-[1px] rounded-md border-[#A7A7A7]'>
              <option disabled>Gender</option>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </label>

          <label className='space-y-1'>
            <span>Age</span>
            <input name='age' className='w-full py-[12px] pl-[10px] border-[#A7A7A7] border-[1px] rounded-md outline-none' type="number" maxLength={"3"} placeholder='Age' required autoComplete='off'/>
          </label>

          <label className='space-y-1 mt-[30px]'>
            <span>Import Img</span>
            <input onChange={inputImgChange} type="file" className='visually-hidden'/>
            {imgUrl ? 
              <img src={imgUrl} width={80} height={80}/>
            : ""}
          </label>
        </div>
      </div>
      </form>
    </div>
  )
}

export default AddTeachers