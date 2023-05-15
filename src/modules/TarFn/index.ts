export default (node: string, ...args:Function[]) => {
  const childNodes = document.querySelector(node)?.childNodes as NodeListOf<HTMLElement>
  childNodes?.forEach((childNode) => {
    if (childNode instanceof HTMLElement ) {
      childNode.getAttributeNames().forEach((attr) => {
        if (attr.indexOf('$') != -1) {
          childNode.addEventListener(attr.slice(1), () => {
            args.forEach((fn) => {
              if (childNode.getAttribute(attr) === fn.name)
                fn()
            })
          })
        }
      })
    }
  })
}