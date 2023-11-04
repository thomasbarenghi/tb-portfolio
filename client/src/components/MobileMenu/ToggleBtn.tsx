import Image from 'next/image'

export interface Props {
  isOpen: boolean
  toggle: () => void
}

const ToggleBtn = ({ isOpen, toggle }: Props) => {
  const logo = '/icon/menu-blue.svg'
  return (
    <Image
      src={isOpen ? '/icon/cross.svg' : logo}
      className='cursor-pointer lg:hidden'
      alt='toggle'
      width={24}
      height={24}
      onClick={toggle}
    />
  )
}

export default ToggleBtn
