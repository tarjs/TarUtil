function haveBind(dom: HTMLElement, key: string, newValue: any) {
  if (dom.attributes === undefined) { /* empty */ }
  else {
    for (let i = 0; i < dom.attributes.length; i++) {
      const domAttr = dom.attributes.item(i) as Attr
      if (domAttr.name.includes('bind-') && domAttr.value === key) {
        const att = domAttr.name.substr(domAttr.name.lastIndexOf('-') + 1)
        dom[att] = newValue
      }
    }
  }
}

export default haveBind
