



export const statuses:string[] = ["suggestion","planned","in-progress","live"];



export const roadmapColors:{[key:string]:string} = {
  "planned":"#F49F85",
  "in-progress":"#AD1FEA",
  "live":"#62BCFA",
}

export const newFeedback = {
  category: "",
  title: "",
  description: "",
  upvotes: 0,
  status: "suggestion",
  comments: [],
};

// Anims
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