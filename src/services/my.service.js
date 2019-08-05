import axios from 'axios'
import { links } from '../config'

export function doSearch() {
  return new Promise((resolve, reject) {
    if (true) {
      resolve();
    }
    else {
      reject();
    }
  })
}

export function doSearchApi() {
  return new Promise((resolve, reject) {
    axios.get(links.SEARCH)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
