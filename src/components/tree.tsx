import { CaretRightOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { ReactNode, memo, useMemo, useRef, useState } from 'react';
import './tree.less'
export type DataNode = {
  key: string | number;
  title: string;
  disabled?: boolean;
  icon?: ReactNode;
  children?: DataNode[];
}
export type TitleRender<T> = (node: T) => ReactNode;
const defaultNodeRender: TitleRender<DataNode> = (node) => <span>{node.title}</span>;

export interface Props<T extends DataNode = DataNode> {
  treeData: T[];
  titleRender?: TitleRender<T>;
  defaultExpand?: number | 'all' | ((node: T) => boolean);
  level?: number;
  onSelect?: (selectedkey: string, selectedNode: T, e: Event) => void;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}
function Component<T extends DataNode = DataNode>({
  treeData,
  level = 1,
  titleRender = defaultNodeRender,
  onSelect,
  className,
  defaultExpand = 'all',
  disabled,
  icon,
}: Props<T>) {
  const expandMap = useRef<{ [key: string]: boolean }>({});
  useMemo(() => {
    treeData.forEach((node) => {
      if (expandMap.current[node.key] === undefined) {
        expandMap.current[node.key] = typeof defaultExpand === 'function' ? defaultExpand(node) : defaultExpand === 'all' ? true : level <= defaultExpand;
      }
    })
  }, [defaultExpand, treeData, level])

  const [, setUid] = useState(0);

  const handleExpand = (item: T) => {
    expandMap.current[item.key] = !expandMap.current[item.key];
    setUid(Date.now());
  }
  const handleSelect = (item: T, e: Event) => {
    if (disabled || item.disabled) {
      return;
    }
    onSelect?.(item.key, item, e)
  }
  const children = treeData.map((item) => {
    const hasChildren = item.children;
    const isExpanded = expandMap.current[item.key];
    const nodeIcon: ReactNode = item.icon || icon || null;
    return (
      <div
        key={item.key}
        data-key={item.key}
        className={classnames('xdag-comp-SimpleTree__node', {
          'xdag-comp-SimpleTree__disabled': disabled || item.disabled,
          'xdag-comp-SimpleTree__leaf': !hasChildren,
          'xdag-comp-SimpleTree__fold': hasChildren,
          'xdag-comp-SimpleTree__expanded': isExpanded,
        })}
      >
        <div className="xdag-comp-SimpleTree__title-wrap">
          <span className="xdag-comp-SimpleTree__switcher" onClick={() => handleExpand(item)}>
            <CaretRightOutlined />
          </span>
          <span className="xdag-comp-SimpleTree_title" onClick={(e: any) => handleSelect(item, e)}>
            {nodeIcon}
            {titleRender(item)}
          </span>
        </div>
        {hasChildren && (
          <div className='xdag-comp-SimpleTree__children'>
            <Children<T>
              treeData={item.children! as T[]}
              level={level + 1}
              titleRender={titleRender}
              defaultExpand={defaultExpand}
              onSelect={onSelect}
              disabled={disabled}
              icon={icon}
            />
          </div>
        )}
      </div>
    )
  });
  if (level === 1) {
    return <div className={classnames('xdag-comp-SimpleTree', className)}>{children}</div>;
  } else {
    return <>{children}</>;
  }
}
const Children = memo(Component) as typeof Component;
export default Children;
