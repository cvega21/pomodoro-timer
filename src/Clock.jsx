import React from 'react'

const Clock = (props) => {
  const minutes = Math.floor(props.time / 60);
  const actualSeconds = props.time % 60;
  let displaySeconds = actualSeconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2
  });
  let displayMinutes = minutes.toLocaleString('en-US', {
    minimumIntegerDigits: 2
  })

  return (
    <div className="Clock">
      <div className="ClockTimeContainer">
        <p className="ActiveBreakFlag">{(props.breakDidStart ? 'break' : ' ')}</p>
        <div className="ClockTime">
          <p className="ClockNumber">{displayMinutes}</p>
          <p className="ClockEquals">:</p>
          <p className="ClockNumber">{displaySeconds}</p>
        </div>
      </div>
    </div>
  )
}

export default Clock
