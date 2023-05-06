import NextImage from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { Hamburguer } from "@/components";

export default function Header() {
  const router = useRouter();

  return (
    <header className=" seccion  font-outfit flex items-center  justify-center font-semibold marker:fixed">
      <div className=" padding-x-estilo2 flex flex-row justify-between py-8">
        <div className="relative  z-20 h-[30px] w-[30px]">
          <Hamburguer />
        </div>
        <Link
          href="/"
          className="absolute left-[50%]  w-max  translate-x-[-50%] "
        >
          <NextImage
            src="/icon/logo.svg"
            alt="logo"
            layout="intrinsic"
            width={200}
            height={30}
          />
        </Link>
        <div className="flex flex-row items-center justify-between gap-2">
          <ReactSVG src="/icon/instagram.svg" className="h-[30px] w-[30px] " />
          <ReactSVG src="/icon/linkedin.svg" className="h-[30px] w-[30px] " />
        </div>
      </div>
    </header>
  );
}
