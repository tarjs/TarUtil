# TarUtil

这是个用原生 JavaScript 编写的工具类，它包含了一些常见的工具

使用方法：**import * as tar from '此包在你项目的位置/tar.js'** \
**如果你使用的是 ts 请使用 tarTS.ts**

## 方法：
### 1. **tar.request(method, url, value, callback)** -- method 为请求类型，值只能为 “GET” 或 “POST”，url 为 请求链接，值为字符串，value 为请求参数，值为对象，无需请求参数时应为 null，callback 为回调函数

<br>
以下是使用演示：

有 value 参数时调用：
```javascript
tar.request('GET', 'https://xxx', {
    key: 'value'
}, (res) => {
    tar.clog(res);
})
```
无 value 参数时调用：
```javascript
tar.request('GET', 'https://xxx', null, (res) => {
    tar.clog(res);
})
```
### 2. **tar.uFor(tagName, value, elem, array)** -- tagName 为标签名，value 为数组内对象名及标签className（注：如果数组内非对象这个值仅为标签className），elem 为在哪个 id 为 elem 的标签内循环渲染标签，以上参数均为字符串，array 为数组，传入并进行循环渲染的值
<br>
以下为使用演示：

数组内为对象时：

```javascript
tar.uFor('BUTTON', 'name', null, [
    {
        name: 'xxx'
    },
    {
        name: 'xxx'
    },
    {
        name: 'xxx'
    }
])
```
为简单数组时：

```javascript
tar.uFor('div', '', 'text', ['xxx', 'xxx', 'xxx', 'xxx'])
```

### 3. **tar.observer(data, domNode)** -- data 为你需要使用的响应式的对象， domNode 为需要挂载的根 dom，在 html 中使用 data-bind 来绑定 html 中标签的值，使用 bind-attr 来绑定标签属性的值
<br>
以下为使用演示：

html

```html
<div id="app">
    <input bind-value="input"/>
    <span data-bind="result"></span>
    <span bind-style="color">确定</span>
</div>
```
js

```javascript
const data = {
    input: '123',
    result: 'res',
    color: 'color: red'
}

tar.observer(data, '#app')
```