const { requestDelete } = require('./http/http-delete');
const { requestGet } = require('./http/http-get');
const { requestPatch } = require('./http/http-patch');
const { requestPost } = require('./http/http-post');
const { requestPut } = require('./http/http-put');
const { requestMultipart } = require('./http/http-multipart');

class HttpRequest {
  private baseUrl = '';

  private path = '';

  private headers = {};

  private reqParams = {};

  private loggerValue = undefined;

  private getUrl = () => `${this.baseUrl}${this.path}`;

  private getParams = () => {
    const params = {
      url: this.getUrl(),
      headers: this.headers,
      reqParams: this.reqParams,
      logger: this.loggerValue,
    };

    return params;
  };

  setBaseUrl(baseUrlValue = '') {
    this.baseUrl = baseUrlValue;
    return this;
  }

  setPath(pathValue = '') {
    this.path = pathValue;
    return this;
  }

  setLogger(loggerValue: any) {
    this.loggerValue = loggerValue;
    return this;
  }

  addHeaders(incomingHeaders = {}) {
    this.headers = {
      ...this.headers,
      ...incomingHeaders,
    };
    return this;
  }

  addReqParams(incomingReqParams = {}) {
    this.reqParams = {
      ...this.reqParams,
      ...incomingReqParams,
    };
    return this;
  }

  delete() {
    return requestDelete(this.getParams());
  }

  get() {
    return requestGet(this.getParams());
  }

  patch() {
    return requestPatch(this.getParams());
  }

  post() {
    return requestPost(this.getParams());
  }

  put() {
    return requestPut(this.getParams());
  }

  multipart() {
    return requestMultipart(this.getParams());
  }
}

module.exports = { HttpRequest };
