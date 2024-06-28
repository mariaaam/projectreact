import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return <>
    <section className='mt-5'>

 <div className='container text-center  '>
  <h2  className='fs-1 fw-bolder'>

      PORTFOLIO COMPONENT

      </h2>
      <div className='starP my-2 '>
          <i className="fa-solid fa-star text-black"></i>
        </div>


        <div className='row gy-3 my-5 '>
<div className="col-md-4">

  <div className='sliderImg position-relative rounded-3'>
    <div className='layer position-absolute   align-items-center justify-content-center rounded-3'>
    <i class="fa-solid fa-plus text-white fw-bolder fa-5x"></i>
    </div>
    <img src={require("../../images/poert1.png")} className='w-100 rounded-3'></img>
  </div>
</div>


<div className="col-md-4">

  <div className='sliderImg position-relative rounded-3'>
    <div className='layer position-absolute   align-items-center justify-content-center rounded-3'>
    <i class="fa-solid fa-plus text-white fw-bolder fa-5x"></i>
    </div>
    <img src={require("../../images/port2.png")} className='w-100 rounded-3'></img>
  </div>
</div>


<div className="col-md-4">

  <div className='sliderImg position-relative rounded-3'>
    <div className='layer position-absolute   align-items-center justify-content-center rounded-3'>
    <i class="fa-solid fa-plus text-white fw-bolder fa-5x"></i>
    </div>
    <img src={require("../../images/port3.png")} className='w-100 rounded-3'></img>
  </div>
</div>


<div className="col-md-4">

  <div className='sliderImg position-relative rounded-3'>
    <div className='layer position-absolute   align-items-center justify-content-center rounded-3'>
    <i class="fa-solid fa-plus text-white fw-bolder fa-5x"></i>
    </div>
    <img src={require("../../images/poert1.png")} className='w-100 rounded-3'></img>
  </div>
</div>

<div className="col-md-4">

  <div className='sliderImg position-relative rounded-3'>
    <div className='layer position-absolute   align-items-center justify-content-center rounded-3'>
    <i class="fa-solid fa-plus text-white fw-bolder fa-5x"></i>
    </div>
    <img src={require("../../images/port2.png")} className='w-100 rounded-3'></img>
  </div>
</div>


<div className="col-md-4">

  <div className='sliderImg position-relative rounded-3'>
    <div className='layer position-absolute   align-items-center justify-content-center rounded-3'>
    <i class="fa-solid fa-plus text-white fw-bolder fa-5x"></i>
    </div>
    <img src={require("../../images/port3.png")} className='w-100 rounded-3'></img>
  </div>
</div>




        </div>



      
 </div>

 
 
 
    
    </section>
    
    </>
  }
}
