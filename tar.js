import TarRequest from './TarRequest/TarRequest.js'
import TarFor from './TarFor/TarFor.js'
import TarShow from './TarShow/TarShow.js'
import Observer from './TarReactivity/TarReactivity.js'

export function elemId(id) {
    return document.getElementById(id)
}
export function elemIdSty(id) {
    return document.getElementById(id).style
}
export function elemClass(name, num) {
    return document.getElementsByClassName(name)[num]
}
export function elemClassSty(name, num) {
    return document.getElementsByClassName(name)[num].style
}
export function body() {
    return document.body
}
export function clog(str) {
    return console.log(str);
}

export function request(method, url, value, callback) {
	return TarRequest(method, url, value, callback)
}

export function uFor(tagName, value, elem, array) {
    return TarFor(tagName, value, elem, array)
}

export function show(value) {
    return TarShow(value)
}

export function observer(data, domNode) {
    return Observer(data, domNode)
}