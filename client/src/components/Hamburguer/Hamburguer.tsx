'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './useDimensions'
import Toggle from './Toggle'
import Navigation from './Navigation'
import { ReactSVG } from 'react-svg'

interface Props {
  mode: any
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const sidebarLg = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),

  closed: {
    clipPath: 'circle(30px at calc(100% - 40px) 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const Hamburguer = ({ mode }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [visible, setVisible] = useState(false)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [isLgScreen, setIsLgScreen] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsLgScreen(true)
    } else {
      setIsLgScreen(false)
    }
  }, [])

  const handleOpen = () => {
    setVisible(true)
    setTimeout(() => {
      toggleOpen()
    }, 20)
  }

  const handleClose = () => {
    toggleOpen()
    setTimeout(() => {
      setVisible(false)
    }, 800)
  }

  const handleVisible = () => {
    setVisible(false)
    toggleOpen()
  }

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <ReactSVG
        src='/icon/menu.svg'
        className={`  cursor-pointer fill-current ${
          mode === 'white' ? 'text-white' : 'text-[#FFC3B1] '
        }`}
        onClick={() => {
          handleOpen()
        }}
      />
      {visible && (
        <motion.div
          className='background fixed right-0 top-0 h-screen w-[300px] bg-white shadow-xl lg:left-0 '
          variants={isLgScreen ? sidebar : sidebarLg}
        >
          <Navigation
            toggle={() => {
              handleVisible()
            }}
          />
          {isOpen && (
            <Toggle
              toggle={() => {
                handleClose()
              }}
            />
          )}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Hamburguer
