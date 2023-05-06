import "@/styles/globals.scss";
import { Header, Footer, Master } from "@/components";
import { Provider } from "react-redux";
import store, { persistor } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { Element, scroller } from "react-scroll";

export default function App({ Component, pageProps }) {
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
          <Element name="targetElement">
            <Master >
            <Component {...pageProps} />
            </Master>
          </Element>
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
