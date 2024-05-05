import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Waterproofing = () => {
  return (
    <>
    <div className=''>
    <Navbar />
    <div className='flex justify-center items-center   h-[50vh]   mt-24 mb-10 overflow-hidden'>
      <img className='object-fit   object-contain ' src="src\images\_DSC7097-scaled.jpg" alt="img" />
    </div>
    <h1 className='text-[5vh] font-bold text-gray-800 mb-2 text-center'>WATER PROOFING</h1>
    <p class="text-zinc-700 w-[50vw] p-4  mb-5 rounded-lg text-[4vh] leading-relaxed text-center sm:text-base md:text-lg mx-auto">
    When it comes to building or renovating a home, ensuring proper waterproofing is crucial. Incorrect waterproofing can lead to serious damage to your home's structural timbers and cause issues with mold and dampness. At The Tile Pros, our team is dedicated to providing professional and effective waterproofing services to protect your home.</p>

    <div className='unique flex justify-between m-10 p-5'>
    <img className='w-[40vw]' src="src\images\Screenshot 2024-04-10 234314.png" alt="" />
    <div className='w-[50vw]'>
        <h1 className='text-zinc-500 text-[5vh] font-semibold'>EXPERT WATERPROOFING SPECIALISTS</h1>
        <p className="text-[#7A7A7A] text-[3.5vh] leading-[1.2]">Ensuring your home is properly waterproofed is essential for protecting its structure and maintaining its longevity. Proper waterproofing prevents moisture damage, mold, and rot, which can have a devastating impact on your home over time. <br/><br/>

The Tile Pros are experienced in providing top-quality waterproofing services to safeguard your home. Our team uses advanced techniques and materials to ensure your tiled areas remain dry and protected. <br/><br/>

We handle all aspects of the waterproofing process, from assessing the space to selecting the best products and materials for the job. Our goal is to deliver exceptional results that offer long-term protection for your home. <br/><br/>

Trust The Tile Pros to handle your waterproofing needs with professionalism and expertise. Contact us today for a free consultation and quote, and let us help you protect your home for years to come.</p>
    </div>
</div>

    <div class="flex mx-auto p-8">
    <div class="flex-1 mr-8 h-full">
        <h1 class="text-[#7A7A7A] text-[5vh] font-bold mb-4">RELIABLE AND AFFORDABLE SERVICE</h1>
        <p class="mb-4 text-[3.5vh] leading-relaxed text-center">At The Tile Pros, we are deeply passionate about delivering exceptional tile solutions to our clients. From the first phone call to the final cleanup, you can expect outstanding service from our team every step of the way. We approach each project with meticulous attention to detail and the utmost care, treating your project as if it were our own home.

When it comes to crucial tasks like waterproofing, you can trust that The Tile Pros will handle it professionally, efficiently, and affordably. Reach out to us today to discuss your project and receive a free quote. Let us help bring your vision to life.</p>

        <div className="flex gap-10 ">
            <img className='h-[40vh] w-[50vh]'  src="src\images\Screenshot 2024-04-10 234141.png" alt="Image 1" /> 
            <img className='h-[40vh] w-[50vh]' src="src\images\Screenshot 2024-04-10 234300.png" alt="Image 2" /> 
        </div>
    </div>

    <div class="flex-1 fit">
        <img className='h-[108vh] w-[100vh]' src="https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Big Image" />
    </div>
</div>
<Footer/>
</div>
</>  )
}

export default Waterproofing