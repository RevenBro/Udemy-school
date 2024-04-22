import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignUp({setSignUpData}) {
  const navigate = useNavigate()

  const signUpFormSubmit = (evt) => {
    evt.preventDefault()
    const data = {
      newLogin: evt.target.newLogin.value,
      newPassword: evt.target.newPassword.value
    }
    toast.success('Signed up!')
    setTimeout(() => {
      setSignUpData(data);
      navigate("/")
    }, 1500)
    window.localStorage.setItem("newToken", JSON.stringify(data))
  }

  return (
    <div className='flex flex-col items-center'>
      <Toaster position="top-center" reverseOrder={false}/>
      <h2 className='mt-[135px] mb-[53px] font-[700] text-[#4F4F4F] text-[36px] leading-[44.65px]'>Welcome, Sign up</h2>
      <form onSubmit={signUpFormSubmit} className='flex flex-col bg-white pt-[72px] pb-[40px] px-[134px]'>
        <div className='w-[238px] text-center mb-[17px]'>
          <h3 className='font-[Inter] font-medium text-[16px] leading-[25px] text-[#667085]'>It is our great pleasure to have you on board!</h3>
        </div>
        <label className='mb-[14px]'>
          <input className='w-[248px] pl-[12px] py-[12px] text-[#8A8A8A] outline-none text-[14px] font-medium leading-[17px] border-[1px] border-[#A7A7A7] rounded-md' type="text" name='oldLogin' placeholder='Enter your Login' autoComplete='off' required/>
        </label>
        <label className='mb-[14px]'>
          <input className='w-[248px] pl-[12px] py-[12px] text-[#8A8A8A] outline-none text-[14px] font-medium leading-[17px] border-[1px] border-[#A7A7A7] rounded-md' type="text" name='newLogin' placeholder='Create your Login' autoComplete='off' required/>
        </label>
        <label className='mb-[14px]'>
          <input className='w-[248px] pl-[12px] py-[12px] text-[#8A8A8A] outline-none text-[14px] font-medium leading-[17px] border-[1px] border-[#A7A7A7] rounded-md' type="password" name='newPassword' placeholder='Create your Password' autoComplete='off' required/>
        </label>
        <button className='border-[0.5px] border-gray-100 rounded-[4px] text-[14px] font-bold leading-[17px] bg-[#2D88D4] text-white py-[11px] mb-[14px]'>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp