import React, { useRef, useState, useEffect } from 'react'

function RefTutorial() {
    const renderCount = useRef(1)
    const [name, setName] = useState('')
    const inputRef = useRef()
    useEffect(() => {
      renderCount.current ++
    
     
    })
    function focus () {
        inputRef.current.focus()
    }
    return (
        <div>
            <h1>Hello</h1> {name}
            <div>
            <input type='text' placeholder='Ex...' onChange={(e)=>setName(e.target.value)} ref={inputRef}/>
                </div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>Focus input</button>
        </div>
    )
}

export default RefTutorial
