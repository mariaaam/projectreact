import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return <>
    <section className='   '>
      <div className='bgColor py-5'>
      <div className='container     '>
        <div className='row'>

            <div className='col-md-4'>
               <div>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
               </div>
            </div>


            <div className='col-md-4'>
               <div>
                <h3>AROUND THE WEB </h3>
                <div className='socialIcons'>
                <i className="ms-4 fa-2x fa-brands fa-facebook" ></i>
                <i className=" ms-3 fa-2x fa-brands fa-twitter"></i>
                <i className=" ms-3 fa-2x fa-brands fa-linkedin"></i>
                <i className=" ms-3 fa-2x fa-brands fa-github"></i>
                </div>
               </div>
            </div>


            <div className='col-md-4'>
               <div>
                <h3>ABOUT FREELANCER
                </h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route

</p>

               </div>
            </div>

        </div>

      
    </div>
      </div>



       <div className='footerB text-center text-white mb-0 p-3 '>
         <p>Copyright © Your Website 2021</p>
        </div>
    </section>


   

   
    
    </>
  }
}
