import TarRequest from "./modules/TarRequest/index"
import Observer from "./modules/TarReactivity/index"
import TarFn from "./modules/TarFn/index"

const tar = {
    createRequest: TarRequest,
    createObserver: Observer,
    createFn: TarFn
}
export default tar

export const createRequest = TarRequest
export const createObserver = Observer
export const createFn = TarFn