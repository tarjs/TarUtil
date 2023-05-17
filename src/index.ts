import TarRequest from "./modules/TarRequest/index"
import Observer from "./modules/TarReactivity/index"
import TarFn from "./modules/TarFn/index"
import TarTimer from "./modules/TarTimer/index"
import TarStyle from "./modules/TarStyle/index"

const tar = {
    createRequest: TarRequest,
    createObserver: Observer,
    createFn: TarFn,
    createTimer: TarTimer,
    createStyle: TarStyle
}
export default tar

export const createRequest = TarRequest
export const createObserver = Observer
export const createFn = TarFn
export const createTimer = TarTimer
export const createStyle = TarStyle