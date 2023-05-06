import NextImage from "next/image";
import { quickVisibilityExternal } from "@/components";
import { useDispatch } from "react-redux";
import { setCurrentItem } from "@/redux/slices/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function CardGrid({ item }) {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    console.log("handleCardClick", item);
    dispatch(setCurrentItem(item));
    quickVisibilityExternal();
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className=" min-h-full min-w-full cursor-pointer"
        key={item._id}
        style={{
          position: "relative",
          height: "auto",
        }}
      >
        <AnimatePresence>
          <motion.div className=" h-full w-full flex flex-col gap-4 " whileHover={{ scale: 0.95 }}>
            <div className="relative aspect-[4/3] h-full w-full ">
              <NextImage
                src={item?.coverImage}
                alt={item.title}
                layout="fill"
                className="rounded-3xl w-full h-full aspect-[4/3] object-cover  "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-titulo3-regular  ">{item.title}</h3>
              <p className="text-sm-light text-black ">{item.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
