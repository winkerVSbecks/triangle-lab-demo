import { Block } from 'designSystem';
import trianglePattern from '../assets/triangle-pattern.svg';

export const Hero = Block.extend`
  background-image: url(${trianglePattern});
  background-position: center center;
  background-repeat: space;
  height: 24rem;
`;
