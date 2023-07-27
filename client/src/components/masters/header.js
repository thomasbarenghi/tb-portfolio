import NextImage from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { Hamburguer } from "@/components";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();

  const [headerType, setHeaderType] = useState("default");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderType("alternative");
      } else {
        setHeaderType("default");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`  seccion font-outfit fixed   z-[1000]  flex w-full items-center  justify-center font-semibold marker:fixed ${
        headerType === "alternative"
          ? "hidden bg-[#00000096] backdrop-blur-xl"
          : ""
      }`}
    >
      <div className=" padding-x-estilo2 flex flex-row-reverse items-center justify-between py-8 lg:flex-row">
        <div className="relative h-[40px]  w-auto ">
          <Hamburguer mode={router.pathname === "/" ? "white" : "black"} />
        </div>
        <Link
          href="/"
          className=" h-max lg:absolute lg:left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] "
        >
          <ReactSVG
            src="/icon/logo.svg"
            className={`h-[30px] w-[200px] fill-current ${
              router.pathname === "/" ? "text-white" : "text-black"
            }`}
          />
        </Link>
        <div className="hidden flex-row items-center justify-between gap-2 lg:flex">
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
        </div>
      </div>
    </header>
  );
}
