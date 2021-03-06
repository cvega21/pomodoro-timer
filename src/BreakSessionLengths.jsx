import React from 'react';
import { Button } from 'react-bootstrap';

const BreakSessionLengths = (props) => {
  
  return (
    <div className="BreakSessionContainer">
      <div className="SessionLength">
        <h5>Session Length</h5>
        <div className="NumberArrowContainerSession">
          <i class="fas fa-arrow-up" onClick={props.increase}></i>
          <div>{props.session}</div>
          <i class="fas fa-arrow-down" onClick={props.decrease}></i>
        </div>
      </div>
      <div className="BreakLength">
        <h5>Break Length</h5>
        <div className="NumberArrowContainerBreak">
          <i class="fas fa-arrow-up" onClick={props.increase}></i>
          <div>{props.break}</div>
          <i class="fas fa-arrow-down" onClick={props.decrease}></i>
        </div>
      </div>
    </div>
  )
}

export default BreakSessionLengths
