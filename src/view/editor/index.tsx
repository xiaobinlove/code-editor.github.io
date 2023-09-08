import React, { useState, useMemo, FC, useRef, useCallback } from 'react'
import { Tabs } from 'antd'
import ModelFiled from '../../components/model'
import { models } from "../../data/model";
import Function from '../../components/function'
import Operation from '../../components/operation';
import { functions } from '../../data/function';
import { operations } from '../../data/operation';
import { hintPaths } from '../../data/hint'
import { useLocalStorageState } from 'ahooks'
import Editor, { CommonPlaceholderThemes, FunctionType, ScriptEditorRef } from '../../editor';
import { KeywordsConfigType } from '../../pages/keywords'
import { GlobalContext } from '../../context'
import './index.less'
const placeholderTypes = {
  Field: 'f'
}
const placeholderThemes = {
  [placeholderTypes.Field]: CommonPlaceholderThemes.geekblue
}
const EditorView: FC = () => {
  const [value, setValue] = useState<string>('')
  const [mode, setMode] = useState('code')
  const [localFunctions = [], setLocalFunctions] = useLocalStorageState<FunctionType[]>(
    'functions',
    {
      defaultValue: functions,
    }
  );
  const [keywordsConfig = [], setKeywordsConfig] = useLocalStorageState<KeywordsConfigType>(
    'keywords-config',
    {
      defaultValue: {
        color: 'red',
        keywords: []
      }
    }
  )
  const tabItems = useMemo(() => [
    {
      key: 'model',
      label: '字段',
      children: (<ModelFiled placeholderTypes={placeholderTypes} models={models} />)
    },
    {
      key: 'function',
      label: '函数',
      children: (<Function functions={localFunctions} />)
    },
    {
      key: 'operation',
      label: '逻辑运算符',
      children: (<Operation operations={operations} />)
    }
  ], [])
  const completions = useMemo(
    () => [...localFunctions, ...operations],
    [localFunctions, operations]
  );
  const onValueChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  const editorRef = useRef<ScriptEditorRef>(null)
  return (
    <GlobalContext.Provider value={{ editorRef }}>
      <div className='editor-view'>
        <div className="sider">
          <Tabs size="large" tabPosition="left" items={tabItems} />
        </div>
        <div className="content">
          <Editor
            completions={completions}
            keywords={keywordsConfig.keywords}
            keywordsColor={keywordsConfig.color}
            placeholderThemes={placeholderThemes}
            functions={localFunctions}
            ref={editorRef}
            height="calc(100vh - 48px)"
            mode={mode}
            defaultValue=""
            hintPaths={hintPaths}
            onValueChange={onValueChange}
          />
        </div>
      </div>

    </GlobalContext.Provider>
  )
}
export default EditorView;