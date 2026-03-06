import React from 'react'

const Background = () => {
  return (
    <div className="w-full top-[-10%] min-h-screen max-h-screen flex justify-center items-center text-zinc-800/20 z-10">
    {/* <video className='h-screen w-[100%] object-cover absolute inset-0' muted autoPlay loop src="/images/heroVideo.mp4"></video> */}
    <div class="absolute w-[100%] h-[120%] inset-0 bg-black opacity-70"></div>
    <img className='w-[100%] h-[80%]' src="/images/heroimg.png" alt="" />
    
</div>
  )
}

export default Background