import * as React from 'react';
import './App.css';
import { Flex } from 'rebass';
import Button from './components/button';

class App extends React.Component {
  public render() {
    return (
      <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={100}>
        <Button variant="primary">Main button on blue!</Button>

        <Button mt={20} variant="secondary">
          Main button on white!
        </Button>
      </Flex>
    );
  }
}

export default App;
