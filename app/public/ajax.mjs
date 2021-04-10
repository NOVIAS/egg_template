'use strict';

export function XHR() {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 确保可以发送 cooke
    // xhr.withCredentials = true;
    function Query(url, data, method, token = null) {
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json');
        if (token) {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        }
        // 如果需要传输 Cookie 需要加入
        xhr.withCredentials = true;
        xhr.send(JSON.stringify(data));
        return xhr
    }

    return Query;
}
