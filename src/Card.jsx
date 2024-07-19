import React, { useState } from "react";
import { HiArrowDownCircle } from "react-icons/hi2";
import { FaRegFileLines } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";

const Card = ({ data, refrence }) => {
  const [Close, setClose] = useState(data.isclose);
  const [isOpen, setisOpen] = useState(data.tag.isOpen);

  function handleClick() {
    setClose((prev) => !prev);
    setisOpen((prev) => !prev);
  }

  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      dragConstraints={refrence}
      className="relative -z-30 w-48  h-56  bg-zinc-50 text-black rounded-[40px] overflow-hidden pt-8 pl-3 opacity-100"
    >
      <FaRegFileLines />
      <p className="mt-3">{data.desc}</p>
      <div
        className={`absolute left-0 w-full h-[4.5rem]  bottom-0 ${
          isOpen ? "pt-0" : "pt-6"
        }   `}
      >
        <div className="px-3  flex justify-between mb-[2px] mt-0 text-sm ">
          {data.size}
          {Close ? (
            <HiArrowDownCircle onClick={handleClick} size={25} />
          ) : (
             <IoIosCloseCircle size={25} onClick={handleClick} />
          )}
        </div>
        {/* <AnimatePresence> */}
        {isOpen && (
          <motion.div initial={{opacity : 0 }} animate={{opacity : 1 }} exit={{opacity : 0}} transition={{ease : "easeOut" , duration : 2}}
          className={`fade ${
            data.tag.color === "green" ? "bg-green-600" : "bg-blue-600"
            } h-12 flex justify-center items-center`}
            >
              <h1 className=" text-sm font-medium ">{data.tag.content}</h1>
            </motion.div>
        )}
        {/* </AnimatePresence> */}
      </div>
    </motion.div>
  );
};

export default Card;
