import Module from 'module'
import path from 'path'

import log from './log'

const srcDir = path.join(__dirname, '../')
const isFileInSrcDir = (parentFileName: string, fileName: string) =>
  fileName.startsWith('.') &&
  path.join(path.dirname(parentFileName), fileName).startsWith(srcDir)
const removeSrcFromFileName = (fileName: string) =>
  fileName.replace(srcDir, '').replace(/^\W/, '')

const resolvedFileNameMap: {
  [parentFileName: string]: {
    [fileName: string]: boolean;
  };
} = {}

const oldRequireFn = Module.prototype.require
function newRequireFn(this: Module, fileName: string) {
  if (isFileInSrcDir(this.filename, fileName)) {
    const fileNameWithoutSrc = removeSrcFromFileName(fileName)
    const parentFileNameWithoutSrc = removeSrcFromFileName(this.filename)
    if (!(parentFileNameWithoutSrc in resolvedFileNameMap)) {
      resolvedFileNameMap[parentFileNameWithoutSrc] = {}
    }
    resolvedFileNameMap[parentFileNameWithoutSrc][fileNameWithoutSrc] = true
  }
  return oldRequireFn.call(this, fileName)
}
newRequireFn.resolve = oldRequireFn.resolve
newRequireFn.cache = oldRequireFn.cache
newRequireFn.extensions = oldRequireFn.extensions
newRequireFn.main = oldRequireFn.main
Module.prototype.require = newRequireFn

const recursiveCheckCircularDependencies = (
  fileName: string,
  traveledBranch: string[],
) => {
  const i = traveledBranch.indexOf(fileName)
  if (i > 0) {
    return
  }

  traveledBranch.push(fileName)
  if (i === 0) {
    log.fatal(`Circular dependencies: ${traveledBranch.join(' > ')}`)
    return
  }

  Object.keys(resolvedFileNameMap[fileName]).forEach(childFileName => {
    return (
      childFileName in resolvedFileNameMap &&
      recursiveCheckCircularDependencies(childFileName, [...traveledBranch])
    )
  })
}

const checkCircularDependencies = () => {
  Object.keys(resolvedFileNameMap).forEach(fileName => {
    recursiveCheckCircularDependencies(fileName, [])
  })
}

// Add timeout to wait until all files are resolved
setTimeout(checkCircularDependencies, 1000)
