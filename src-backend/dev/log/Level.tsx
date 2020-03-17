import { cyan, magenta, red, yellow } from 'colors/safe';

const labelMap = {
  debug: '[DEBUG]',
  info: ' [INFO]',
  warn: ' [WARN]',
  error: '[ERROR]',
  fatal: '[FATAL]',
};

const colorsFnMap = {
  debug: (str: string) => str,
  info: cyan,
  warn: yellow,
  error: red,
  fatal: magenta,
};

type Level = 'debug' | 'info' | 'warn' | 'error' | 'fatal';
const getLabelByLevel = (lv: Level) => labelMap[lv];
const getColorFnByLevel = (lv: Level) => colorsFnMap[lv];

export { Level, getLabelByLevel, getColorFnByLevel };
