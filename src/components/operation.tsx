import React, { FC, useContext } from 'react'
import { GlobalContext } from '../context'
import { CompletionsType } from '../editor'
interface PropsType {
  operations: CompletionsType[]
}
const Operation: FC<PropsType> = ({ operations }) => {
  const { editorRef } = useContext(GlobalContext)
  return (
    <div>
      { operations.map(item =>(
        <div 
          key={item.label}
          onClick={() => {
            if (editorRef?.current?.insertText) {
              editorRef.current.insertText(item.template, false)
            }
          }}
          className="px-[12px] py-[4px] hover:(bg-[rgba(0,0,0,0.04)]) cursor-pointer rounded-md"
        >
          {item.label}
        </div>
      )) }
    </div>
  )
}
export default Operation