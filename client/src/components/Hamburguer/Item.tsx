'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  item: any
  toggle: () => void
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const MenuItem = ({ item, toggle }: Props) => (
  <motion.li
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={toggle}
  >
    <Link href={item.url}>
      <p className='text-titulo3 w-full cursor-pointer text-start font-normal text-black '>
        {item.title}
      </p>
    </Link>
  </motion.li>
)
