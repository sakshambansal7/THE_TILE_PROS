import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const Footer = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      // Redirect to the contact page
      navigate('/contact');
  };
  return (
    <>
      <div className='bg-[#393939]'>
        <h1 className='text-center text-[#ffff] text-[5vh]'>SINCERE & RELIABLE SERVICE…</h1>
        <h1 className='text-center text-[#ffff] text-[5vh]'>For a project quote, call us today on 6145 158 0078</h1>
      </div>
      <div className='bg-[#DADADA] flex flex-col items-center justify-center p-10'>
        <h1 className='text-center text-[5vh] font-bold'>Make an enquiry</h1>
        <button className='text-center text-[5vh] w-32 h-15 rounded-lg bg-black text-white m-5 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500 duration-300'  id='Contact' onClick={handleClick}>
          Start
        </button>
        <span className='bg-zinc-300 text-center'>powered by Saksham</span>
      </div>
      <div className='flex justify-center gap-14 h-56 p-4'>
        <a  target="_blank" rel="noopener noreferrer">
          <img className='w-52 h-24 filter grayscale hover:filter-none transition duration-300 mt-10 hover:scale-110' src="src\images\australia.webp" alt="img" />
        </a>
        <a  target="_blank" rel="noopener noreferrer">
          <img className='w-52 h-24 filter grayscale hover:filter-none transition duration-300 mt-10 hover:scale-110' src="src\images\member.webp" alt="img" />
        </a>
        <a  target="_blank" rel="noopener noreferrer">
          <img className='w-52 h-24 filter grayscale hover:filter-none transition duration-300 mt-10 hover:scale-110' src="src\images\womo.webp" alt="img" />
        </a>
      </div>
      <div className='bg-black  flex flex-col justify-center items-center'>
        <div className='flex gap-22 justify-center'>
          <a href="https://www.instagram.com/hx7_projects?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='w-12 h-12 m-12 hover:scale-110' style={{ color: "white" }} />
          </a>
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className='w-12 h-12 m-12 hover:scale-110' style={{ color: "white" }} />
          </a>
          <a href="https://example.com/youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube className='w-12 h-12 m-12 hover:scale-110' style={{ color: "white" }} />
          </a>
        </div>
        <img className='h-52 w-82 ' src="src\images\WhatsApp Image 2024-02-20 at 12.53.31_02518d84.jpg" alt="" />
        <h1 className="text-white p-5">Copyright 2024 | All rights reserved | Powered by Saksham</h1>
      </div>
    </>
  );
};

export default Footer;
