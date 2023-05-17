const Observer = (obj: any, domNode?:string | HTMLElement) => {
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
  return obj
}

let inText: Array<{
  dom: HTMLElement
  text: string
}> = []
const checkDom = (domTree: HTMLElement, key: string, newValue: any) => {
  const childNodes = domTree.childNodes as NodeListOf<HTMLElement>
  childNodes.forEach(item => {
    if (item.tagName === 'INPUT' && item.getAttribute('data-bind') === key) {
      const inputItem = item as HTMLInputElement
      inputItem.value = newValue
    } else if (item instanceof HTMLElement && item.getAttribute('data-bind') === key) {
      if (item.innerText.indexOf('$t') === -1) {
        item.innerText = newValue        
      }
      else {
        if (item.innerText.indexOf('$t') !== -1) {
          inText.push({
            dom: item,
            text: item.innerText
          })
        }
        inText.forEach((text) => {
          if (text.dom === item) {
            item.innerText = text.text.replace(/\$t/g, newValue)
          }
        })
      }
    } else if (item.tagName === 'INPUT' && item.getAttribute('model-value') === key) {
      const inputItem = item as HTMLInputElement
      inputItem.value = newValue
    } else {
      haveBind(item, key, newValue)
    }
  })
}

const haveBind = (dom: HTMLElement, key: string, newValue: any) => {
  if (dom.attributes === undefined) {
    return 
  } else {
    for(let i = 0; i < dom.attributes.length; i++) {
      const domAttr = dom.attributes.item(i) as Attr
      if (domAttr.name.indexOf('bind-') > -1 && domAttr.value === key) {
        const att = domAttr.name.substr(domAttr.name.lastIndexOf("-") + 1)
        dom[att] = newValue
      }
    }
  }
}

export default Observer