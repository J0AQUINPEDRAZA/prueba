import Header from '@/components/Header/Header'
import React from 'react'

function layoutRutas({ children }) {
  return (
    <main className='min-h-[100vh] md:min-h-screen  w-full flex flex-col-reverse md:flex-row'>
      <Header />
      <section
        className='w-full h-full mb-[64px] md:mb-0 min-h-[90vh] md:ml-[64px] 
      flex items-center justify-center flex-col p-6 md:p-8'
      >
        {children}
      </section>
    </main>
  )
}

export default layoutRutas
