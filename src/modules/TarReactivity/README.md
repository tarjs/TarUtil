# TarRequest

This is a simple request function

## Usage

If you want to push value to take request. You can used like
```javascript
tar.request('GET', 'https://xxx', {
    key: 'value'
}, (res) => {
    tar.clog(res);
})
```

If do not have value. You can used like
```javascript
tar.request('GET', 'https://xxx', null, (res) => {
    tar.clog(res);
})
```