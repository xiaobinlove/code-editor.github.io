export interface Model {
  code: string
  name: string
  children?: Model[]
  type: 'model' | 'field',
  value?: any
}
export const models: Model[] = [
  {
    code: 'goods',
    name: '商品',
    type: 'model',
    children: [
      {
        code: 'id',
        name: 'id',
        type: 'field',
        value: 1
      },
      {
        code: 'name',
        name: '商品名称',
        type: 'field',
        value: '洗面奶'
      },
      {
        code: 'price',
        name: '商品价格',
        type: 'field',
        value: '$20'
      },
      {
        code: 'specifications',
        name: '商品规格',
        type: 'field',
        value: '20ml'
      },
    ]
  }
]