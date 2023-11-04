/* eslint-disable @typescript-eslint/indent */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ItemNav } from '../Header/itemsNav'

interface Props {
  toggle: () => void
  items: any
}

const MobileMenuNav = ({ toggle, items }: Props) => {
  const pathname = usePathname()
  const activeClass = (href: string) =>
    pathname === href ? '!font-semibold' : '!font-light'

  return (
    <div className='flex flex-col gap-5'>
      {items.map((item: ItemNav, index: number) => (
        <div
          key={index}
          className='flex h-full flex-col items-start justify-center'
          onClick={toggle}
        >
          <Link href={item.path}>
            <p className={`text-title1 text-black ${activeClass(item.path)}`}>
              {item.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MobileMenuNav
