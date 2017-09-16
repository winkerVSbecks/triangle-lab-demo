import React from 'react';
import { Text, Link } from 'designSystem';
import { Triangle, Slide } from 'components';

export const Heronian = props => (
  <Slide title="Heronian Triangle" {...props}>
    {{
      media: (
        <Triangle mb={3} coords={[[5 + 33, 58 - 56], [5, 58], [5 + 33, 58]]} />
      ),
      body: (
        <Text>
          A right-angled triangle whose sidelengths are a{' '}
          <Link href="https://en.wikipedia.org/wiki/Pythagorean_triple">
            Pythagorean triple
          </Link>. The side lengths of such a triangle are integers, and its
          area is also an integer, being half of the product of the two shorter
          sides of the triangle, at least one of which must be even.
        </Text>
      ),
    }}
  </Slide>
);
