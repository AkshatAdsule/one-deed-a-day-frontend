import axios from 'axios';
const api_url = 'http://localhost:2000';

export interface LoginInterface {
  user: { username: string; password: string };
}
export function login(
  loginInterface: LoginInterface,
  onResponse: (status: number) => void,
): void {
  axios
    .post(api_url + '/login', loginInterface)
    .then((res) => {
      onResponse(res.status);
    })
    .catch((e) => {
      console.log(e);
      onResponse(500);
    });
}
