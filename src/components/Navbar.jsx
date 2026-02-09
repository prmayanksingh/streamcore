import '../style/font.css'
const Navbar = () => {
  return (
    <div className='sticky top-0 z-999 px-[2rem] md:px-[3rem] lg:px-[3.8rem] py-[1.5rem] md:py-[2rem] lg:py-[2.2rem] flex justify-between items-center text-[clamp(.5em,3vw,1em)]'>
        <div>
            <h1 className='text-[1.5em] md:text-[2em] font-[monument] font-bold tracking-widest'>WHIZOID</h1>
            <h6 className='text-[.6em] md:text-[.7em] tracking-widest text-center font-[monument]'>STUDIO</h6>
        </div>
        <div className='flex items-center gap-[1em] md:gap-[1.5em]'>
            <div className='bg-white/10 backdrop-blur-md h-fit px-[.9em] md:px-[.8em] py-[.6em] md:py-[.4em] rounded-full'><i className="ri-lightbulb-line text-[1.2em] md:text-[1.5em]"></i></div>
            <h1 className='border-2 rounded-full px-[.7em] md:px-[.9em] py-[.4em] md:py-[.4em] text-[1.2em] md:text-[1.2em] font-semibold'><span className='hidden md:inline'>Say Hello</span> <i className="ri-arrow-right-up-line"></i></h1>
            <div className='bg-white px-[.7em] md:px-[.7em] py-[.4em] md:py-[.4em] text-[1.2em] md:text-[1.3em] rounded-full'><i className="ri-menu-line text-black font-bold"></i></div>
        </div>
    </div>
  )
}

export default Navbar