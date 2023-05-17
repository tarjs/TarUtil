import haveBind from './haveBind'

let inText: Array<{
  dom: HTMLElement
  text: string
}> = []
const checkDom = (domTree: HTMLElement, key: string, newValue: any) => {
  const childNodes = domTree.childNodes as NodeListOf<HTMLElement>
  forEachChildNodes(childNodes, key, newValue)
}

const forEachChildNodes = (childNodes: NodeListOf<HTMLElement>, key: string, newValue: any) => {
  childNodes.forEach(item => {
    if (item instanceof HTMLElement && item.children.length === 0) {
      if (item.tagName === 'INPUT' && item.getAttribute('data-bind') === key) {
        const inputItem = item as HTMLInputElement
        inputItem.value = newValue
      } else if (item instanceof HTMLElement && item.getAttribute('data-bind') === key) {
        // item with null change
        if (item.innerText === '') {
          item.innerText = newValue        
        }
        else {
          // add `$t` template string to array
          // save template string
          if (item.innerText.indexOf('$t') !== -1) {
            inText.push({
              dom: item,
              text: item.innerText
            })
          }
          // get all `$t` template string
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
    } else if (item instanceof HTMLElement) {
      const itemDom = item.children as unknown as Array<HTMLElement>
      const items: Array<unknown> = []
      for (let i = 0; i < itemDom.length; i++) {
        items.push(itemDom[i])
      }
      forEachChildNodes((items as unknown as NodeListOf<HTMLElement>), key, newValue)
    }
  })
}

export default checkDom