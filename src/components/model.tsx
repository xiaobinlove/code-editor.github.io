import React, { FC, useMemo, useContext } from 'react'
import { Tree } from 'antd'
import { Model } from '../data/model'
import { GlobalContext } from '../context'

interface PropsType {
  models: Model[];
  placeholderTypes: {
    [k: string]: string
  }
}
const ModelField: FC<PropsType> = ({
  placeholderTypes,
  models,
}) => {
  const { editorRef } = useContext(GlobalContext);

  const formatTree = (list: Model[], parent?: any): any[] => {
    return list.map((item: Model) => {
      const data: any = {
        title: item.name,
        key: `${parent?.key || ''}${item.code}`,
        parent,
        code: item.code,
      };
      data.children = formatTree(item.children || [], data);
      return data;
    });
  };

  const treeData: any[] = useMemo(() => {
    return formatTree(models);
  }, [models]);

  return (
    <Tree
      defaultExpandAll
      onSelect={(_, info: any) => {
        const text = `__${placeholderTypes.Field}.${info.node.parent.title}:${info.node.parent.code}.${info.node.title}:${info.node.code}__`;
        if (editorRef?.current?.insertText) {
          editorRef?.current?.insertText(text, false);
        }
      }}
      treeData={treeData}
    />
  );
}

export default ModelField;