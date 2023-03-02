import { motion } from "framer-motion";
import React, { useState } from "react";
import Step from "./Step";

const MultiStep = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 5;
  return (
    <motion.div
      className="mx-auto mt-12 flex h-fit w-4/6 flex-col items-start rounded-lg bg-white p-10"
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
    >
      <div className="flex w-full justify-around">
        {[...Array(totalSteps)].map((_, step) => {
          step += 1;
          return (
            <Step
              step={step}
              complete={activeStep > step}
              active={step === activeStep}
              key={step}
            />
          );
        })}
      </div>
      <div className="mt-10 w-full">
        <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
        <div className="mt-4 h-4 w-5/6 rounded bg-slate-100" />
        <div className="mt-2 h-4 rounded  bg-slate-100" />
        <div className="mt-2 h-4 w-4/6 rounded bg-slate-100" />
      </div>
      <div className="mt-10 flex w-full justify-between">
        <button
          className="rounded-lg bg-slate-50 py-2 px-4 hover:bg-slate-100 disabled:cursor-not-allowed disabled:bg-white disabled:text-slate-400"
          disabled={activeStep === 1}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </button>
        <button
          className="rounded-lg bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
          disabled={activeStep > totalSteps}
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
});

export default MultiStep;
