



export const statuses:string[] = ["suggestion","planned","in-progress","live"];

export const fadeInBottom = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const fadeInTop = {
  initial: { opacity: 0 , y: -40},
  animate: { opacity: 1 , y: 0},
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
};