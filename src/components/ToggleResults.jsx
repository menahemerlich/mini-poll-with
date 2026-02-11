import React from 'react'

function ToggleResults(props) {    
  return (
    <button
    onClick={()=>{
        if (props.showResults){
        props.setShowResults(false)

        } else{
            props.setShowResults(true)

        }
    }}
    >Toggle Results</button>
  )
}

export default ToggleResults
