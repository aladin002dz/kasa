import {Outlet} from 'react-router-dom'
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"

import '@root/styles.css'

const Root = () => {


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