import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CheckIcon from "./CheckIcon";
interface StepProps
  extends React.PropsWithoutRef<React.HTMLProps<HTMLDivElement>> {
  step: number;
  complete?: boolean;
  active?: boolean;
}
function Step({ step, active, complete, ...rest }: StepProps) {
  const status = active ? "active" : complete ? "complete" : "inactive";
  const duration = 0.2;

  return (
    <motion.div
      animate={status}
      className="relative flex items-center justify-center overflow-visible rounded-full"
    >
      <motion.div
        className="absolute h-full w-full rounded-full"
        initial={false}
        variants={{
          active: {
            scale: 1.2,
            background: "var(--blue-100)",
            transition: {
              type: "tween",
              ease: "easeOut",
              duration: duration,
            },
          },
          complete: {
            scale: [1.2, 1],
            background: "var(--blue-500)",
            transition: {
              type: "tween",
              ease: "easeOut",
              duration: duration,
            },
          },
          inactive: {
            scale: 0,
          },
        }}
      />
      <motion.div
        initial={false}
        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full  border-2 font-semibold`}
        variants={{
          active: {
            background: "var(--white)",
            borderColor: "var(--blue-500)",
            color: "var(--blue-500)",
          },
          complete: {
            background: "var(--blue-500)",
            borderColor: "var(--blue-500)",
            color: "var(--blue-500)",
          },
          inactive: {
            background: "var(--white)",
            borderColor: "var(--slate-200)",
            color: "var(--slate-400)",
          },
        }}
        transition={{
          duration: duration,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {complete && (
            <CheckIcon className="h-6 w-6 text-white" duration={duration} />
          )}
          {!complete && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: duration,
              }}
              key="indicator"
            >
              {step}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Step;
