import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI('mahasiswa?_sort=id&_order=desc');

const postNewsBlog = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);

const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}
export default API;
// import Post from "../component/Blogpost/Post";

// const domainPath = 'http://localhost:3001';
// const GetAPI = (path) => {
//   const promise = new Promise((resolve, reject) => {
//     fetch(`${domainPath}/${path}`)
//       .then(response => response.json())
//       .then(
//         result => {
//           resolve(result);
//         },
//         (err) => {
//           reject(err);
        
//         })
//   })
//   return promise;
// }
// const PostAPI = (path, data) => {
//   const promise = new Promise((resolve, reject) => {
//     fetch(`${domainPath}/${path}`, {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then(
//       result => {
//         resolve(result);
//       },
//       (err) => {
//         reject(err);
//       })
//   })
//   return promise;
// }
// const DeleteAPI = (path, data) => {
//   const promise = new Promise((resolve, reject) => {
//     fetch(`${domainPath}/${path}/${data}`, { method: 'DELETE' })
//     .then((result) => {
//         resolve(result);
//       }, (err) => {
//         reject(err);
//       })
//   })
// }

// const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
// const postNewsBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim);
// const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus)

// const API = { getNewsBlog, postNewsBlog, deleteNewsBlog };

// export default API;
