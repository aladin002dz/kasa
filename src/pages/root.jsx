import {Outlet,useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"

import '@root/styles.css'

const Root = () => {

  let location = useLocation();
  
  if(location.pathname.length <= 1) {

      location.pathname = '/home';

  }
  
  let currentLocation = location.pathname.replace('/','');
  
  useEffect(() => {

    let target = document.body

    target.classList.remove(...target.classList)
    
    target.classList.add(currentLocation);

  },[currentLocation])

  
  return (
  <>
   <Header />
    <main className="content-first skeleton">
    <Outlet />
    </main>
    <Footer />
  </>  )
}

export default Root