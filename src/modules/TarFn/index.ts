import domNode from "../TarReactivity/domNode.type"

export default <T>(node: domNode, fns: T) => {
  const dom = typeof(node) === 'string' ? document.querySelector(node!) : node
  const childNodes = dom?.childNodes as NodeListOf<HTMLElement>
  forEachDom(childNodes, fns)
}

const forEachDom = (childNodes: NodeListOf<HTMLElement>, fns: any) => {
  childNodes?.forEach(childNode => {
    if (childNode instanceof HTMLElement && childNode.children.length === 0) {
      if (childNode instanceof HTMLElement) {
        childNode.getAttributeNames().forEach((attr) => {
          if (attr.slice(0, 1) === '$') {
            childNode.addEventListener(attr.slice(1), (e) => {
              for (const key in fns) {
                if (childNode.getAttribute(attr) === key)
                  fns[key](e)
              }
            })
            // input kkeyboard event
            if (childNode.tagName === 'INPUT' && attr.indexOf('.')) {
              const event = attr.split('.')[0]
              const keyCode = attr.split('.')[1]
              childNode.addEventListener(event.slice(1), (e) => {
                const keyboardEvent = e as KeyboardEvent
                if (keyCode === keyboardEvent.code.toLocaleLowerCase()) {
                  for (const key in fns) {
                    if (childNode.getAttribute(attr) === key)
                      fns[key](e)
                  }
                }
              })
            }
          }
        })
      }
    } else if (childNode instanceof HTMLElement) {
      const itemDom = childNode.children as unknown as Array<HTMLElement>
      const items: Array<unknown> = []
      for (let i = 0; i < itemDom.length; i++) {
        items.push(itemDom[i])
      }
      forEachDom((items as unknown as NodeListOf<HTMLElement>), fns)
    }
  })
}