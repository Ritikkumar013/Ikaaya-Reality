import React from 'react'
import Location from '../../Components/Location'
// import Header from '../components/Header'
import Banner from '../../Components/Banner'

const page = () => {
  return (
    <div>
<Banner />

      {/* <div className="w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh]"   style={{ backgroundImage: "url('/gallery.png')" }}>
  
        
        <div className="container  max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-heading uppercase">
            Location
          </h1>
        </div>
      </div>  */}
      {/* <div className='text-center my-10'>
        <h1 className='text-4xl'>CUSTOMIZE INTERIORS</h1>
        <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry&apos;s standard dummy text</p>
      </div>
      <Location /> */}
      <div className="w-full relative">
        <div className="max-w-screen-xl mx-auto">
          <Location />
        </div>
      </div>
    </div>
  )
}

export default page
