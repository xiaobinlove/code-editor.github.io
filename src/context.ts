import React, { Context } from 'react'
import { ScriptEditorRef } from './editor'
export interface ContextType {
  editorRef: React.RefObject<ScriptEditorRef> | null
}
export const GlobalContext = React.createContext<ContextType>({ editorRef: null })