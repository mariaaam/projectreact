

import React, { Component } from 'react'
import Layout from './Component/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'
import Start from './Component/Start/Start'


const myRouter= createBrowserRouter([
  {path:"/",element:<Layout/> ,children:[
    {path:'/About',element:<About/>},
    {path:'/PORTFOLIO',element:<Portfolio/>},
    {path:'/CONTACT',element:<Contact/>},
    {path:'/',element:<Start/>},

  ]}
])
export default class 
 extends Component {

  
  render() {
    return <>
    <RouterProvider router={myRouter}></RouterProvider>
    
    
    </>
  }
}
