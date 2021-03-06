import React from 'react'

const Clock = ({time}) => {
  const minutes = Math.floor(time / 60);
  const actualSeconds = time % 60;
  let displaySeconds = actualSeconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2
  });
  let displayMinutes = minutes.toLocaleString('en-US', {
    minimumIntegerDigits: 2
  })

  return (
    <div className="Clock">
      <div className="ClockTimeContainer">
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
