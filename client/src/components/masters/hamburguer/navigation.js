import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import { ReactSVG } from "react-svg";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const items = [
  { title: "Home", url: "/" },
  { title: "Proyectos", url: "/work" },
  { title: "Descarga mi CV", url: "/cv" },
];

export const Navigation = ({ toggle }) => (
  <motion.ul
    variants={variants}
    className="flex flex-col gap-9 px-8 pt-[100px] "
  >
    <div className="flex flex-col gap-2 ">
      <motion.p
        variants={variants2}
        className="text-sm  font-light text-gray-600"
      >
        Menu
      </motion.p>

      {items.map((item, index) => (
        <MenuItem item={item} key={index} toggle={toggle} />
      ))}
    </div>
    <div className="flex flex-col gap-4 ">
    <motion.div className="flex flex-col gap-0 " variants={variants2}>
      <p className="text-sm font-light text-orange-600">Ponte en contacto</p>
      <p className="text-md font-regular text-black">
        thomasbarenghi@gmail.com
      </p>
    </motion.div>
    <motion.div className="hidden flex-row items-center justify-start gap-2 lg:flex" variants={variants2}>
      <Link href="https://github.com/thomasbarenghi">
        <ReactSVG
          src="/icon/github.svg"
          className="h-[30px] w-[30px] cursor-pointer "
        />
      </Link>
      <Link href="https://www.linkedin.com/in/thomasbarenghi/">
        <ReactSVG
          src="/icon/linkedin.svg"
          className="h-[30px] w-[30px] cursor-pointer "
        />
      </Link>
    </motion.div>
    </div>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
