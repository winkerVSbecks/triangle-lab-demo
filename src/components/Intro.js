import React from 'react';
import { Measure, Block, Text } from 'designSystem';
import { Hero } from './Hero';

const IntroContainer = Block.extend`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const Intro = props => (
  <IntroContainer pv={6} {...props}>
    <Measure>
      <Text mb={4}>A catalogue of triangles</Text>
    </Measure>
    <Hero width={1} />
  </IntroContainer>
);
