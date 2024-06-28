import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return <>
    <section className='mt-5 contact'>
<div className='container  text-center'>
<h2 className='fs-1 fw-bolder'>CONATCT SECTION
</h2>
<div className='starP my-2 '>
          <i className="fa-solid fa-star text-black"></i>
        </div>



<form className='d-flex flex-column w-75  m-auto'>

  <input type='text' placeholder='User Name' className='shadow my-2 p-3 rounded-4'></input>
  <input type='number' placeholder='User Age' className='shadow my-2 p-3 rounded-4'></input>

  <input type='email' placeholder='User Email'className='shadow my-2 p-3 rounded-4'></input>
  <input type='password' placeholder='User password' className='shadow my-2 p-3 rounded-4'></input>
    <button className='btn btnBg w-25 my-3'>
Send Message
    </button>
</form>
</div>


    </section>
    
    
    </>
  }
}
