import log from '../dev/log'
import { ModelAttributes } from './Model'
import supportedTypes from './supportedTypes'

export default function valdiateDefineModel<A extends ModelAttributes>(
  attrs: A,
) {
  const supported = Object.keys(supportedTypes)
  Object.entries(attrs).forEach(([k, a]) => {
    // Ensure the type is exactly only one of the supported types
    const types = supported.filter(n => n in a)
    log.fatal(
      `Invalid column options for ${name}.${k}, expect one of ${supported} but found ${
        types.length ? types : 'none'
      }`,
      types.length !== 1,
    )
  })
}
