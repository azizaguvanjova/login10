import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const App = () => {
  return (
    <div className="flex h-screen">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default App;
