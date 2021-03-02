import React from 'react'

const Actions = (props) => {
  
  return (
    <div className="Actions">
        <button onClick={props.play}>play</button>
        <button onClick={props.pause}>pause</button>
        <button>restart</button>
    </div>
  )
}

export default Actions
