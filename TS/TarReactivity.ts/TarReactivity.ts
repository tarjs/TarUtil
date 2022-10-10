export default function Observer(obj: unknown, domNode?:string) {
  const domTree = document.querySelector(domNode!) as HTMLAreaElement
  if (!obj || typeof obj !== 'object') return
  Object.keys(obj).forEach(key => {
    let value = obj[key]
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
  })
}

function checkDom (domTree: HTMLElement, key: string, newValue: any) {
  const childNodes = domTree.childNodes as NodeListOf<HTMLElement>
  childNodes.forEach(item => {
    if (item.tagName === 'INPUT' && item.getAttribute('data-bind') === key) {
      const inputItem = item as HTMLInputElement
      inputItem.value = newValue
    } else if (item instanceof HTMLElement && item.getAttribute('data-bind') === key) {
      item.innerText = newValue
    } else {
      haveBind(item, key, newValue)
    }
  })
}

function haveBind(dom: HTMLElement, key: string, newValue: any) {
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