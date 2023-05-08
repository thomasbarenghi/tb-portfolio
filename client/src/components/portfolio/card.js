import NextImage from "next/image";
import { Quick, quickVisibilityExternal } from "@/components";
import { useDispatch } from "react-redux";
import { setCurrentItem } from "@/redux/slices/portfolio";
import { motion, AnimatePresence } from "framer-motion";
export default function PortfolioCard({ item }) {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    console.log("handleCardClick", item);
    dispatch(setCurrentItem(item));
    //
    //console.log("handleCardClick", item.id);
    // dispatch(setActiveItemRed(item.id))
    quickVisibilityExternal();
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className=" portfolioItem aspect-square  min-w-[55vw] cursor-pointer"
        key={item._id}
        style={{
          position: "relative",
          height: "auto",
          aspectRatio: "4/3",
        }}
      >
        <AnimatePresence>
          <motion.div
            className="deslizante absolute left-0 top-0 h-full w-full "
            whileHover={{ scale: 0.95 }}
          >
            <NextImage
              src={item?.coverImage}
              alt={item.title}
              layout="fill"
              className="rounded-3xl  object-cover  "
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
