import { motion, AnimatePresence } from "framer-motion";
import { Quick, quickVisibilityExternal, CardGrid } from "@/components";
export default function PortfolioGrid({ items }) {
  return (
    <div>
      <Quick />

      <div
        className=" grid h-auto w-full max-w-[100vh] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-4 "
        //animacion desde la derecha
      >
        {items?.map((item) => (
          <div key={item.id}>
            <CardGrid item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
