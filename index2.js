//'use strict'

// const resolvePromise = Promise.resolve([{res: 'ok'}])
// resolvePromise
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.warn(error)
//   })
//
// const rejectedPromise = Promise.reject({message: 'some error'})
// rejectedPromise
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((error) => {
//     console.warn(error)
//   })

//фейковый результат на запрос

// const usersAPI = {
//   getUsers() {
//     return Promise.resolve([{name: 'sasha'}, {name: 'dasha'}]) ///axios когда будет бекенд
//   }
// }
//
// const fakeUsers = usersAPI.getUsers()
// fakeUsers
//   .then((data) => {
//     console.log(data)
//   })