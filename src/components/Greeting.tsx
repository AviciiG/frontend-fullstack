import React from 'react';


interface GreetingProps {
  name: string; 
}

const Greeting = (props: GreetingProps) => {
  return (
    <div>
      <h2>Привет, {props.name}!</h2>
    </div>
  );
};

export default Greeting;