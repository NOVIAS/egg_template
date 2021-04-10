'use strict';

export function postData(url, data = {}, method, token = null) {
    const headers = {'content-type': 'application/json'};
    token ? headers['Authorization'] = `Bearer ${token}` : headers;
    const init = {
        cache: 'no-cache',
        // 跨域凭证 include
        credentials: "include",
        headers: headers,
        method: method,
        mode: 'cors',
    }
    if (data) init.body = JSON.stringify(data);
    return fetch(url, init)
}
