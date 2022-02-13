export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes)
      .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}


// :: FUNC ::
// function getName() {
//   return this.name;
// }

// function getAttributesAsLine() {
//   return Object.keys(this.attributes)
//     .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
// }

// export default function Node(name, attributes) {
//   this.name = name;
//   this.attributes = attributes;
//   this.getName = getName;
//   this.getAttributesAsLine = getAttributesAsLine;
// };
