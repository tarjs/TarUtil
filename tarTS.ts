import TarRequest from "./TS/TarRequest/TarRequest"
import Observer from "./TS/TarReactivity.ts/TarReactivity"

export function request(method: string, url: string, value: unknown, callback: (obj: any) => void) {
	return TarRequest(method, url, value, callback)
}

export function observer(data: unknown, domNode: string) {
  return Observer(data, domNode)
}