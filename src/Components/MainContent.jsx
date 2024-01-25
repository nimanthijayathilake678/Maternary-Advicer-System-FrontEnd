import React from 'react'
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import {UserNavigationsProvider} from '../Contexts/UserNavigationsProvider.jsx';

function MainContent() {
  return (
    <UserNavigationsProvider>
      <div className='flex flex-col min-h-screen '>
        <Nav/>
        <div className='flex flex-1'>
          <Outlet/>  
        </div>
        <Footer/>
    </div>
   
    </UserNavigationsProvider>
  )
}

export default MainContent