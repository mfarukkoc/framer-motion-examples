import React, { useReducer } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface Count {
  previous: number;
  current: number;
}

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

interface VariantsProps {
  directionMultiplier: number;
  width: number;
}
const variants = {
  enter: ({ directionMultiplier, width }: VariantsProps) => ({
    x: width * directionMultiplier,
  }),
  center: { x: 0 },
  exit: ({ directionMultiplier, width }: VariantsProps) => ({
    x: -width * directionMultiplier,
  }),
};

const Carousel = () => {
  const [count, setCount] = useReducer(
    (previousCount: Count, count: number) => ({
      previous: previousCount.current,
      current: count,
    }),
    { previous: 0, current: 1 }
  );
  const directionMultiplier = count.current > count.previous ? 1 : -1;
  const [ref, { width }] = useMeasure();
  const variantCustom: VariantsProps = { directionMultiplier, width };
  return (
    <motion.div
      className="mx-auto h-full w-4/6 rounded-lg bg-white p-3"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
    >
      <div className="flex flex-col">
        <div className="flex w-full justify-center">
          <button onClick={() => setCount(count.current - 1)}>
            <ChevronLeftIcon className="h-10 w-10 p-2" />
          </button>
          <div
            ref={ref}
            className="relative flex h-48 w-1/2 min-w-[12rem] items-center justify-center overflow-hidden bg-slate-300"
          >
            <AnimatePresence mode="sync" custom={variantCustom}>
              <motion.div
                key={count.current}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={variantCustom}
                transition={{ duration: 1 }}
                className={`absolute flex h-40 w-40 items-center justify-center ${
                  colors[Math.abs(count.current % colors.length)]
                }`}
              >
                {count.current}
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={() => setCount(count.current + 1)}>
            <ChevronRightIcon className="h-10 w-10 p-2" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;
