import React from 'react';
import { Text } from 'designSystem';
import { Triangle, Slide } from 'components';

export const Scalene = props => (
  <Slide title="Scalene Triangle" {...props}>
    {{
      media: <Triangle coords={[[5, 5], [20, 50], [55, 50]]} />,
      body: (
        <Text>
          A scalene triangle has all its sides of different lengths.
          Equivalently, it has all angles of different measure.
        </Text>
      ),
    }}
  </Slide>
);
