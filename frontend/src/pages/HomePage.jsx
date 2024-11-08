import React from 'react'
import Left2 from '../components/left/left2/Left2';
import Left from '../components/left/Left1/Left';
import Right from '../components/right/Right';

const HomePage = () => {
  return (
    <div className="h-screen flex w-full overflow-hidden scroll-none">
      <Left2 />
      <Left />
      <Right />
    </div>
  );
}

export default HomePage
