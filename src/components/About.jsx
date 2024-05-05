import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const About = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center flex-col items-center mt-24 m-5 overflow-hidden'>
  <img className='object-fit w-1/2 h-1/3 object-contain bg-cover bg-center' src="src\images\_DSC7097-scaled.jpg" alt="img" />
  <h1 className='text-[#7A7A7A] text-[5vh]'>About Us</h1>
  <div className="w-3/4 p-4 bg-gray-100 rounded-lg">
    <p className="text-[3.5vh] leading-relaxed text-center">"The Tile Pros offer expert, insured, and dependable tiling & waterproofing services, catering to both residential and commercial clients throughout Victoria. With a strong commitment to quality, our extensive experience in the industry has made us a trusted name. Our team at The Tile Pros is dedicated to curating a diverse selection of premium tiles in our warehouse, including unique handmade options tailored to suit your budget."</p>
  </div>
  <div className='second flex justify-between m-5 p-2  mt-20 gap-10'>
    <div className='fst-image'>

  <img className=' w-[46vw]'  src="src\images\in.jpeg" alt="" />
    </div>
    <div className='part2  w-1/2 gap-5'>
      <div className='image-split flex w-1/2 gap-3 m-2 '>

      <img  src="src\images\Style Eyebrows — Hunter Projects._files\_DSC7097-scaled.jpg" alt="" />
      <img src="src\images\Style Eyebrows — Hunter Projects._files\_DSC7418-scaled.jpg" alt="" />
      </div>
    <div className=' '>

    <h1 className='text-[#7A7A7A] text-[5vh]'>TESTIMONIAL </h1>
    <p className=' bg-gray-100 rounded-lg p-4 text-[3.5vh] leading-relaxed text-center'>We recently engaged Ireland Tiling for a project involving two townhouses in Hampton East, and Bryce along with his team showcased exceptional craftsmanship and dedication. Their meticulous attention to detail truly sets them apart in the industry. We couldn't be happier with Bryce's service, and our clients are equally thrilled with the high-quality work delivered. As discerning professionals in the tiling business, we only collaborate with the finest tradesmen, and Bryce unquestionably falls into this category. We wholeheartedly recommend Ireland Tiling to anyone seeking top-notch tiling services.</p>
    </div>
    </div>
  </div>
  <div class="flex bg-white rounded-lg shadow-md overflow-hidden">
  <div class="w-full md:w-2/3 p-6">
    <h1 class="text-[5vh] font-bold text-gray-800 mb-2 text-center">ABOUT SATYAM GUPTA</h1>
    <p class="text-gray-700 text-[3.5vh] leading-relaxed text-center">Satyam Gupta established THE TILE PROS after completing his apprenticeship with success. Since its inception, the aspiration has been to cultivate the company into a distinguished brand within Melbourne. With a dedicated team comprising over 13 tilers, estimators, and an operations manager, THE TILE PROS confidently ensures timely and budget-conscious completion of projects, regardless of size.</p>
  </div>
  {/* <div class="hidden md:block md:w-1/3 relative">
    <img src="https://via.placeholder.com/400" alt="John Doe" class="object-cover w-full h-full absolute inset-0" />
  </div> */}
</div>

<div class="flex mt-12 justify-center">
  <div class="flex flex-wrap w-1/2 gap-8">
    <img class='w-[20vw]' src="src\images\299-High-007-Resize.jpg" alt="Image 1"/>
    <img class='w-[20vw]' src="src\images\299-High-008-Resize.jpg" alt="Image 2"/>
    <img class='w-[20vw]' src="src\images\Carvery-Club-Melton_16_3000x2000_U_100_Long+Edge_Scaled.jpg" alt="Image 3"/>
    <img class='w-[20vw]' src="src\images\HP_SpudBAR-The-Glen_15_Full+resolution_8688x5792_U_100_Adobe_1920.jpg" alt="Image 4"/>
  </div>
  <div class="w-1/3 h-2/3 ml-4">
    <img src="src\images\HP_SpudBAR-The-Glen_07_Full+resolution_5792x8688_U_100_Adobe_1200.jpg" alt="Image 5"/>
  </div>
</div>

<div class="flex m-5 p-5 mt-12 min-w-full h-[80vh] gap-20 ">
  <div class="w-full md:w-2/3 p-6">
    <h1 class="text-[5vh] font-bold text-gray-800 mb-2 text-center">GET YOUR COMPLIMENTARY QUOTE
</h1>
    <p class="text-gray-700 text-[3.5vh] leading-relaxed text-center  bg-gray-100 rounded-lg">

We frequently receive inquiries about whether we can offer quotes without requiring an in-person meeting, and the answer is absolutely! If you're pressed for time and unable to schedule an appointment at our warehouse or meet face-to-face on-site, we're more than happy to provide a rough estimate of the work you require via email. Alternatively, please feel free to reach out to us at +61451580078 to explore this option further.</p>
  </div>
</div>






  </div>

      <Footer />
    </>
  );
}

export default About;
 