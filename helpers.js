export const titleSplitter = (title) => {
  return title
    .split("-")
    .filter((el) => el !== "main" && el !== "master")
    .join(" ");
};
