const TarRequest = (method: string, url: string, value: any, callback: (obj: any) => void ) => {
    const httpRequest: any = new XMLHttpRequest()
    let obj: undefined = undefined
    if (value) {
    	var strArr: string[] = [];
    	var str: string = ''
    	Object.keys(value).forEach((key) => {
    		let name = key
    		let va = value[key]
    		strArr.push(name + '=' + va)
    		str = strArr.join('&')
    	})
    } else {
    	str = ''
    }
	if (method.toUpperCase() === 'GET') {
		if (value) {
			str = '?' + str
		}
        httpRequest.open(method, url + str, true)
        httpRequest.send()
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                obj = JSON.parse(httpRequest.responseText);
                if (callback) callback(obj)
            }
        }
        const transferFailed = () => {
			if (callback) callback('data error')
		}
		httpRequest.addEventListener('error', transferFailed);
    } else if (method.toUpperCase() === 'POST') {
        httpRequest.open(method, url, true)
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpRequest.send(str)
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                obj = JSON.parse(httpRequest.responseText);
                if (callback) callback(obj)
            }
        }
        const transferFailed = () => {
        	if (callback) callback('data error')
        }
        httpRequest.addEventListener('error', transferFailed);
    }
}

export default TarRequest