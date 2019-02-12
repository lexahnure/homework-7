import store from '../store';
import { setError } from '../store/status';

const BASE_URL = 'http://localhost:8086/';

const request = (url, options = {}, data) => {
  const isUserChecking = url.includes('checkUser');

  const settings = {
    credentials: 'include',
    ...options,
  };
  if (data) {
    settings.body = JSON.stringify(data);
    settings.headers = {
      'Content-type': 'application/json; charset=utf-8'
    };
  }

  if (options.body) {
    settings.headers = {
      'Content-type': 'multipart/form-data'
    };
  }

  if (data) {
    settings.body = JSON.stringify(data);
    settings.headers = {
      'Content-type': 'application/json; charset=utf-8'
    };
  }

  const req = fetch(`${BASE_URL}${url}`, settings)
    .then(res => res.json())
    .then((data) => {
      if (data.error) {
        throw data.error;
      }
      return data;
    });

  req.catch(error => !isUserChecking && store.dispatch(setError(String(error))));
  // req.catch(err => store.dispatch(setError(err)));
  return req;
};

const rest = {
  get(url) {
    return request(url);
  },
  post(url, data) {
    return request(url, { method: 'POST' }, data);
  },
  postImg(url, data) {
    return request(url, { method: 'POST', body: data });
  },
  put(url, data) {
    return request(url, { method: 'PUT' }, data);
  },
  delete(url) {
    return request(url, { method: 'DELETE' });
  }
};

export { request, rest };
