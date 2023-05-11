import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";
import { ReactSVG } from "react-svg";
import { useMediaQuery } from "@chakra-ui/react";

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };





export const Hamburguer = ({mode}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
//Averiguamos si es una pantalla mayor a 1024px

const [isLgScreen, setIsLgScreen] = useState(false);

useEffect(() => {
  if(window.innerWidth > 1024){
    setIsLgScreen(true);
  }else{
    setIsLgScreen(false);
  }
}, []);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

  const sidebarLg = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),

    closed: {
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const handleOpen = () => {
    setVisible(true);
    setTimeout(() => {
        toggleOpen();
    }, 20);
    };

    const handleClose = () => {
    
    toggleOpen();
    setTimeout(() => {
        setVisible(false);
    }, 800);
    };

    const handleVisible = () => {
    setVisible(false);
    toggleOpen();
    };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <ReactSVG
        src="/icon/menu.svg"
        className={`  cursor-pointer fill-current ${mode === "white" ? "text-white" : "text-[#FFC3B1] " }`}
        onClick={() => {
          handleOpen();
        }}
      />
      {visible && (
        <motion.div
          id="okok"
          className="background fixed right-0 lg:left-0 top-0 h-screen w-[300px] bg-white shadow-xl "
          variants={isLgScreen ? sidebar : sidebarLg}
        >
          <Navigation toggle={() => handleVisible()} />

          {isOpen && <MenuToggle toggle={() => handleClose()} />}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Hamburguer;



// export const Hamburguer = ({mode}) => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const [visible, setVisible] = useState(false);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);
//   const isLgScreen = useMediaQuery("(min-width: 992px)");

//   const sidebar = {
//     open: (height = 1000) => ({
//       clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 20,
//         restDelta: 2,
//       },
//     }),
//     closed: {
//       clipPath: "circle(30px at 40px 40px)",
//       transition: {
//         delay: 0.5,
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//   };

//   const sidebarLg = {
//     open: (height = 1000) => ({
//       clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 20,
//         restDelta: 2,
//       },
//     }),

//     closed: {
//       clipPath: "circle(30px at calc(100% - 40px) 40px)",
//       transition: {
//         delay: 0.5,
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//   };

//   const handleOpen = () => {
//     setVisible(true);
//     setTimeout(() => {
//         toggleOpen();
//     }, 20);
//   };

//   const handleClose = () => {
//     toggleOpen();
//     setTimeout(() => {
//         setVisible(false);
//     }, 800);
//   };

//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       custom={height}
//       ref={containerRef}
//     >
//       <ReactSVG
//         src="/icon/menu.svg"
//         className={`h-[30px] w-[30px] cursor-pointer fill-current ${
//           mode === "white" ? "text-white" : "text-[#FFC3B1] "
//         }`}
//         onClick={() => {
//           handleOpen();
//         }}
//       />
//       {visible && (
//         <motion.div
//           id="okok"
//           className="background fixed top-0 h-screen w-[300px] bg-white shadow-xl"
//           style={{
//             right: isLgScreen ? 0 : "auto",
//             left: !isLgScreen ? 0 : "auto",
//           }}
//           variants={isLgScreen ? sidebarLg : sidebar}
//         >
//           <Navigation />
//           {isOpen && <MenuToggle toggle={() => handleClose()} />}
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Hamburguer;