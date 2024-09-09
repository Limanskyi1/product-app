export const createDescription = (status: string) => {
    const stringToLowerCase = status.toLowerCase();
    if (stringToLowerCase === "planned") {
      return "Ideas prioritized for research";
    }
    if (stringToLowerCase === "in-progress") {
      return "Currently being developed";
    }
    if (stringToLowerCase === "live") {
      return "Released features";
    }
  };