/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-[100vh] md:min-h-screen  w-full flex flex-col-reverse md:flex-row'>
      <Header />
      <section
        className='w-full h-full mb-[64px] md:mb-0 min-h-[90vh] md:ml-[64px] 
      flex items-center justify-center flex-col'
      >
        <img
          src='https://wayclo.com.ar/wp-content/uploads/2023/10/wayclo-logo.png'
          alt='logo Wayclo'
        />
      </section>
    </main>
  )
}
