import identity from 'lodash/identity';

const singleTagsList = new Set(['hr', 'img', 'br']);

export const render = ({name, attributes, body, children }) => {
  const attrsLine = Object.keys(attributes)
    .map((key) => ` ${key}="${attributes[key]}"`).join('');
  const content = children.length > 0 ? children.map(render).join('') : body;

  if (singleTagsList.has(name)) {
    return `<${name}${attrsLine}>`;
  }

  return `<${name}${attrsLine}>${content}</${name}>`;
};

const propertyActions = [
  {
    name: 'body',
    check: (property) => typeof property === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: (property) => property instanceof Array,
    process: (children, callback) => children.map(callback),
  },
  {
    name: 'attributes',
    check: (property) => property instanceof Object,
    process: identity,
  },
];

const getPropertyAction = (property) => propertyActions.find(({ check }) => check(property));

export const parse = (data) => {
  const [tagName, ...properties] = data;
  const root = {
    name: tagName,
    attributes: {},
    body: '',
    children: [],
  };
  return properties.reduce((acc, property) => {
    const { name, process } = getPropertyAction(property);
    return { ...acc, [name]: process(property, parse) };
  }, root);
};
