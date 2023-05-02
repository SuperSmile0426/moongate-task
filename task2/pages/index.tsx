import React from 'react';
import Countdown from './components/Countdown';

const IndexPage: React.FC = () => {
  return (
    <div className="flex justify-center p-12">
      <div 
        className="w-96 rounded-xl bg-slate-300 bg-opacity-25 py-8 px-4 text-center"
      >
        <Countdown initialDateTime="2022-01-01T00:00:00" />
      </div>
    </div>
  );
};

export default IndexPage;