import React from 'react'
import Hero from '@/components/sections/home/Hero';
import Introduction from '@/components/sections/home/Introduction';
import Partners from '@/components/sections/home/Partners';
import PracticePreview from '@/components/sections/home/PracticeArea';
import Question from '@/components/sections/home/Question';


const page = () => {
  return (
    <>
      <div className="fixed inset-0 w-full">
        <Hero />
      </div>
    <div className='flex flex-col min-h-screen z-10 relative fade-in'>
        <div className="h-[50dvh] sm:h-screen"></div>
        <div className="w-full bg-background/98 backdrop-blur-xl flex-1">
          <Introduction />
          <Partners />
          <div className="bg-gradient-to-b from-primary/90 to-primary py-16 sm:py-24">
            <Question />
          </div>
        </div>
      </div>
    </>
  )
}

export default page