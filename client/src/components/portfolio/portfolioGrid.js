import { motion, AnimatePresence } from "framer-motion";
import { Quick, quickVisibilityExternal, CardGrid } from "@/components";
export default function PortfolioGrid({ items }) {
  return (
    <div>
      <Quick />
      <AnimatePresence>
        <motion.div
          className=" grid h-auto  w-full grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 "
          //animacion desde la derecha
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {items?.map((item) => (
            <div key={item.id}>
              <CardGrid item={item} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
