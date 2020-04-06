import path from 'path'
import { parse, StackFrame } from 'stack-trace'

const srcDir = path.join(__dirname, '../../')
const rootDir = path.join(srcDir, '../')
const nodeModulesDir = path.join(rootDir, './node_modules')

const cleanFileName = (fileName: string, dir: string) => {
  return fileName.replace(dir, '').replace(/^[\\/]*/, '')
}

const getLocation = (frame: StackFrame) => {
  let fileName = frame?.getFileName()
  if (!fileName) {
    return
  }
  if (fileName.startsWith(srcDir)) {
    fileName = cleanFileName(fileName, srcDir)
  } else if (fileName.startsWith(nodeModulesDir)) {
    fileName = '~' + cleanFileName(fileName, nodeModulesDir)
    fileName = fileName.replace(/([\\/]).+([\\/][^\\/]+[\\/])/, '$1...$2')
  } else if (fileName.startsWith(rootDir)) {
    fileName = '^' + cleanFileName(fileName, rootDir)
  } else {
    return
  }
  return `${fileName}:${frame.getLineNumber()}`
}

const cleanError = (err: Error) => {
  let maxFuncLength = 0
  const stacks: {
    func: string;
    loc: string;
  }[] = []
  const frames = (err && parse(err)) || []
  frames.forEach(frame => {
    const loc = getLocation(frame)
    if (!loc) {
      return
    }
    let func = frame.getFunctionName() || frame.getMethodName()
    func = func ? func.replace(/\S+\./g, '') : '<anonnymous>'
    stacks.push({
      func,
      loc,
    })
    if (func.length > maxFuncLength) {
      maxFuncLength = func.length
    }
  })
  const formattedMessage = (err?.message || '<ERROR>')
    .split('\n')
    .filter(m => !!m.trim())
    .map((m, i) => (i ? '\n      ' : '') + m)
    .join('')
  const formattedStack = stacks
    .map(s => `\n    at ${s.func.padEnd(maxFuncLength, ' ')} ${s.loc}`)
    .join('')
  return formattedMessage + formattedStack
}

export { getLocation }
export default cleanError
