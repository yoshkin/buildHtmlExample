// @ts-check

import PairedTag from "./pairedTag";
import SingleTag from "./singleTag";

const singleTagsList = new Set(["hr", "br", "img"]);
export default (name, ...props) => {
  const CurrentClass = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new CurrentClass(name, ...props);
};
