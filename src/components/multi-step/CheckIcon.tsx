import { motion } from "framer-motion";

interface CheckIconProps
  extends React.PropsWithoutRef<React.HTMLProps<SVGSVGElement>> {
  duration: number;
}
function CheckIcon({ duration, ...rest }: CheckIconProps) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
      key="svg"
      {...rest}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: duration,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default CheckIcon;
