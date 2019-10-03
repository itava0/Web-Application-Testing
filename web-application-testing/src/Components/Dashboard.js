import React from 'react';
import Display from './Display';

const DashBoard = (props) => {
  console.log(props);
  return ( 
    <div>
      <Display strikes={props.strikes} balls={props.balls}/>
      <button onClick={props.handleStrikes}>strikes</button>
      <button onClick={props.handleBalls}>ball</button>
      <button onClick={props.handleFoul}>foul</button>
      <button onClick={props.handleHit}>hit</button>
    </div>
   );
}
 
export default DashBoard;