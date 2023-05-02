import React from 'react';
import Countdown from './components/Countdown';

const IndexPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <Countdown initialDateTime="2022-01-01T00:00:00"/>
    </div>
  );
};

export default IndexPage;