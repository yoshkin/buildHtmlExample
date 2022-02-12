// @ts-check

import PairedTag from "./PairedTag";
import SingleTag from "./SingleTag";

const singleTagsList = new Set(["hr", "br", "img"]);
export default (name, ...props) => {
  const CurrentClass = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new CurrentClass(name, ...props);
};
