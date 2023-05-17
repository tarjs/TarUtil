export default (node: string | HTMLElement, fns: any) => {
  const dom = typeof(node) === 'string' ? document.querySelector(node!) : node
  const childNodes = dom?.childNodes as NodeListOf<HTMLElement>
  childNodes?.forEach((childNode) => {
    if (childNode instanceof HTMLElement ) {
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
  })
}