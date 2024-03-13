'use client'
import { links } from '@/utils/services/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
  const pathName = usePathname()
  return (
    <header className='fixed bottom-0'>
      <nav className='h-[64px] w-screen md:w-[64px] bg-blackCards md:h-screen flex items-center justify-center'>
        <ul className='list-none flex md:flex-col gap-5 md:gap-0'>
          {links.map((link) => (
            <li
              key={link.path}
              className={`py-5 px-2 md:px-5 md:py-2 ${
                pathName === link.path
                  ? 'text-blue border-t-2 md:border-t-0 md:border-r-2 border-blue shadow-headerMobileBtns md:shadow-headerDesktopBtns'
                  : ''
              }`}
            >
              <Link className='link-none' href={link.path}>
                <link.icon className='w-6 h-6' />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
