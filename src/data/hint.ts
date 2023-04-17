import { HintPathType } from "../editor";
import { functions } from "./function";
export const hintPaths: any[] = [{
  label: 'user',
  template: 'user',
  detail: '用户',
  type: 'property',
  children: [...functions, {
    label: 'id',
    template: 'id',
    detail: '用户id',
    type: 'property'
  },
  {
    label: '姓名',
    template: 'name',
    detail: '用户姓名',
    type: 'property'
  },
  {
    label: '年龄',
    template: 'age',
    detail: '用户年龄',
    type: 'property'
  },
  {
    label: '性别',
    template: 'sex',
    detail: '用户性别',
    type: 'property'
  }
],
}]