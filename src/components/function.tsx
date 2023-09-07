import React, { useContext, FC } from 'react'
import { FunctionType } from '../editor/interface';
import { GlobalContext } from '../context';

interface PropsTypes {
  functions: FunctionType[]
}
const Function: FC<PropsTypes> = ({ functions }) => {
  const { editorRef } = useContext(GlobalContext)
  return (
    <div>
      {
        functions.map(item => {
          return (
            <div
              key={item.label}
              onClick={() => {
                console.log(editorRef, 'editorRef')
                if (editorRef?.current?.insertText) {
                  editorRef.current.insertText(`${item.template}`, true)
                }
              }}
              className="px-[12px] py-[4px] hover:(bg-[rgba(0,0,0,0.04)]) cursor-pointer rounded-md"
            >
              {item.label}
            </div>
          )
        })
      }
    </div>
  )
}
export default Function