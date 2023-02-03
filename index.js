// 'use strict'
//
// // const user = {
// //   name: 'Sasha',
// //   getName: ()=>{
// //     alert(`Hello ${user.name}`)
// //   }
// // }
// // user.getName()
//
// // const promise1 = axios.get('https://www.google.com')
// // promise1.then((data)=> {
// //   console.log(data.code)
// // })
//
// const promise1 = axios.get('https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=Dd0mH6eAQEeNaevfZR7v27f0uCeCoNkQQym3uCQj')
// promise1
//   .then((data)=> {
//     console.log(data)
//   })
//
//
// //pending
// const promise = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US')
// promise
//   .then((data) => {
//     //resolved
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error(error.message)
//     console.warn(error.message)
//   })
//   // .finally(()=>{
//   //   console.log('finish')
//   // })
//
// const allPromise = Promise.all([promise, promise1])
// allPromise
//   .then((results)=>{
//     const muv = results[1]
//     const nasa = results[0]
//   console.log(muv.status, nasa.status)
// })
//   .catch(()=> {
//     console.log('initialization falled. Try later')
//   })
//
// const allSettledPromise = Promise.allSettled([promise, promise1])
// allSettledPromise
// .then((result)=> {
//   console.log(result)
// })