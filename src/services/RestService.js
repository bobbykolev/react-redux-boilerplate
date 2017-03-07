import Ajax from '../utils/ajax';

export default class RestService {

    static requestData(method, url, data, contentType) {
        return new Promise(function(resolve, reject) {
            Ajax.send({
                type: method,
                url:  url,
                data: data,
                prefix: '[APP]',
                contentType: contentType || 'json',
                success: resolve,
                error: resolve
            });
        });
    }

    /**
     *
     * @param url - URL
     * @param params - query params
     * @returns promise
     */
    static get(url, params, contentType) {
        return this.requestData('GET', url, params ? params : null, contentType);
    }

    /**
     *
     * @param url - URL
     * @param data - POST data
     * @returns promise
     */
    static post(url, data) {
        return this.requestData('POST', url, data);
    }

    /**
     *
     * @param url - URL
     * @param data - POST data
     * @returns promise
     */
    static put(url, data) {
        return this.requestData('PUT', url, data);
    }

    /**
     *
     * @param url - URL
     * @param data - Data to Delete
     * @returns promise
     */
    static delete(url, data) {
        return this.requestData('DELETE', url, data);
    }
}