import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://reqres.in/api/'
})

export const get = () => {
  Api.get('');
}

export const post = <T>(url: string, data: T): Promise<any> => {
  return new Promise((resolve, reject) => {
    Api.post(url, data)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error);
      })
  })
}
