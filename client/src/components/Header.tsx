/* eslint-disable @typescript-eslint/indent */
'use client'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import { useState } from 'react'
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Routes from '@/utils/constants/routes.const'
import { Hamburguer } from '@/components'

interface Props {
  theme?: 'light' | 'transparent'
  layout?: 'simple' | 'full'
}

const Header = ({ theme = 'transparent', layout = 'full' }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (position: number) => {
    setIsScrolled(position > 0)
  }

  const bgColor = isScrolled ? 'bg-[#FFFFFFF1]' : 'bg-transparent'
  console.log('Header', isScrolled, bgColor)

  const textColor = isScrolled
    ? 'text-black'
    : theme === 'transparent'
    ? 'text-white'
    : 'text-black'

  const logoFill = isScrolled
    ? 'text-black'
    : theme === 'transparent'
    ? 'text-white'
    : 'text-black'

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={bgColor}
      classNames={{
        wrapper: 'p-0 h-auto w-full flex justify-between  2xl:container',
        base: 'min-h-[95px] z-50 padding-x-estilo2 fixed py-6',
        content: 'w-full flex justify-between items-center gap-4',
        brand: 'max-w-[185px] ',
        item: `data-[active=true]:font-semibold font-light ${textColor}`
      }}
      isBlurred={isScrolled}
      shouldHideOnScroll={false}
      onScrollPositionChange={(position) => {
        handleScroll(position)
      }}
    >
      <NavbarContent>
        <NavbarItem>
          <div className='relative h-[40px]  w-auto '>
            <Hamburguer mode={theme} />
          </div>
        </NavbarItem>
        <NavbarItem>
          <Link href={Routes.HOME}>
            <ReactSVG
              src='/icon/logo.svg'
              className={`h-[30px] w-[200px] fill-current ${logoFill}`}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <div className='hidden flex-row items-center justify-between gap-2 lg:flex'>
            <Link href='https://github.com/thomasbarenghi'>
              <ReactSVG
                src='/icon/github.svg'
                className='h-[30px] w-[30px] cursor-pointer '
              />
            </Link>
            <Link href='https://www.linkedin.com/in/thomasbarenghi/'>
              <ReactSVG
                src='/icon/linkedin.svg'
                className='h-[30px] w-[30px] cursor-pointer '
              />
            </Link>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
