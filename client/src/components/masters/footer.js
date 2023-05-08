import NextImage from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function Footer() {
  return (
    <footer className="footer seccion font-outfit flex items-center justify-center  bg-[#f24e1e33] font-semibold marker:fixed">
      <div className="padding-x-estilo2 py-24 ">
        <div className="flex flex-col justify-center items-center rounded-[40px]  ">
          <h1 className="w-full text-center font-medium">
            ¿Tenes algo{" "}
            <span className="text-titulo1-semibold text-4xl text-[#F24E1E] ">
              en mente?
            </span>
          </h1>
          <p className="text-black text-center text-base-light">¡Quiero ser parte de tu equipo! Contáctame ahora.</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="flex flex-row items-center gap-2">
              <NextImage
                src="/icon/email.svg"
                alt="email"
                width={30}
                height={30}
              />
              <p className="underline decoration-[#F24E1E] font-normal text-black decoration-solid">
                thomasbarenghi@gmail.com
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <NextImage
                src="/icon/linkedin.svg"
                alt="email"
                width={30}
                height={30}
              />
              <p className="underline decoration-[#2D90E3] text-black font-normal decoration-solid">
                /in/thomasbarenghi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
