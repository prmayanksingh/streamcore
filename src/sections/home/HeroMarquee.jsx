import React from 'react'

const HeroMarquee = () => {
  return (
    <div className='pb-[5rem]'>
        <div className='flex items-center gap-[1.5rem] whitespace-nowrap tracking-widest font-thin text-[#535151] overflow-hidden'>
            <h1 className='text-[4.5em] md:text-[7em]'>eCommerce</h1>
            <i className="ri-shining-fill text-[1.5em]"></i>
            <h1 className='text-[4.5em] md:text-[7em]'>Mobile Apps</h1>
            <i className="ri-shining-fill text-[1.5em]"></i>
            <h1 className='text-[4.5em] md:text-[7em]'>Design</h1>
            <i className="ri-shining-fill text-[1.5em]"></i>
            <h1 className='text-[4.5em] md:text-[7em]'>Development</h1>            
        </div>
    </div>
  )
}

export default HeroMarquee