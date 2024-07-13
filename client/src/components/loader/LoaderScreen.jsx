import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { textVariants, getStartedVariants, arrowVariants } from '../../constants/variants';
import started from '../../assets/started.svg';
import arrow from '../../assets/arrow.svg';

const LoaderScreen = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleGetStartedClick = () => {
    setIsStarted(true);
  };

  return (
    <AnimatePresence>
      {!isStarted && (
        <motion.section
          className='flex items-center justify-center w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-white min-h-screen'
          initial="visible"
          animate="visible"
          exit="exit"
          variants={getStartedVariants}
        >
          <div className='flex items-center justify-center w-full h-full'>
            <div className='flex items-center justify-center w-max p-2 flex-col gap-2'>
              <motion.h1
                className='text-9xl'
                initial="hidden"
                animate="visible"
              >
                {'OptAuth'.split('').map((char, index) => (
                  <motion.span key={index} custom={index} variants={textVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
              >
                {'By Optmyzr'.split('').map((char, index) => (
                  <motion.span key={index} custom={index + 7} variants={textVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
            <motion.div
              className='flex items-center justify-center absolute bottom-8 right-0 left-0'
              initial="hidden"
              animate="visible"
              variants={getStartedVariants}
              onClick={handleGetStartedClick}
            >
              <div className='flex items-center justify-center relative'>
                <motion.div className='flex w-full h-full'>
                  <motion.img src={started} className='w-32 h-32 animate-spin-slow' alt='OptAuth' />
                </motion.div>
                <motion.div
                  className='absolute flex items-center justify-center top-0 left-0 right-0 bottom-2'
                  variants={arrowVariants}
                  animate="bounce"
                >
                  <motion.img src={arrow} className='w-14 h-14' alt='arrow' />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LoaderScreen;
