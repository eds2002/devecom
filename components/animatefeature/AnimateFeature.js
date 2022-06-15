import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1},
  hidden: { opacity: 0 }
};

const AnimateFeature = ({feature}) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold:1,
  });
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
  return (
    <motion.div
      className="w-full text-[#F7EBFF] h-[300px] my-20"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1 className = "flex items-center justify-center w-full h-full text-5xl font-bold text-center lg:text-6xl">{feature} </h1>
    </motion.div>
  )
}

export default AnimateFeature