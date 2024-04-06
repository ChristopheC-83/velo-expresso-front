export const subTitleVariants = {
  initialFromLeft: {
    opacity: 0.15,
    x: -75,
  },
  initialFromRight: {
    opacity: 0.15,
    x: 75,
  },
  finalState: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: -0.15,
      ease: "easeInOut",
    },
  },
};

export const cardToUpVariants = {
  initialFromDown: {
    opacity: 0.15,
    y: 150,
  },
  finalState: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: -0.15,
      ease: "easeInOut",
    },
  },
};

export const cardToUpVariantsScale = {
  initialFromDown: {
    opacity: 0.75,
    y: 40,
    scale: 0.9,
  },
  finalState: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      delay: -0.15,
      ease: "easeInOut",
    },
  },
};
