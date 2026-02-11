import React, { useState } from 'react'

function AddOption(props) {
    const [newOption, setNewOption] = useState("")
    return (
        <div>
            <input
                type="text"
                value={newOption}
                placeholder="Add new option..."
                onChange={(e) => setNewOption(e.target.value)}
            />
            <button onClick={() => {
                console.log(newOption);
                if (!newOption.trim()) {
                    alert("Please enter a name.")
                    return
                }
                props.setOptions(prev => [...prev, newOption])
                props.setVotes(prev => ({
                    ...prev,
                    [newOption]: 0
                }))
                setNewOption("")
            }}>
                Add Option
            </button>
        </div>
    )
}

export default AddOption
