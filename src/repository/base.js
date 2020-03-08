// import axios from 'axios';
// axios.baseURL = 'http://127.0.0.1:4000';
// /*
//  * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
//  */
// axios.interceptors.request.use(
//   config => {
//     let token = localStorage.getItem('token');

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },

//   error => {
//     return Promise.reject(error);
//   }
// );
// export default axios;
