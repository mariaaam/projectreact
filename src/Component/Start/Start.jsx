import React, { Component } from 'react'
import MyImg from '../../images/avataaars.svg'

export default class Start extends Component {
  render() {
    return <>
    
    <section className='Start py-3'>


        <div className='d-flex  justify-content-center  align-items-center flex-column  text-white'>
        <img src={MyImg} alt='' className=' imgStart  rounded-5 my-3'>
        </img>

        <h1>START FRAMEWORK
        </h1>
        <div className='star my-2'>
          <i className="fa-solid fa-star"></i>
        </div>

        <div className='mb-5'>

        Graphic Artist - Web Designer - Illustrator
        </div>
        
        




        </div>
    </section>
    
    </>
  }
}
