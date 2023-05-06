import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getPortfolioItems } from "@/redux/slices/portfolio";
import { debounce } from "lodash";

export default function Master({ children }) {
  const dispatch = useDispatch();

  const delayedDispatch = useMemo(
    () =>
      debounce((value) => {
        dispatch(getPortfolioItems(value));
      }, 1000),
    [dispatch]
  );

  useEffect(() => {
    delayedDispatch();
  }, [delayedDispatch]);

  return <div className="">{children}</div>;
}
