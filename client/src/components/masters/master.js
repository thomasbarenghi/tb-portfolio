import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getPortfolioItems } from "@/redux/slices/portfolio";
import { debounce } from "lodash";
import { toast } from "sonner";
import { Popup } from "@/components";

export default function Master({ children }) {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);

  const delayedDispatch = useMemo(
    () =>
      debounce((value) => {
        dispatch(getPortfolioItems());
      }, 1000),
    [dispatch]
  );

  useEffect(() => {
    delayedDispatch();
  }, [delayedDispatch]);

  const delayedAlert = useMemo(
    () =>
      debounce((value) => {
        setPopup(true);
      }, 1000),
    []
  );

  useEffect(() => {
    delayedAlert();
  }, [delayedAlert]);

  return (
    <>
      <div className="">{children}</div>
      {popup && (
        <Popup
          title="Hey, bienvenido"
          description="Si visitas un proyecto y no hace nada, espera un momento y vuelve a intentar (aproximadamente 1 minuto y medio). Estos proyectos están alojados en servicios gratuitos y tienen limitaciones de recursos."
          buttonText="Aceptar"
          closePopup={() => setPopup(false)}
        />
      )}
    </>
  );
}
