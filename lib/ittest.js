function resolveData(data) {
    let arr = []
    for (let k in data) {
        let str = k + '=' + data[k]
        arr.push(str)
    }
    return arr.join('&')
}




function ittest(options) {

    let xhr = new XMLHttpRequest()

    //转化为查询字符串
    let qs = resolveData(options.data)

    if (options.method.toUpperCase() === 'GET') {

        //发get请求
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {

        //发post请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }


    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }

}

