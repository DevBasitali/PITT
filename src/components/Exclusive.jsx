// import React from 'react'
import Card from './card'
import Viewbutton from './Viewbutton'
function Exclusive() {
  
  return (
    <>
    <div className='container '>
<div className='heading py-4'><h5 className='text-center  text-4xl font-bold text-black leading-tight'>Our Exclusive Offers</h5></div>
 <div className='flex flex-wrap justify-center gap-3'>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/> 
 <Card/>
 <Card/>
 </div>
 <div className='flex justify-center mt-3'>
 <Viewbutton/>
 </div>

    </div>
    </>
  )
}
export default Exclusive
