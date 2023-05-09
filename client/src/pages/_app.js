import "@/styles/globals.scss";
import { Header, Footer, Master } from "@/components";
import { Provider } from "react-redux";
import store, { persistor } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
MouseFollower.registerGSAP(gsap);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, [router.pathname]);

  useEffect(() => {

    if(window.innerWidth < 1024) return;

    if (isMounted && process.browser) {
      const cursor = new MouseFollower({
        iconSvgSrc: "/icon/instagram.svg",
        iconSvgClassName: "clase-svg",
        iconSvgNamePrefix: "-",
      });

      const elementosConClase = document.querySelectorAll(".deslizante");

      elementosConClase.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.setText("Ver proyecto");
        });

        el.addEventListener("mouseleave", () => {
          cursor.removeText();
        });
      });

      return () => {
        elementosConClase.forEach((el) => {
          el.removeEventListener("mouseenter", () => {
            cursor.setText("Ver proyecto");
          });
  
          el.removeEventListener("mouseleave", () => {
            cursor.removeText();
          });
        });
  
        cursor.destroy();
      };
    }
  }, [isMounted, router.pathname]);

  const handleScroll = () => {
    const scrollableElement = document.documentElement;

    if (
      scrollableElement.scrollTop <
      scrollableElement.scrollHeight - window.innerHeight
    ) {
      scrollableElement.style.overflow = "hidden";

      setTimeout(() => {
        scroller.scrollTo("targetElement", {
          duration: 500, // Duración de la animación (en milisegundos)
          smooth: "easeInOutQuart", // Función de aceleración (puedes probar diferentes opciones)
          offset: -100, // Desplazamiento adicional desde el destino (en píxeles)
        });

        setTimeout(() => {
          scrollableElement.style.overflow = "auto";
        }, 500); // Tiempo de espera antes de habilitar el scroll nuevamente (en milisegundos)
      }, 200); // Tiempo de espera antes de iniciar el scroll suavizado (en milisegundos)
    }
  };

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Toaster
            position="bottom-left"
            toastOptions={{
              className: "max-w-[85vw] xs:max-w-none ",
            }}
          />

            <Master>
              <Component {...pageProps} />
            </Master>

          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
