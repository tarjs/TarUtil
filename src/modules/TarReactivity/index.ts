import TarFn from "../TarFn/index"
import checkDom from "./checkDom"
import domNode from "./domNode.type"

const Observer = <T>(obj: any, domNode?: domNode, fns?: T) => {
  const domTree = typeof(domNode) === 'string' ? document.querySelector(domNode!) as HTMLAreaElement : domNode as HTMLAreaElement
  if (!obj || typeof obj !== 'object') return
  Object.keys(obj).forEach(key => {
    let value: string | unknown = obj[key]
    checkDom(domTree, key, value)
    Observer(value)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        return value
      },
      set: (newValue) => {
        value = newValue
        Observer(newValue)
        checkDom(domTree, key, newValue)
      }
    })
    const childNodes = domTree.childNodes as NodeListOf<HTMLElement>
    childNodes.forEach((inputNode) => {
      if ((inputNode.tagName === 'INPUT' && inputNode.getAttribute('model-value') === key)) {
        const inputFn = (e: any) => obj[key] = e.target.value
        const inputItem = inputNode as HTMLInputElement
        inputItem.value = obj[key]
        inputNode.addEventListener('input', inputFn)
      }
    })
  })
  TarFn(domNode!, fns)
  return obj
}
export default Observer