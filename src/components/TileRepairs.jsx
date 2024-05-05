import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const TileRepairs = () => {
  return (
    <>
    <div className=''>
    <Navbar />
    <div className='flex justify-center items-center   h-[50vh]   mt-24 mb-10 overflow-hidden'>
      <img className='object-fit   object-contain ' src="src\images\_DSC7097-scaled.jpg" alt="img" />
    </div>
    <h1 className='text-[5vh] font-bold text-gray-800 mb-2 text-center'>TILE REPAIRS</h1>
    <p class="text-gray-700 w-3/4 p-4  mb-5 rounded-lg text-[4vh] leading-relaxed text-center sm:text-base md:text-lg mx-auto">
    Few things are more frustrating than chipped, cracked, or loose tiles disrupting the look of your home. Luckily, The Tile Pros have years of experience in repairing damaged or loose tiles, quickly restoring your bathroom, kitchen, laundry, or outdoor space to its former beauty.</p>

    <div class='unique flex justify-between m-10 p-5'>
    <img class='w-[40vw]' src="src\images\cracked-floor-tile-2.jpeg" alt='Tile Repairing Image' />
    <div class='w-[50vw]'>
        <h1 class='text-zinc-500 text-[5vh] font-semibold'>EXPERT TILE REPAIRING SPECIALISTS</h1>
        <p class='text-[#7A7A7A] text-[3.5vh] leading-[1.2]'>
            Over time, tiles can become chipped, cracked, or loosened, detracting from the overall appearance of your space. At The Tile Pros, we offer expert tile repair services to restore your home to its former glory. <br/><br/>

            Our skilled team uses precise techniques and high-quality materials to ensure your tiles are repaired seamlessly. We can handle repairs in any area of your home, including bathrooms, kitchens, and outdoor spaces. <br/><br/>

            Our goal is to complete the repairs efficiently and affordably, with minimal disruption to your daily life. Whether you have a small patch to fix or a larger project, we’ve got you covered. <br/><br/>

            Contact The Tile Pros today for a free quote and let us bring your home back to its best with our tile repair services.
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
        <img className='h-[108vh] w-[100vh]' src="src\images\Screenshot 2024-04-10 234141.png" alt="Big Image" />
    </div>
</div>

<Footer/>
</div>
</>  )
}

export default TileRepairs