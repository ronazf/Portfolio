import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedTextProps = {
    textClass: [string, string?][];
    element?: keyof JSX.IntrinsicElements;
    className?: string;
    repeat?: boolean;
};

const textAnimationDuration = {
    duration: 1
}

const textAnimations = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.25,
        }
    }
};

export const AnimatedText = ({
    textClass,
    element: Wrapper = "p",
    className,
    repeat = false
}: AnimatedTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: !repeat })

    return <Wrapper className={`${className} preserve-white-space`}>

        <motion.span
            ref={ref}
            variants={textAnimations}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={textAnimationDuration}

        >
            {textClass?.map((element) => (
                <span>
                    {element[0].split('').map((char) => (
                        <motion.span variants={textAnimations} className={element[1]}>
                            {char}
                        </motion.span>
                    ))}
                    <span>&nbsp;</span>
                </span>
            ))}
        </motion.span>
    </Wrapper>
};