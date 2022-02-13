// @ts-check

import Node from './node';

export default class extends Node {
  constructor(name, attributes, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0
      ? this.children.join('')
      : this.body;

    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }
}


// :: FUNC ::
// import Node from './node';

// function toString() {
//   const value = this.children.length > 0
//     ? this.children.join('')
//     : this.body;

//   return `<${this.getName()}${this.getAttributesAsLine()}>${value}</${this.getName()}>`;
// }

// export default function PairedTag(name, attributes = {}, body = '', children = []) {
//   Node.apply(this, [name, attributes]);
//   this.body = body;
//   this.children = children;
//   this.toString = toString;
// };

// :: PROTO ::
// import Node from './node';

// export default function PairedTag(name, attributes, body = '', children = []) {
//   Node.apply(this, [name, attributes]);
//   this.body = body;
//   this.children = children;
// }

// PairedTag.prototype.toString = function toString() {
//   const value = this.children.length > 0 ? this.children.join('') : this.body;
//   return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
// };

// :: PROTO v2 ::
// import Node from './node';

// export default function PairedTag(name, attributes, body = '', children = []) {
//   Node.apply(this, [name, attributes]);
//   this.body = body;
//   this.children = children;
// }

// PairedTag.prototype = Object.create(Node.prototype);
// PairedTag.prototype.toString = function toString() {
//   const value = this.children.length > 0 ? this.children.map((child) => child.toString()).join('') : this.body;
//   return `<${this.getName()}${this.getAttributesAsLine()}>${value}</${this.getName()}>`;
// };
