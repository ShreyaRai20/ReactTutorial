import {motion} from 'motion/react'


function Content() {
  return (
    <div className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center"
    style={{
        backgroundColor: `radial-gradiant(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transition 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
        }}>
        
        <motion.button 
        // initial={{
        //     rotate:0,
        // }}
        // animate={{
        //     // rotate:20,
        //     rotate:[0,10,0],
        // }}
        // transition={{
        //     duration:0.5,
        //     ease:"easeInOut"
        // }}

        initial={{
            opacity:0,
        }}
        animate={{
            opacity:1,
        }}

        whileHover={{
            rotateX:20,
            rotateY:20,
            boxShadow: "0px 20px 50px rgba(0,112,184,0.7)",
            y:-20
        }}
        whileTap={{
            y:20,
        }}
        style={{
            translateZ:100,
        }}
        transition={{
            duration:0.3,
            ease:"easeInOut"
        }}
        
        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer" >
            <span className='group-hover:text-cyan-500'>
                Subscribe
            </span>
        <span className="absolute  inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto">
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-3/4 mx-auto blur-sm"></span>

        </span>
        </motion.button>

    </div>
  )
}

export default Content

/*
motion.div/button/etc
whileHover, whileTap, animate, exit, initial, transition, 


*/