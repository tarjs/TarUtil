import TarRequest from "./modules/TarRequest/index"
import Observer from "./modules/TarReactivity/index"
import TarFn from "./modules/TarFn/index"
import __createTimer from "./modules/TarTimer/index"

const tar = {
    createRequest: TarRequest,
    createObserver: Observer,
    createFn: TarFn,
    createTimer: __createTimer
}
export default tar

export const createRequest = TarRequest
export const createObserver = Observer
export const createFn = TarFn
export const createTimer = __createTimer