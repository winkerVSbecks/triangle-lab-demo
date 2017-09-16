import React from 'react';
import { Text, Block } from 'designSystem';
import { Triangle, Slide } from 'components';

const ObliqueMediaContainer = Block.extend`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Oblique = props => (
  <Slide title="Oblique Triangle" {...props}>
    {{
      media: (
        <ObliqueMediaContainer>
          <Triangle coords={[[15, 5], [5, 40], [55, 40]]} />
          <Triangle coords={[[5, 5], [20, 40], [55, 40]]} />
        </ObliqueMediaContainer>
      ),
      body: (
        <Text>
          A triangle that does not have an angle measuring <code>90°</code>.
          Acute and obtuse triangles are the two different types of oblique
          triangles
        </Text>
      ),
    }}
  </Slide>
);
