import React from 'react';
import { Text } from 'designSystem';
import { Triangle, Slide } from 'components';

export const Isosceles = props => (
  <Slide title="Isosceles Triangle" {...props}>
    {{
      media: <Triangle mb={3} coords={[[30, 5], [10, 55], [50, 55]]} />,
      body: (
        <Text>
          A triangle that has two sides of equal length. It also has two angles
          of the same measure, namely the angles opposite to the two sides of
          the same length; this fact is the content of the isosceles triangle
          theorem.
        </Text>
      ),
    }}
  </Slide>
);
