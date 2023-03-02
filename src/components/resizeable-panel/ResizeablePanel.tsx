import React from "react";
import useMeasure from "react-use-measure";
import { HTMLMotionProps, motion } from "framer-motion";

type ResizeablePanelProps = {
  wrapperClassName?: string;
} & React.PropsWithChildren<HTMLMotionProps<"div">>;
const ResizeablePanel = ({
  children,
  wrapperClassName,
  ...rest
}: ResizeablePanelProps) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div
      initial={{ height: "auto" }}
      animate={{ height: height }}
      {...rest}
    >
      <div ref={ref} className={wrapperClassName}>
        {children}
      </div>
    </motion.div>
  );
};

export default ResizeablePanel;
