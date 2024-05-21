import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Indoor = () => {
  return (
    <>
    <div className=''>
    <Navbar />
    <div className='flex justify-center items-center   h-[50vh]   mt-24 mb-10 overflow-hidden'>
      <img className='object-fit   object-contain ' src="src\images\_DSC7097-scaled.jpg" alt="img" />
    </div>
    <h1 className='text-[5vh] font-bold text-gray-800 mb-2 text-center'>INDOOR OUTDOORS</h1>
    <p class="text-gray-700 w-3/4 p-4  mb-5 rounded-lg text-[4vh] leading-relaxed text-center sm:text-base md:text-lg mx-auto">
    There's nothing better than dining outdoors or taking a swim when the weather is warm, making it essential to create an alfresco area that's comfortable, functional, and attractive. The Tile Pros can help you achieve this by installing chic tiles designed to withstand the elements and enhance your outdoor space.</p>

    <div class='unique flex justify-between m-10 p-5'>
    <img class='w-[40vw]' src='src\images\299-High-007-Resize.jpg' alt='Caulking Image' />
    <div class='w-[50vw]'>
        <h1 class='text-zinc-500 text-[5vh] font-semibold'>TRANSFORM YOUR OUTDOOR SPACE</h1>
        <p class='text-[#7A7A7A] text-[3.5vh] leading-[1.2]'>
            Caulking is an essential part of any tiling project, ensuring a smooth and protected finish by sealing gaps and joints. The Tile Pros' expert caulking specialists use high-quality materials and techniques to achieve exceptional results.
            <br /><br />
            Proper caulking prevents water damage, mold growth, and other structural issues that can arise from water seepage, whether indoors or outdoors. Our team pays close attention to detail, ensuring each caulking job is done to perfection for long-lasting protection.
            <br /><br />
            At The Tile Pros, we prioritize customer satisfaction by providing reliable, efficient, and affordable caulking services. Reach out today for a free consultation and let us help enhance the longevity and appearance of your indoor and outdoor tiled areas.
        </p>
    </div>
</div>

<div class='flex mx-auto p-8'>
    <div class='flex-1 mr-8 h-full'>
        <h1 class='text-[#7A7A7A] text-[5vh] font-bold mb-4'>RELIABLE AND AFFORDABLE SERVICE</h1>
        <p class='mb-4 text-[3.5vh] leading-relaxed text-center'>
        Transforming your outdoor space can create an inviting and functional area for relaxation and entertainment. At The Tile Pros, we specialize in enhancing outdoor areas with beautiful and durable tile installations.

        From patios and decks to pathways and pool surrounds, our experienced team uses top-quality materials and precise techniques to bring your vision to life. We prioritize both aesthetics and functionality, ensuring that your outdoor space is visually appealing and built to withstand the elements.

</p>
        <div class='flex gap-10'>
            <img class='h-[40vh] w-[50vh]' src='src/images/Screenshot 2024-04-10 234141.png' alt='Image 1' />
            <img class='h-[40vh] w-[50vh]' src='src/images/Screenshot 2024-04-10 234300.png' alt='Image 2' />
        </div>
    </div>

    <div class='flex-1 fit'>
        <img class='h-[102vh] w-[100vh]' src='src\images\HP_SpudBAR-The-Glen_07_Full+resolution_5792x8688_U_100_Adobe_1200.jpg' alt='Big Image' />
    </div>
</div>

<Footer/>
</div>
</>  )
}

export default Indoor;