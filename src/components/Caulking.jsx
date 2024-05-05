import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Caulking = () => {
  return (
    <>
    <div className=''>
    <Navbar />
    <div className='flex justify-center items-center   h-[50vh]   mt-24 mb-10 overflow-hidden'>
      <img className='object-fit   object-contain ' src="src\images\_DSC7097-scaled.jpg" alt="img" />
    </div>
    <h1 className='text-[5vh] font-bold text-gray-800 mb-2 text-center'>CAULKING</h1>
    <p class="text-gray-700 w-3/4 p-4  mb-5 rounded-lg text-[4vh] leading-relaxed text-center sm:text-base md:text-lg mx-auto">
    Caulking not only enhances the appearance of your tiled areas but is also essential for sealing gaps between surfaces to block water intrusion. At The Tile Pros, we expertly handle caulking projects with efficiency and professionalism, ensuring your space is protected and visually appealing.</p>

    <div class='unique flex justify-between m-10 p-5'>
    <img class='w-[40vw]' src="src\images\caulking.webp" alt='Tile Repairing Image' />
    <div class='w-[50vw]'>
        <h1 class='text-zinc-500 text-[5vh] font-semibold'>EXPERT CAULKING SPECIALISTS</h1>
        <p class='text-[#7A7A7A] text-[3.5vh] leading-[1.2]'>
        Caulking is an essential part of any tiling project, ensuring a smooth and protected finish by sealing gaps and joints. The Tile Pros' expert caulking specialists use high-quality materials and techniques to achieve exceptional results.
            <br /><br />
            Proper caulking prevents water damage, mold growth, and other structural issues that can arise from water seepage. Our team pays close attention to detail, ensuring each caulking job is done to perfection for long-lasting protection.
            <br /><br />
            At The Tile Pros, we prioritize customer satisfaction by providing reliable, efficient, and affordable caulking services. Reach out today for a free consultation and let us help enhance the longevity and appearance of your tiled areas.
        </p>
    </div>
</div>

<div class="flex mx-auto p-8">
    <div class="flex-1 mr-8 h-full">
        <h1 class="text-[#7A7A7A] text-[5vh] font-bold mb-4">RELIABLE AND AFFORDABLE SERVICE</h1>
        <p class="mb-4 text-[3.5vh] leading-relaxed text-center">
            At The Tile Pros, we are deeply passionate about delivering exceptional tile solutions to our clients. From the first phone call to the final cleanup, you can expect outstanding service from our team every step of the way. We approach each project with meticulous attention to detail and the utmost care, treating your project as if it were our own home.

            When it comes to crucial tasks like tile repair, you can trust that The Tile Pros will handle it professionally, efficiently, and affordably. Reach out to us today to discuss your project and receive a free quote. Let us help bring your vision to life.
        </p>

        <div className="flex gap-10 ">
            <img className='h-[40vh] w-[50vh]' src="src\images\Screenshot 2024-04-10 234141.png" alt="Image 1" /> 
            <img className='h-[40vh] w-[50vh]' src="src\images\Screenshot 2024-04-10 234300.png" alt="Image 2" />
        </div>
    </div>

    <div class="flex-1 fit">
        <img className='h-[108vh] w-[100vh]' src="src\images\caulking2.avif" alt="Big Image" />
    </div>
</div>


<Footer/>
</div>
</>  )
}

export default Caulking;