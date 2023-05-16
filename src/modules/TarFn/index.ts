export default (node: string | HTMLElement, ...args:Function[]) => {
  const dom = typeof(node) === 'string' ? document.querySelector(node!) : node
  const childNodes = dom?.childNodes as NodeListOf<HTMLElement>
  childNodes?.forEach((childNode) => {
    if (childNode instanceof HTMLElement ) {
      childNode.getAttributeNames().forEach((attr) => {
        if (attr.slice(0, 1) === '$') {
          childNode.addEventListener(attr.slice(1), (e) => {
            args.forEach((fn) => {
              if (childNode.getAttribute(attr) === fn.name)
                fn(e)
            })
          })
          if (childNode.tagName === 'INPUT' && attr.indexOf('.')) {
            const event = attr.split('.')[0]
            const keyCode = attr.split('.')[1]
            childNode.addEventListener(event.slice(1), (e) => {
              const keyboardEvent = e as KeyboardEvent
              if (keyCode === keyboardEvent.code.toLocaleLowerCase()) {
                args.forEach((fn) => {
                  if (childNode.getAttribute(attr) === fn.name) 
                    fn(e)
                })
              }
            })
          }
        }
      })
    }
  })
}