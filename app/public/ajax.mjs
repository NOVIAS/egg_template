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
        xhr.send(JSON.stringify(data))
        return xhr
    }

    return Query;
}
