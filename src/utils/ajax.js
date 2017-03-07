 /* Config Structure
    url:"requesting URL"
    type:"(OPTIONAL) GET, POST, PUT, default - GET"
    contentType: "(OPTIONAL), default json",
    debug: "(OPTIONAL)To display Debug Logs | By default it is false"
    data: "(OPTIONAL) another Nested Object which should contains reqested Properties in form of Object Properties"
    success: "(OPTIONAL) Callback function to process after response | function(data,status)",
    error: "(OPTIONAL)" Callback function to process after response | function(state,status, data)"
*/
export default class Ajax {

    static send(config) {
        let xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
            doneState = 4,
            resType = 'responseText',
            data;

        config.prefix = config.prefix || '';

        if (!config.url) {
            if (config.debug == true) {
                console.log(config.prefix + "Url is required!");
            }
            return;
        }

        if (!config.contentType || config.contentType == 'json') {
            config.contentType = 'json';
            xmlhttp.responseType = 'json';
            resType = 'response';
        }

        config.debug = !!config.debug;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == doneState && xmlhttp.status == 200) {
                if (xmlhttp.responseType != "json" && resType == "response") {
                    config.success && config.success(JSON.parse(xmlhttp[resType]), xmlhttp.readyState);
                } else {
                    config.success && config.success(xmlhttp[resType], xmlhttp.readyState);
                }

                if (config.debug == true) {
                    console.log(config.prefix + "[Success]: ", xmlhttp[resType]);
                }

            } else if (xmlhttp.readyState == doneState) {
                config.error && config.error(xmlhttp.readyState, xmlhttp.status, xmlhttp[resType]);

                if (config.debug == true) {
                    console.log(config.prefix + "[Error]: State, Status: ", xmlhttp.readyState, xmlhttp.status);
                }
            }
        };

        data = this.processedData(config);
        this.sendReq(config, data, xmlhttp);
    }

    static processedData(config) {
        let sendString = [],
            sendData = config.data || '';

        if (sendData && (!config.type || config.type == 'GET')) {
            if (typeof sendData === "string") {
                let tmpArr = String.prototype.split.call(sendData, '&');

                for (let i = 0, j = tmpArr.length; i < j; i++) {
                    let datum = tmpArr[i].split('=');
                    sendString.push(encodeURIComponent(datum[0]) + "=" + encodeURIComponent(datum[1]));
                }
            } else if (typeof sendData === 'object' && !(sendData instanceof String || (FormData && sendData instanceof FormData))) {
                for (let k in sendData) {
                    let datum = sendData[k];
                    if (Object.prototype.toString.call(datum) == "[object Array]") {
                        for (let i = 0, j = datum.length; i < j; i++) {
                            sendString.push(encodeURIComponent(k) + "[]=" + encodeURIComponent(datum[i]));
                        }
                    } else {
                        sendString.push(encodeURIComponent(k) + "=" + encodeURIComponent(datum));
                    }
                }
            }

            sendString = sendString.join('&');
        } else if (sendData) {
            sendString = JSON.stringify(sendData);
        }

        return sendString.length ? sendString : '';
    }

    static sendReq(config, data, xmlhttp) {
        let params = data ? "?" + data : '';

        switch (config.type) {
            case 'POST':
            case 'PUT':
            case 'DELETE':
                xmlhttp.open(config.type, config.url, true);
                this.setHeaders(config, xmlhttp);
                xmlhttp.send(data || null);

                if (config.debug == true) {
                    console.log(config.prefix + "[" + config.type + "]: " + config.url + ", Data:" + data);
                }
                break;
            case 'GET':
            default:
                xmlhttp.open("GET", config.url + params, true);
                this.setHeaders(config, xmlhttp);
                xmlhttp.send();

                if (config.debug == true) {
                    console.log(config.prefix + "GET: " + config.url + '' + params);
                }
                break;
        }
    }

    static setHeaders(config, xmlhttp) {
        if (!config.contentType || config.contentType == 'json') {
            xmlhttp.setRequestHeader('Content-Type', 'application/json');
        } else if (config.contentType != 'no') {
            xmlhttp.setRequestHeader('Content-Type', config.contentType);
        }

        for (let h in config.headers) {
            xmlhttp.setRequestHeader(h, config.headers[j]);
        }

        xmlhttp.withCredentials = config.withCredentials || false;
    }
}