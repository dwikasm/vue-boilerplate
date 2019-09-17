import axios from 'axios';

export default class Http {
  constructor(config = {}) {
    this.instance = axios.create({
      // defaults
      timeout: 10000,
      // merge custom config
      ...config,
    });

    return this.instance;
  }

  get(url, config = {}) {
    return this.instance.get(url, config);
  }

  post(url, data = {}, config = {}) {
    return this.instance.post(url, data, config);
  }
}
