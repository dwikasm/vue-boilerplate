import Http from './http.class';
import { endpoints } from '../config';

// create http instance with custom config
const myHttp = new Http({
  headers: { 'Content-Type': 'application/json' },
});

export function doSearch() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}

export function doSearchApi() {
  return new Promise((resolve, reject) => {
    myHttp.get(endpoints.SEARCH)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
