import React from 'react'
import '../css/Button.css'

function Button(props) {
  return (
    <button 
    onClick={() => {
        props.setVotes(prev => ({
          ...prev,
          [props.name]: prev[props.name] + 1
        }))
      }}
    >Vote</button>
  )
}

export default Button
