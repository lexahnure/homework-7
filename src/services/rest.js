const BASE_URL = 'http://localhost:8086/';

const request = (url, options = {}, data) => {
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
  return fetch(`${BASE_URL}${url}`, settings)
    .then(res => res.json())
    .then((data) => {
      if (data.error) {
        throw data.error;
      }
      return data;
    });
};

const rest = {
  get(url) {
    return request(url);
  },
  post(url, data) {
    return request(url, { method: 'POST' }, data);
  },
  put(url, data) {
    return request(url, { method: 'PUT' }, data);
  },
  delete(url) {
    return request(url, { method: 'DELETE' });
  }
};

export { request, rest };
