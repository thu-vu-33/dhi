import Axios from "axios";

const defaultAxios = Axios.create({
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer BQCL6105hD4uzUGRXRFXS7Uqca7g6Wd5OyJIUQiN_1CCh5J-08IfK0P6jeEVLDx6_O7yx0F6X-L2QIcP8a6SMATlYx3KLQk3Beg4M_OY2ZoQXGInIm8",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
