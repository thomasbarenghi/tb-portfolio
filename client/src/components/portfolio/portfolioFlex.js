import { motion, AnimatePresence } from "framer-motion";
import { Quick, quickVisibilityExternal, Card } from "@/components";
export default function PortfolioFlex({ items }) {
  return (
    <div>
      <Quick />
      <AnimatePresence>
        <motion.div
          className="flex h-auto w-full items-start justify-start gap-4 overflow-x-scroll "
          //animacion desde la derecha
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {items?.map((item) => (
            <div key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
