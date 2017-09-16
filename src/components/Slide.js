import React from 'react';
import { Block, Measure, H2 } from 'designSystem';

const SlideContainer = Block.withComponent('article').extend`
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: 60em) {
    display: flex;
  }
`;

const MediaContainer = Block.extend`flex: 1 1 auto;`;

export const Slide = ({ children: { media, body }, title, ...props }) => (
  <SlideContainer {...props}>
    <MediaContainer mr={[0, 0, 4]}>{media}</MediaContainer>
    <Measure>
      <H2>{title}</H2>
      {body}
    </Measure>
  </SlideContainer>
);
