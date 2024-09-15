import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInBottom,fadeIn,fadeInTop } from "../constants";
interface IMotionProps {
  initial: {};
  animate: {};
  exit: {};
  transition: {};
}
const createMotionWrapper = (motionProps: IMotionProps) => {
  return function Wrapper({
    children,
    delay,
  }: {
    children: ReactNode;
    delay?: number;
  }) {
    return (
      <motion.div
        initial={motionProps.initial}
        animate={motionProps.animate}
        exit={motionProps.exit}
        transition={{ ...motionProps.transition, delay }}
      >
        {children}
      </motion.div>
    );
  };
};

export const FadeInItemBottom = createMotionWrapper(fadeInBottom);
export const FadeInItem = createMotionWrapper(fadeIn);
export const FadeInItemTop = createMotionWrapper(fadeInTop);


