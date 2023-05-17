export default (shadow: ShadowRoot, style: string) => {
  const styleDom = document.createElement('style')
  styleDom.innerHTML = style
  shadow.appendChild(styleDom)
}