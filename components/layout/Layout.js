import React from 'react'
import { Navigation, Footer} from '../index'
import { useEffect, useState } from 'react'




const Layout = ({children}) => {
  return (
    <div>
        <Navigation/>
        {children}
        <Footer/>
    </div>
  )
}


export default Layout