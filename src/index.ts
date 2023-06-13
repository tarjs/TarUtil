import TarRequest from './modules/TarRequest/index'
import Observer from './modules/TarReactivity/index'
import TarFn from './modules/TarFn/index'
import TarTimer from './modules/TarTimer/index'
import TarStyle from './modules/TarStyle/index'
import TarWatch from './modules/TarWatch/index'

const tar = {
  createRequest: TarRequest,
  createObserver: Observer,
  createFn: TarFn,
  createTimer: TarTimer,
  createStyle: TarStyle,
  createWatch: TarWatch,
}

const { createObserver, createFn, createStyle, createWatch, createTimer, createRequest } = tar

export { createObserver, createFn, createStyle, createWatch, createTimer, createRequest, tar as default }
