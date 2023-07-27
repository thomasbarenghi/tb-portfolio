import "@/styles/globals.scss";
import { Header, Footer, Master } from "@/components";
import { Provider } from "react-redux";
import store, { persistor } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

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
