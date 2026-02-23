import React from 'react'
import StartProject from '../components/StartProject'

const StartProjectSection = () => {
  return (
    <div className='h-[53em] md:h-[68em] lg:h-[70em] xl:h-[77em] px-[1.5em] md:px-[4em] py-[5em] flex flex-col items-center justify-between'>
        <StartProject />
        <h1 className='sticky bottom-0 text-white text-[11.5vw] md:text-[11vw] lg:text-[11.5vw] xl:text-[12vw] font-bold'>Whizoid Studio</h1>
    </div>
  )
}

export default StartProjectSection