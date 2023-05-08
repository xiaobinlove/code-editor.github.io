interface matchHintObj {
  code: string,
  name: string,
  curFlag: string
}
export const lintReg = /__(.+?)__/g
export const getMatchHintObj = (text: string, mode = 'code'):matchHintObj => {
  const [curFlag, ...texts] = text.split('.');
  const code = texts.map(t => t.split(':')[mode === 'code' ? 1 : 0])[1];
  const name = texts.map(t => t.split(':')[mode === 'code' ? 1 : 0])[0];
  return {
    code,
    name,
    curFlag
  }
}