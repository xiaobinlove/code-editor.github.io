import React, { FC, useMemo, useContext } from 'react'
import { Tree } from 'antd'
import { Model } from '../data/model'

interface PropsType {
  models: Model[];
  placeholderTypes: {
    [k: string]: string
  }
}
const ModelField:FC<PropsType> = ({ models, placeholderTypes }) => {
  const onSelect = (keys: any, info: any) => {
    console.log(keys, 'keys')
    console.log(info, 'info')
  }
  const formatTree = (list: Model[], parent?: any) => {
    console.log(list, 'list')
    return list.map((item: Model) => {
      const data: any = {
        title: item.name,
        key: `${parent?.key || ''}${item.code}`,
        parent,
        code: item.code
      }
      data.children = formatTree(item.children || [], data)
      return data
    })
  }
  const treeData: any[] = useMemo(() => {
    return formatTree(models)
  }, [models])
  return (
    <Tree
      defaultExpandAll
      onSelect={onSelect}
      treeData={treeData}
    />
  )
}
export default ModelField