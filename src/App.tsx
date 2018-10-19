import * as React from 'react';
import './App.css';
import { Flex, Heading, Card } from 'rebass';

class App extends React.Component {
  public render() {
    return (
      <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={100}>
        <Card bg={'blue'} width={250}>
          <Heading>Komponens</Heading>
        </Card>
      </Flex>
    );
  }
}

export default App;
