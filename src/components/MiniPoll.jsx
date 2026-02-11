import React, { useState } from 'react'
import Button from './Button'
import ToggleResults from './ToggleResults'
import AddOption from './AddOption'

function MiniPoll() {
    const [options, setOptions] = useState(["React", "Vue", "Svelte"])
    const [votes, setVotes] = useState({ React: 0, Vue: 0, Svelte: 0 })
    const [showResults, setShowResults] = useState(false)
    return (
        <>
            {options.map((item, index) => {
                return <div key={index}>{item} <Button name={item} setVotes={setVotes} /> </div>
            })}
            <ToggleResults showResults={showResults} setShowResults={setShowResults} />
            {showResults && (
                <div>
                    {options.map((option, index) => (
                        <div key={index}>
                            {option}: {votes[option]}
                        </div>
                    ))}
                </div>
            )}

            <AddOption
                setOptions={setOptions}
                setVotes={setVotes}
            />

        </>
    )
}

export default MiniPoll
