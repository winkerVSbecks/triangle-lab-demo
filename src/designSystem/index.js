import Heading from './Heading';

export { default as Block } from './Block';
export { default as Text } from './Text';
export { default as IconButton } from './IconButton';
export { default as Toolbar } from './Toolbar';
export { default as SVG } from './SVG';
export { default as Spacer } from './Spacer';
export { default as Container } from './Container';
export { default as Main } from './Main';
export { default as Measure } from './Measure';
export { default as Link } from './Link';
export { default as Footer } from './Footer';
export { default as Cover } from './Cover';

export const H1 = Heading;
export const H2 = Heading.withComponent('h2');
export const H3 = Heading.withComponent('h3');
export const H4 = Heading.withComponent('h4');
export const H5 = Heading.withComponent('h5');
export const H6 = Heading.withComponent('h6');
