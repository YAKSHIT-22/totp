export const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  export const getStartedVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 2.5,
      },
    },
  };
  
  export const arrowVariants = {
    bounce: {
      y: [0, -8, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 2.5,
        },
      },
    },
  };
  
  