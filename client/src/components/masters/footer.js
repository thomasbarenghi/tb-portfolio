import NextImage from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function Footer() {
  return (
    <footer className="footer seccion font-outfit flex items-center justify-center  bg-[#f24e1e33] font-semibold marker:fixed">
      <div className="padding-x-estilo2 py-24 ">
        <div className="flex flex-col items-center justify-center rounded-[40px]  ">
          <h1 className="w-full text-center font-medium">
            ¿Tenés algo{" "}
            <span className="text-titulo1-semibold text-4xl text-[#F24E1E] ">
              en mente?
            </span>
          </h1>
          <p className="text-base-light text-center text-black">
            ¡Quiero ser parte de tu equipo! Contáctame ahora.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="flex flex-row items-center gap-2">
              <NextImage
                src="/icon/email.svg"
                alt="email"
                width={30}
                height={30}
              />
              <p className="font-normal text-black underline decoration-[#F24E1E] decoration-solid">
                thomasbarenghi@gmail.com
              </p>
            </div>
            <Link href="https://www.linkedin.com/in/thomasbarenghi/">
              <div className="flex flex-row items-center gap-2">
                <NextImage
                  src="/icon/linkedin.svg"
                  alt="email"
                  width={30}
                  height={30}
                />
                <p className="font-normal text-black underline decoration-[#2D90E3] decoration-solid">
                  /in/thomasbarenghi
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
