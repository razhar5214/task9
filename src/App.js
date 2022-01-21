import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Link, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import AccountBalance from './components/AccountBalance';
import Login from "./components/Login"
import {useState} from "react"
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';


export default function App() {

  const [userInfo, setUserInfo] = useState({
      accountBalance: 14568.27,
      currentUser:{
        userName: "bob_loblaw",
        memberSince: "08/23/99"
      }
  })

  const mockLogIn = (logInInfo) =>{
    const newUser = {...userInfo.currentUser}
    newUser.userName = logInInfo.userName
    setUserInfo({currentUser: newUser})
  }
  const LogInComponent = () => (
    <Login 
      user={userInfo.currentUser} 
      mockLogIn={mockLogIn} {...userInfo}
    />
  )
  
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home {...userInfo}/>}/>
          <Route exact path="/userProfile" element={<UserProfile {...userInfo}/>}/>
          <Route exact path="/login" element={LogInComponent()}/>
          <Route exact path="/debits" element={<Debits {...userInfo}/>}/>
        </Routes>
    </div>
  );
}


