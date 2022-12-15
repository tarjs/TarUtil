import TarRequest from "./modules/TarRequest/index"
import Observer from "./modules/TarReactivity/index"

export function request(method: string, url: string, value: unknown, callback: (obj: any) => void) {
	return TarRequest(method, url, value, callback)
}

export function observer(data: unknown, domNode: string) {
  return Observer(data, domNode)
}