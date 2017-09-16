import React from 'react';
import { Text } from 'designSystem';
import { Triangle, Slide } from 'components';

export const Equilateral = props => (
  <Slide title="Equilateral Triangle" {...props}>
    {{
      media: (
        <Triangle
          coords={[
            [30, 4.01923788646684],
            [4.019237886466843, 45],
            [55.98076211353315, 45.000000000000014],
          ]}
        />
      ),
      body: (
        <Text>
          A triangle that has all sides of the same length. It is also a regular
          polygon with all angles measuring <code>60°</code>. Equilateral
          triangles is also equiangular; that is, all three internal angles are
          also congruent to each other and are each <code>60°</code>.
        </Text>
      ),
    }}
  </Slide>
);
