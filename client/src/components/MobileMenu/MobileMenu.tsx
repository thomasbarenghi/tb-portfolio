import ToggleBtn from './ToggleBtn'
import Image from 'next/image'
import MobileMenuNav from './Nav'
import { itemsNav } from '../Header/itemsNav'
import { createPortal } from 'react-dom'

export interface Props {
  isOpen: boolean
  toggle: () => void
  lang: LangType
  navigation: any
}

const MobileMenu = ({ isOpen, toggle, lang, navigation }: Props) => {
  const navItems = itemsNav(lang, navigation)

  return (
    <>
      {!isOpen && <ToggleBtn isOpen={isOpen} toggle={toggle} />}
      {isOpen &&
        createPortal(
          <div className='padding-x-style2 fixed left-0 top-0 z-50 flex h-screen w-screen flex-col gap-14 bg-white py-8'>
            <div className='flex w-full items-center justify-between'>
              <Image src='/icon/logo.svg' alt='logo' width={185} height={40} />
              <div
                className='flex cursor-pointer items-center gap-1'
                onClick={toggle}
              >
                <p className='text-black'>Close</p>
                <Image
                  src='/icon/cross-black.svg'
                  alt='logo'
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <MobileMenuNav toggle={toggle} items={navItems} />
          </div>,
          document.body
        )}
    </>
  )
}

export default MobileMenu
