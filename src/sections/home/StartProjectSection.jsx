import React from 'react'
import StartProject from '../../components/StartProject'

const StartProjectSection = () => {
  return (
    <section className='h-[48em] md:h-[65em] lg:h-[72em] px-[1.5em] md:px-[4em] py-[5em] pb-[2em] flex flex-col items-center justify-between'>
        <StartProject />
        {/* <h1 className='sticky bottom-0 text-white text-[11.5vw] md:text-[11vw] lg:text-[11.5vw] xl:text-[12vw] font-bold'>Whizoid Studio</h1> */}
        <h1 className='sticky bottom-0 text-white text-[13vw] sm:text-[14vw] md:text-[13vw] lg:text-[14vw] xl:text-[14vw] font-bold'>Stream Core</h1>
    </section>
  )
}

export default StartProjectSection