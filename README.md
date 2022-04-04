# TarUtil

这是个用原生 JavaScript 编写的工具类，它包含了一些常见的工具

使用方法：**import * as tar from '此包在你项目的位置/tar.js'**

---
## 基础方法：
### 1. **tar.elemId(id)** -- id 为 Dom 的 id 标签，值为字符串，等价于 document.getElementById(id)
### 2. **tar.elemIdSty(id)** -- id 为 Dom 的 id 标签，值为字符串，等价于 document.getElementById(id).style
### 3. **tar.elemClass(name, num)** -- name 为 Dom 的 class 标签,值为字符串, num 为此标签在页面的位置，值为数值，等价于 document.getElementsByClassName(name)[num]
### 4. **tar.elemClassSty(name, num)** -- name 为 Dom 的 class 标签,值为字符串, num 为此标签在页面的位置，值为数值，等价于 document.getElementsByClassName(name)[num].style
### 5. **tar.body()** -- 等价于 document.body
### 6. **tar.clog(str)** -- str 为 输出字符串，等价于 console.log(str)

## 其他方法：
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