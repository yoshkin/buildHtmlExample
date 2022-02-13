// @ts-check
import Node from './node';

export default class extends Node {
  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}
