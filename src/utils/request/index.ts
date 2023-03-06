import axios, { AxiosResponse } from 'axios';
import { BASE_URL, CURRENCY_BASE_URL, CURRENCY_AUTH_TOKEN } from '../constants';

/**
 *
 */
const mainAxios = axios.create({
  baseURL: BASE_URL,
});

const currencyAxios = axios.create({
  baseURL: CURRENCY_BASE_URL,
  headers: {
    Authorization: CURRENCY_AUTH_TOKEN,
  },
});

/**
 *
 * @param response
 * @returns
 */
const responseBody = (response: AxiosResponse) => response.data;

/**
 *
 * @param response
 * @returns
 */
const currencyResponseBody = (response: AxiosResponse) => response.data;

/**
 *
 */
export const request = {
  get: (url: string) => mainAxios.get(url).then(responseBody),
  post: (url: string, body: {}) => mainAxios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => mainAxios.put(url, body).then(responseBody),
  delete: (url: string) => mainAxios.delete(url).then(responseBody),
};

export const currencyRequest = {
  get: (url: string) => currencyAxios.get(url).then(currencyResponseBody),
};
