import React from 'react'

const Clock = ({time}) => {
  return (
    <div className="Clock">
      <div>Session Timer</div>
      <div>{time}</div>
    </div>
  )
}

export default Clock
