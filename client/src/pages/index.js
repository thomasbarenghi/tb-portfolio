import Image from "next/image";
import { Main, PortfolioGrid } from "@/components";
import Head from "next/head";
import { useSelector } from "react-redux";
import { tecnologias, resenasItems, valoresItems } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";

export default function Home() {
  const items = useSelector((state) => state?.portfolio?.items);

  const sortedPosts = items
    .slice()
    .sort((a, b) => {
      // Convertimos las fechas a objetos Date
      const dateA = new Date(a.completionDate);
      const dateB = new Date(b.completionDate);

      // Comparamos las fechas y retornamos el resultado de la comparación
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 6);

  console.log(items);

  return (
    <>
      <Head>
        <title>Inicio | Thomas Barenghi</title>
      </Head>
      <Main className="pt-0">
        <Hero sortedPosts={sortedPosts} />
        <SobreMi />
        <Habilidades />
        <Resenas />
        <Line />
        <Portfolio sortedPosts={sortedPosts} />
      </Main>
    </>
  );
}

function Line() {
  return (
    <div className="padding-x-estilo2 ">
      <hr className=" border-t-2 border-gray-200" />
    </div>
  );
}

function Hero({ sortedPosts }) {
  return (
    <section
      className="relative flex h-[85vh] lg:h-[65vh] w-full flex-col items-center justify-center gap-10 "
      id="home"
    >
      <AnimatePresence>
        <motion.div
          className="padding-x-estilo2 z-20 flex w-full flex-col items-center justify-center gap-4 text-white"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex flex-col lg:flex-row w-full items-start lg:items-center justify-center gap-4 "
            //animacion desde la izquierda
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/image/thomas.png"
              alt="Thomas Barenghi"
              width={100}
              height={100}
              className="aspect-square rounded-full object-cover"
            />
            <h1 className="text-titulo2-light  text-white ">
              Hola! soy{" "}
              <span className="text-titulo2-semibold font-semibold text-white">
                Thomas Barenghi, <br />
              </span>
              desarrollador{" "}
              <span className="text-titulo2-semibold font-georgiaBoldItalic font-semibold italic text-white">
                Fullstack
              </span>{" "}
              y diseñador{" "}
              <span className="text-titulo2-semibold font-georgiaBoldItalic font-semibold italic text-white">
                UI/UX
              </span>
            </h1>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute left-0 top-0 z-[-1] h-full  w-full bg-black">
        <Image
          src="/image/demo6.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute left-0 top-0 z-[0] h-full w-full bg-black opacity-70 "></div>
    </section>
  );
}

function SobreMi() {
  return (
    <section
      className="padding-x-estilo2 flex flex-col gap-2  pb-24 pt-24 "
      id="home"
    >
      <h1 className="text-titulo1-regular color-neutral-950 ">
        Hey, gracias por visitar mi portfolio,{" "}
        <span className="text-titulo1-semibold">conozcámonos un poco mas </span>
        <span className="text-titulo1-semibold animate-pulse">❤️</span>
      </h1>
      <p className="text-base-light text-black">
        Soy Thomas Barenghi, diseñador UX/UI y desarrollador web fullstack con
        20 años de edad. Resido en Buenos Aires y quiero estudiar Desarrollo de
        Software en UADE. Además, complemento mi formación en el bootcamp Soy
        Henry, donde adquiriré más de 800 horas de experiencia y desarrollaré
        proyectos prácticos. Me esfuerzo por combinar mis habilidades técnicas
        con mi pasión por la creatividad para crear soluciones digitales
        innovadoras y atractivas para el usuario.
      </p>
    </section>
  );
}

function Habilidades() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-10 bg-gray-100 "
      id="home"
    >
      <div className="padding-x-estilo2  flex w-full items-center justify-center gap-4">
        <div className="flex w-full flex-col items-center justify-center gap-2 py-24">
          <h1 className="w-full text-start">
            Mis <span className=" text-4xl font-semibold ">habilidades </span>
            🤖🤯
          </h1>
          <p className="mb-6 text-start text-black">
            He creado aplicaciones y sitios web innovadores y atractivos, y he
            trabajado en proyectos desafiantes tanto en el desarrollo front-end
            como en el back-end. Soy apasionado por la tecnología y siempre
            estoy buscando maneras de mejorar mis habilidades y aprender nuevas
            tecnologías. Me siento cómodo trabajando en diferentes entornos y
            plataformas, y estoy emocionado por lo que puedo crear en el futuro
            con mis habilidades en programación web.
          </p>
          <AnimatePresence>
            <div className="flex w-full flex-row flex-wrap justify-start gap-4">
              {tecnologias.map((tecnologia, index) => (
                <motion.div
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.2 }}
                  key={index}
                  style={{
                    position: "relative",
                    minHeight: "40px",
                    minWidth: "40px",
                    height: "auto",
                    width: "auto",
                  }}
                >
                  <Image
                    src={tecnologia.url}
                    alt={tecnologia.title}
                    layout="fill"
                  />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Valores() {
  return (
    <section className="padding-x-estilo2 flex w-full flex-col items-start justify-start gap-2 bg-white py-24 text-start">
      <div className=" flex flex-col gap-10">
        <h1 className="w-full text-start">
          ¿Cuales son{" "}
          <span className=" text-4xl font-semibold ">mis valores?</span>
        </h1>
        <div className="grid w-full grid-cols-2 gap-10">
          {valoresItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 rounded-3xl text-start"
            >
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={item.icono}
                  alt={item.titulo}
                  width={40}
                  height={40}
                />
                <h3 className="font-semibold">{item.titulo}</h3>
              </div>

              <p className="text-black">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio({ sortedPosts }) {
  return (
    <section className="padding-x-estilo2 flex flex-col gap-8 py-24" id="home">
      <AnimatePresence>
        <motion.div
          className="flex w-full flex-col items-start justify-center gap-2"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-start justify-start gap-1 "
            //animacion desde la izquierda
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="w-full text-start">
              Mis proyectos{" "}
              <span className=" text-4xl font-semibold ">destacados 🙌</span>
            </h1>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <PortfolioGrid items={sortedPosts} />
    </section>
  );
}

function Resenas() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  };

  return (
    <section
      className="padding-x-estilo2 flex flex-col gap-10 py-20 pt-24  "
      id="home"
    >
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <h1 className="w-full text-start">
          Reseñas de <span className=" text-4xl font-semibold ">colegas 🤓</span>
        </h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {resenasItems.map((item, index) => (
            <div
              key={index}
              className="masonry-grid-item flex  flex-col gap-3 rounded-3xl"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={item.picture}
                  alt={item.author}
                  width={60}
                  height={60}
                  className="aspect-square rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base-semibold">{item.author}</h3>
                  <p className="text-sm-light text-black">{item.position}</p>
                </div>
              </div>
              <p className="text-base-light text-black">{item.text}</p>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
