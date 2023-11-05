/* eslint-disable @typescript-eslint/indent */
'use client'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import { useState } from 'react'
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Routes from '@/utils/constants/routes.const'
import { type ItemNav, itemsNav } from './itemsNav'
import { usePathname } from 'next/navigation'
import { MobileMenu } from '..'

interface Props {
  theme?: 'light' | 'transparent'
  layout?: 'simple' | 'full'
  lang: LangType
  navigation: any
}

const Header = ({
  theme = 'transparent',
  layout = 'full',
  lang,
  navigation
}: Props) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const navItems = itemsNav(lang, navigation)
  const handleScroll = (position: number) => {
    setIsScrolled(position > 0)
  }

  const bgColor = isScrolled ? 'bg-[#FFFFFFF1]' : 'bg-transparent'

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
      className={bgColor}
      classNames={{
        wrapper:
          'p-0 h-auto w-full flex justify-between  max-w-none  2xl:container',
        base: 'min-h-[95px] w-full z-50  fixed py-6',
        content: 'padding-x-style2',
        item: `data-[active=true]:font-semibold font-light ${textColor}`
      }}
      isBlurred={isScrolled}
      shouldHideOnScroll={false}
      onScrollPositionChange={(position) => {
        handleScroll(position)
      }}
    >
      <NavbarContent>
        <MobileMenu
          isOpen={isMenuOpen}
          toggle={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
          lang={lang}
          navigation={navigation}
        />
        <Link href={Routes.HOME(lang)}>
          <ReactSVG
            src='/icon/logo.svg'
            className={`h-[40px] w-[185px] fill-current ${logoFill}`}
          />
        </Link>
        {layout === 'full' && (
          <>
            <div className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:flex'>
              <div className='flex gap-8'>
                {navItems.map((item: ItemNav, index) => (
                  <Link href={item.path} key={index}>
                    <NavbarItem
                      isActive={pathname === item.path}
                      className='text-black'
                    >
                      {item.name}
                    </NavbarItem>
                  </Link>
                ))}
              </div>
            </div>
            <div className=' flex w-full flex-row items-center justify-end gap-2'>
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
          </>
        )}
      </NavbarContent>
    </Navbar>
  )
}

export default Header
