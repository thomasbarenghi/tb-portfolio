import Image from "next/image";
import { Main, PortfolioGrid } from "@/components";
import Head from "next/head";
import { useSelector } from "react-redux";
import { tecnologias, resenasItems } from "@/data/data";
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
        <title>Work</title>
      </Head>
      <Main>
        <Hero sortedPosts={sortedPosts} />
      </Main>
    </>
  );
}

function Hero({ sortedPosts }) {
  return (
    <section className="padding-x-estilo2 flex flex-col gap-10 pt-5 pb-24" id="home">
      <AnimatePresence>
        <motion.div
          className="flex w-full flex-col items-start justify-center gap-4"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex  flex-col items-start justify-start gap-1 "
            //animacion desde la izquierda
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-titulo2-light  ">
              Descubre mi enfoque en{" "}
              <span className="text-titulo2-semibold font-semibold">
                diseño y desarrollo web
              </span>
            </h1>
            <p className="text-base-light w-full lg:w-[75%] text-black">
              Cada proyecto representa un desafío que abordé con dedicación y
              creatividad, y que me permitió adquirir nuevas habilidades y
              conocimientos.
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <PortfolioGrid items={sortedPosts} />
    </section>
  );
}
