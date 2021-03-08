import React from 'react';
import { Button } from 'react-bootstrap';

const Actions = (props) => {
  return (
    <div className="Actions">
        <Button onClick={props.playPause} variant="light">{(props.isActive === true ? 'pause' : props.sessionDidStart === true ? 'resume' : 'play')}</Button>
        <Button onClick={props.restart} variant="dark">restart</Button>
    </div>
  )
}

export default Actions
