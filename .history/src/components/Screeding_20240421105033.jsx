import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Screeding = () => {
  return (
    <>
    <div className=''>
    <Navbar />
    <div className='flex justify-center items-center   h-[50vh]   mt-24 mb-10 overflow-hidden'>
      <img className='object-fit   object-contain ' src="src\images\_DSC7097-scaled.jpg" alt="img" />
    </div>
    <h1 className='text-[5vh] font-bold text-gray-800 mb-2 text-center'>SCREEDING</h1>
    <p class="text-gray-700 w-3/4 p-4  mb-5 rounded-lg text-[4vh] leading-relaxed text-center sm:text-base md:text-lg mx-auto">
    The Tile Pros is Melbourne's top choice for professional shower screeding. Our exceptional attention to detail and dependable, affordable service make us the go-to option for projects of all sizes. Trust us to deliver outstanding results, no matter the scale of the job.</p>

    <div class='unique flex justify-between m-10 p-5'>
    <img class='w-[40vw]' src="src\images\Screenshot 2024-04-10 234314.png" alt='Screeding Image' />
    <div class='w-[50vw]'>
        <h1 class='text-zinc-500 text-[5vh] font-semibold'>EXPERT SCREEDING SPECIALISTS</h1>
        <p class='text-[#7A7A7A] text-[3.5vh] leading-[1.2]'>
            Properly screeding floors is crucial for achieving a smooth, level surface that provides a strong foundation for tile installation. At The Tile Pros, our team of experienced screeding specialists ensures precise results in every project. <br/><br/>

            We take great care in preparing and leveling surfaces to create a flawless base for tiling, guaranteeing a professional finish that stands the test of time. <br/><br/>

            Our screeding services are tailored to meet your specific project needs, whether you are working on a small residential area or a large commercial space. We strive to deliver efficient and cost-effective solutions that exceed your expectations. <br/><br/>

            Reach out to The Tile Pros today to discuss your screeding project and receive a free quote. Let us provide you with expert guidance and reliable services to bring your vision to life.
        </p>
    </div>
</div>

<div class="flex mx-auto p-8">
    <div class="flex-1 mr-8 h-full">
        <h1 class="text-[#7A7A7A] text-[5vh] font-bold mb-4">RELIABLE AND AFFORDABLE SERVICE</h1>
        <p class="mb-4 text-[3.5vh] leading-relaxed text-center">
            At The Tile Pros, we are deeply passionate about delivering exceptional tile solutions to our clients. From the first phone call to the final cleanup, you can expect outstanding service from our team every step of the way. We approach each project with meticulous attention to detail and the utmost care, treating your project as if it were our own home.

            When it comes to crucial tasks like screeding, you can trust that The Tile Pros will handle it professionally, efficiently, and affordably. Reach out to us today to discuss your project and receive a free quote. Let us help bring your vision to life.
        </p>

        <div className="flex gap-10 ">
            <img className='h-[40vh] w-[50vh]' src="src\images\Screenshot 2024-04-10 234141.png" alt="Image 1" /> 
            <img className='h-[40vh] w-[50vh]' src="src\images\Screenshot 2024-04-10 234300.png" alt="Image 2" />
        </div>
    </div>

    <div class="flex-1 fit">
        <img className='h-[108vh] w-[100vh]' src="src\images\screeding_concrete.webp" alt="Big Image" />
    </div>
</div>

<Footer/>
</div>
</>  )
}

export default Screeding