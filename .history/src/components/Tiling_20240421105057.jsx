import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Tiling = () => {
  return (
  <>
    <div className=''>
    <Navbar />
    <div className='flex justify-center items-center   h-[50vh]   mt-24 mb-10 overflow-hidden'>
      <img className='object-fit   object-contain ' src="src\images\_DSC7097-scaled.jpg" alt="img" />
    </div>
    <h1 className='text-[5vh] font-bold text-gray-800 mb-2 text-center'>TILING</h1>
    <p class=" w-3/4 p-4  rounded-lg text-[4vh] leading-relaxed text-center   mb-5 sm:text-base md:text-lg mx-auto">
    At The Tile Pros, we pride ourselves on being Melbourne's leading tiling specialist, trusted by builders and private clients alike. Our dedication extends to every project, regardless of size, as we consistently aim to exceed expectations. In addition to our professional installation services, we provide a wide selection of high-quality tiles to suit your needs.</p>

    <div className='unique flex justify-between m-10 p-5'>
          <img className='w-[40vw] ' src="src\images\Screenshot 2024-04-10 234141.png" alt="" />
          <div className=' w-[50vw]'>
            <h1 className='text-zinc-500 text-[5vh] font-semibold' >EXPERT TILE INSTALLATION SPECIALISTS</h1>
            <p className=" text-[#7A7A7A] text-[3.5vh]  leading-[1.2]">Installing or updating tiles in your home can completely transform your space and increase its value. Floor tiles offer a low-maintenance solution with long-lasting durability, while wall tiles can refresh your home and give it a modern, luxurious touch . <br /> <br />  

Proper tile installation is essential to avoid costly future repairs and replacements. This includes preparing the surface appropriately by taking into account factors such as waterproofing, caulking, and screeding, and using the right adhesives and grouts. <br/><br/>  

For a tiling specialist who can handle all of this and more, turn to The Tile Pros. We ensure your project is completed professionally and on time, keeping you informed throughout the process. Our goal is to make renovations stress-free by delivering exceptional service, premium products, and top-notch installations at an affordable price. <br/><br/>  

Our commitment to getting it right the first time is why so many clients return to us for their next project. When it comes to tiling in Melbourne, The Tile Pros is the clear choice.</p>
          </div>
        </div>

        <div class="flex mx-auto p-8">
    <div class="flex-1 mr-8 h-full">
        <h1 class="text-[#7A7A7A] text-[5vh] font-bold mb-4">RELIABLE AND AFFORDABLE SERVICE</h1>
        <p class="mb-4 text-[3.5vh] leading-relaxed text-center">At The Tile Pros, we are deeply passionate about delivering exceptional tile solutions to our clients. From the first phone call to the final cleanup, you can expect outstanding service from our team every step of the way. We approach each project with meticulous attention to detail and the utmost care, treating your project as if it were our own home.

When it comes to crucial tasks like waterproofing, you can trust that The Tile Pros will handle it professionally, efficiently, and affordably. Reach out to us today to discuss your project and receive a free quote. Let us help bring your vision to life.</p>

        <div className="flex gap-10 ">
            <img className='h-[40vh] w-[50vh]'  src="src\images\Screenshot 2024-04-10 234141.png" alt="Image 1"/> 
            <img className='h-[40vh] w-[50vh]' src="src\images\Screenshot 2024-04-10 234300.png" alt="Image 2"/> 
        </div>
    </div>

    <div class="flex-1 fit">
        <img className='h-[108vh] w-[100vh]' src="https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Big Image" />
    </div>
</div>


<Footer/>
</div>
</>
  )
}

export default Tiling