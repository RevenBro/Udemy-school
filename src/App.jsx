import { useState } from 'react'
import './App.css'

import Auth from './Auth'
import UnAuth from './UnAuth'

function App() {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
  const [signUpData, setSignUpData] = useState(window.localStorage.getItem("newToken") || false)
  
  if(signUpData) {
    if(token.login == signUpData.newLogin && token.password == signUpData.newPassword) {
      return <Auth/>
    } else {
      return <UnAuth setToken={setToken} setSignUpData={setSignUpData}/>
    }
  }
  else {
    if(token.login == "abdulloh" && token.password == "123") {
      return <Auth token={token}/>
    } else {
      return <UnAuth setToken={setToken} setSignUpData={setSignUpData}/>
    }
  }
}

export default App
