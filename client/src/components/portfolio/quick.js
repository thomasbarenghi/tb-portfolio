import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import RenderContent from "@/utils/renderContent";

function Quick() {
  const currentItem = useSelector((state) => state.portfolio.currentItem);

  console.log("activeItem", currentItem);

  const [quickVisibility, setQuickVisibility] = useState(false);
  const handleVisibilityRef = useRef(() => {});

  handleVisibilityRef.current = () => {
    console.log("handleVisibility dentro de Quick");
    setQuickVisibility(!quickVisibility);
  };

  Quick.handleVisibility = handleVisibilityRef.current;

  return (
    <>
      {quickVisibility && (
        <AnimatePresence>
          <div
            className="animate-slide-up bg-[#000000c7] fixed z-[1000] flex h-screen w-screen items-end justify-center pt-16 align-middle"
            style={{ background: "", top: 0, left: 0 }}
            id="overlay"
          >
            <div
              id="close"
              className="absolute right-4 top-4 p-1 "
              onClick={() => setQuickVisibility(false)}
            >
              <Image
                width={20}
                height={20}
                alt={"close"}
                src={"/icon/cross-white.svg"}
              />
            </div>
            <motion.div
              className="relative flex h-full w-full justify-center overflow-y-scroll rounded-t-3xl bg-white  pt-14"
              id="content "
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="relative  flex h-full  w-9/12 flex-col  "
                id="container"
              >
                <div id="content-inner" className="pb-14">
                  <div className="mb-8 flex flex-row justify-between">
                    <div className="text-start">
                      <h1 className="text-2xl font-semibold">
                        {currentItem?.title}
                      </h1>
                      <p className="text-sm">{currentItem?.completionDate}</p>
                    </div>
                    <p
                      className=" block text-start"
                      style={{ maxWidth: "75%" }}
                    >
                      {currentItem?.description}
                    </p>
                  </div>
                  <div
                    className="relative mb-8  w-full items-start text-start"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      layout="fill"
                      className="rounded-3xl object-cover "
                      src={currentItem?.coverImage}
                      alt={currentItem?.title}
                    />
                  </div>
                  <div>
                    <RenderContent content={currentItem?.content} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}

// Agrega una propiedad estática handleVisibility al componente Quick
Quick.handleVisibility = () => {};

export const quickVisibilityExternal = () => {
  console.log("quickVisibilityExternal");
  Quick.handleVisibility();
};

export default Quick;

// import Image from "next/image";
// import { useState } from "react";

// export const quickVisibilityExternal = () => {
//     Quick.handleVisibility();
//   };

// export default function Quick() {
//   const [quickVisibility, setQuickVisibility] = useState(false);

//     const handleVisibility = () => {
//         setQuickVisibility(!quickVisibility);
//     };

//     Quick.handleVisibility = handleVisibility;

//   return (
//     <>
//       {quickVisibility && (
//         <div
//           className="fixed z-10 flex h-screen w-screen items-center justify-center align-middle"
//           style={{ background: "#00000066", top: 0, left: 0 }}
//           id="overlay"
//         >
//           <div className="seccion container flex justify-center" id="content">
//             <div
//               className="relative flex w-full flex-col rounded-3xl bg-white p-10 sm:w-max "
//               id="container"
//             >
//               <div
//                 id="close"
//                 className="absolute top-4 right-4 p-1 "
//                 onClick={() => setQuickVisibility(false)}
//               >
//                 <Image
//                   width={15}
//                   height={15}
//                   alt={"close"}
//                   src={"/icon/cross.svg"}
//                 />
//               </div>
//               <h1 className="text-2xl font-semibold">¡Hola! 👋</h1>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
