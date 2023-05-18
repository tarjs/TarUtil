# TarFn

This is a function to bind event on node.

## Usage

You need push a DOM node and functions to this function.

Create a html file, and add this DOM node.

```html
<div id="app">
    <button $click="count" data-bind="count">count: $t</button>
</div>
```

```javascript
const data = tar.createObserver({
    count: 1
}, '#app')

const count = () => {
  data.count = data.count + 1
}

tar.createFn('#app', { count })
```

Now you bind `count` function to `button`