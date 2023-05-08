import React, { useState, useRef, createRef } from 'react'
const MyRef: React.FC = () => {
  let [renderIndex, setRenderIndex] = useState(1)
  let refFromUseRef = useRef<number>()
  let refFromCreateRef:any = createRef()
  console.info(refFromUseRef.current, 'refFromUseRef.current')
  console.info(refFromCreateRef.current, 'refFromCreateRef.current')
  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex
  }
  if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex
  }
  return (
    <>
      <p>Current render index: {renderIndex}</p>
      <p>
        <b>refFromUseRef</b> value: {refFromUseRef.current}
      </p>
      <p>
        <b>refFromCreateRef</b> value:
        {refFromCreateRef.current}
      </p>
      <button onClick={() => {
        setRenderIndex(prev => prev + 1)
      }}>
        點擊
      </button>
    </>
  )
}
export default MyRef