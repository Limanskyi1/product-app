export const formatString = (input: string): string => {
  if (!input) {
    return "";
  }

  if (input.toLowerCase() === "ui" || input.toLowerCase() === "ux") {
    return input.toUpperCase();
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
};
