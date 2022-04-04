export default function TarFor(tagName, value, elem, array) {
	for (var i = 0; i < array.length; i++) {
		let obj = {}
		let vn
		if (typeof(array[0]) != typeof(obj)){
			vn = array[i]
		} else {
			vn = array[i][value]
		}
		let newElement = document.createElement(tagName)
		let Text = document.createTextNode(vn)
		newElement.appendChild(Text)
		newElement.className = value
		if (elem) {
			document.getElementById(elem).appendChild(newElement)
		} else {
			document.body.appendChild(newElement)
		}
	}
}