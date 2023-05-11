import { motion, AnimatePresence } from "framer-motion";
import { Quick, quickVisibilityExternal, CardGrid } from "@/components";
export default function PortfolioGrid({ items }) {
  return (
    <>
      <Quick />
      <div
        className=" grid h-auto min-w-full max-w-[100vh] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-10 "
        //animacion desde la derecha
      >
        {items?.map((item) => (
          <div key={item.id}>
            <CardGrid item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
