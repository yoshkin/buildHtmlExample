// @ts-check
import Node from './node';

export default class extends Node {
  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}

// :: FUNC ::
// import Node from './node';

// function toString() {
//   return `<${this.getName()}${this.getAttributesAsLine()}>`;
// }

// export default function SingleTag(name, attributes) {
//   Node.apply(this, [name, attributes]);
//   this.toString = toString;
// };
