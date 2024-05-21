import React from 'react'
import  './Home.css'


const Page1 = () => {
  return (
    <>

      <div className=' flex justify-center'>

        <div className='w-[76vw]  mt-20  rounded-'>
          <img src="src\images\bakery (2).jpg" alt="" />
        </div>
      </div>
      <h1 className=' text-[5vh] font-bold text-center'>WELCOME TO TILE PROS</h1>
      <div className='portfolio flex  justify-between mt-20 p-10' >

        <img className=' bakery w-[36vw] z-30' src="https://images.squarespace-cdn.com/content/v1/5ef3f3458040a83686b6c004/b5f5e5c2-5b2e-4d51-95bf-b0ce3973208b/Aintree_bakery_27.jpg?format=2500w" alt="img" />
        <div className=' w-1/2'>
          <h1 className=' text-[#7A7A7A] text-[5vh]'>MELBOURNE’S PREMIER TILING SPECIALISTS</h1>
          <p className="text-[3.5vh]  leading-[1.2]">
            For top-tier tile installations in Melbourne, trust Tile Pros. Expert, budget-friendly, and renowned for excellence. From kitchen revamps to outdoor spaces, we deliver unmatched quality and meticulous attention to detail. Choose Tile Pros for all your tiling needs.</p>
          <div className='  flex w-1/2 gap-10 m-5 p-5'>

            <img src="https://images.unsplash.com/photo-1642678573554-60511a3d2d16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            <img src="https://images.unsplash.com/photo-1576698483491-8c43f0862543?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </div>
        </div>
      </div>

      <div className='flex p-5 m-5  '>
        <div className='w-1/4 text-center'>
            <h1 className='text-[5vh] '>PORTFOLIO</h1>
            <p className='text-[2.5vh]  text-start p-2 '>Explore our portfolio showcasing countless jobs that have left our clients beaming with satisfaction. Dive into our gallery for a firsthand look at our craftsmanship, or delve into reviews from delighted customers. Trust in our proven track record of excellence.</p>
        </div>
        <img className='w-1/4  h-[36vh] p-5 m-5' src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpdGNoZW4lMjB0aWxpbmd8ZW58MHx8MHx8fDA%3D" alt="img" />
        <img className='w-1/2 p-5 m-5'src="https://images.unsplash.com/photo-1595187139760-5cedf9ab5850?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
    </div>
    <div className='unique flex justify-between m-10 p-5'>
          <img className='w-[40vw] ' src="src\images\Carvery-Club-Melton_16_3000x2000_U_100_Long+Edge_Scaled.jpg" alt="" />
          <div className=' w-[50vw]'>
            <h1 className='text-[#7A7A7A] text-[5vh]' >the unique craftsmanship of The TilePros</h1>
            <p className=" text-[#7A7A7A] text-[3.5vh]  leading-[1.2]">In Melbourne's bustling tiling scene, The Tile Pros stand out from the crowd with our unwavering commitment to excellence in every aspect of our work. Our top priority is to deliver outstanding service, treating each project as if it were in our own homes. Our dedication to perfectionism ensures that every job receives meticulous attention to detail without sacrificing efficiency or punctuality. We believe in the importance of transparency, keeping you informed at every stage of the process. When you choose The Tile Pros for your next tiling project, you're choosing reliability, professionalism, and a team that truly cares about delivering exceptional results.</p>
          </div>
        </div>
        <div className='services w-[25vw] h-[40vh] ml-[502px] text-center border-2 border-zinc-500   '>
          <h1 className='text-[#7A7A7A] text-[5vh]'>SERVICES</h1>
          <p className=" text-[#7A7A7A] text-[2.5vh]  leading-[1.2]">Our expertise encompasses a wide array of tiling services, covering both indoor and outdoor installations, waterproofing, screeding, caulking, and repairs. Dive deeper into our offerings on our services page to discover how we can meet your specific needs.</p>
        </div>

        <div className='spec flex flex-wrap w-5/12 m-12 mb-14 float-right'>
  <h1 className='text-[#7A7A7A] text-[5vh] font-semibold'>LUXURY & QUALITY</h1>
  <p className="text-[#7A7A7A] text-[2.5vh] leading-[1.2]">At The Tile Pros, mediocrity is never an option. That's why in addition to our unparalleled installation and repair services, we provide a selection of premium tiles. Explore our tile warehouse, featuring a curated collection of exceptional tiles, including bespoke handmade options tailored to your budget. Whether it's a small renovation or a large-scale project, The Tile Pros is committed to delivering excellence in quality and craftsmanship every step of the way. Reach out today for a personalized project quote!</p>
</div>
<div style={{ clear: 'both' }}></div>


    

    </>

  )
}

export default Page1;