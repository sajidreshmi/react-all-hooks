import React, { useState, useTransition } from "react"

const UseTransitionDemo = () => {
  const [isPending, startTransition] = useTransition({
    timeoutMs: 3000,
  })
  const [value, setValue] = useState("")
  const [list, setList] = useState([])
  const LIST_SIZE = 20000

  function handleChange(e) {
    setValue(e.target.value)
    startTransition(() => {
      const l = []
      for (let index = 0; index < LIST_SIZE; index++) {
        l.push(e.target.value)
      }
      setList(l)
    })
  }

  return (
    <>
      <input onChange={handleChange} />
      <div>
        {list.map((val, i) => (
          <div key={i}>{val}</div>
        ))}
      </div>
    </>
  )
}

export default UseTransitionDemo
