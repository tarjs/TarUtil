# TarReactivity

This is a function to make data to reactivity.

## Usage

You need push a DOM node and a data to this function.

Create a html file, and add this DOM node.

```html
<div id="app">
    <input bind-value="input"/>
    <span data-bind="result">result: $t</span>
    <span bind-style="color">return</span>
</div>
```
After you need create a data object to function.

```javascript
const data = {
    input: '123',
    result: 'res',
    color: 'color: red'
}

tar.createObserver(data, '#app')
// or
const data = tar.createObserver({
    input: '123',
    result: 'res',
    color: 'color: red'
}, '#app')
```

If you want bind function you can push a functons object

```javascript
const count = () => {
    data.count = data.count + 1
}

const data = tar.createObserver({
    count: 1
}, '#app', { count })
```