import TarRequest from "./modules/TarRequest/index"
import Observer from "./modules/TarReactivity/index"
import TarFn from "./modules/TarFn/index"

const tar = {
    request: TarRequest,
    observer: Observer,
    createFn: TarFn
}
export default tar