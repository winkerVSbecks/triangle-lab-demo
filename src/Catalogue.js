import React, { Component } from 'react';
import {
  Container,
  Main,
  Link,
  Spacer,
  Footer,
  Text,
  Cover,
} from 'designSystem';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { dec, inc, handleKeyDown } from './handlers';
import triangles from './triangles';

export class Catalogue extends Component {
  state = {
    index: -1,
  };

  componentDidMount() {
    this.keydownHandler = document.body.addEventListener('keydown', e =>
      this.setState(handleKeyDown(e)),
    );
  }

  render() {
    const { index } = this.state;
    const Content = index === -1 ? Intro : triangles[index];

    return (
      <Container>
        <Cover>
          <Navbar
            px={4}
            onLeft={() => this.setState(dec)}
            onRight={() => this.setState(inc)}
          />

          <Main mx="auto" width={1}>
            <Content px={3} />
          </Main>
        </Cover>

        <Footer px={4} fontSize={0}>
          <Link
            mr={3}
            href="https://github.com/winkerVSbecks/triangle-lab-demo"
          >
            Github
          </Link>{' '}
          <Link href="http://varun.ca">winkerVSbecks</Link>
          <Spacer />
          <Text fontSize={0}>
            All text from{' '}
            <Link href="https://en.wikipedia.org/wiki/Triangle">
              wikipedia.org/Triangle
            </Link>
          </Text>
        </Footer>
      </Container>
    );
  }
}
