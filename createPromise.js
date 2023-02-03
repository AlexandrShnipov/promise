'use strict'

// const getNumber = () => {
//   return Math.random()
// }
// const a = getNumber()
// const b = getNumber()
// console.log(a)
// console.log(b)

// const getNumber = () => {
//   return Promise.resolve(Math.random())
// }
// getNumber().then((n)=> console.log(n))
// getNumber().then((n)=> console.log(n))

// async function getNumber () {
//   const num = await Promise.resolve(Math.random())
//   console.log(num)
// }
//
// console.log(getNumber())

// const getNumber = () => {
//   return new Promise((resolve, rejected)=> {
//     resolve(Math.random())
//    // reject(()=> (console.log('error')))
//   })
// }
//
// getNumber()
//   .then((n)=> console.log(n))
//   .catch((error)=>console.warn(error.message))

// const getNumber = () => {
//   const promise = new Promise((resolve, rejected) => {
//     //rejected('some error')
//     setTimeout(() => {
//       resolve(Math.random())
//     }, 2000)
//   })
//   return promise
// }
//
//
// getNumber().then((n) => console.log(n))

/////////////////////// localstorage////////////////////////
// const repo = {
//   save(data) {
//     try {
//       localStorage.setItem('some', JSON.stringify(data))
//     } catch (error) {
//       return false
//     }
//     return true
//   },
//   read(){
//     const data = localStorage.getItem('some')
//     if(!data){
//       return null
//     } else {
//       return JSON.parse(data)
//     }
//   },
//   saveAsync(data) {
//     const promise = new Promise((resolve, reject) => {
//       try {
//         localStorage.setItem('some', JSON.stringify(data))
//         resolve()
//       } catch (error) {
//         reject(error)
//       }
//     })
//     return promise
//   },
//   readAsync() {
//     return new Promise(((resolve, reject) => {
//       const data = localStorage.getItem('some')
//       if (!data) {
//         resolve(null)
//       } else {
//         resolve(JSON.parse(data))
//       }
//     }))
//   }
// }
/////////////////    no async ///////////////////////////
// const res = repo.save({student: 'Sasha'})
// if (res) {
//   console.log('saved')
// } else {
//   console.warn('unsaved')
// }
//
// const data = repo.read()
// console.log(data)


////////////// async ///////////////////////

// repo.saveAsync({student: 'Sasha'})
//   .then(() => console.log('saved'))
//   .catch(() => console.warn('unsaved'))



/////////////////////    await   //////////////////////

// const resAwait = async () => {
//   await repo.saveAsync({student: 'Sasha'})
//   console.log('saved await')
//
//   const data = await repo.readAsync()
//   console.log(data)
// }
// resAwait()

///////////// count ///////////////

// const wait = (ms)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=> {
//       resolve()
//     }, ms)
//   })
// }
//
// async function count (){
//   await wait(1000)
//   console.log(1)
//   await wait(1000)
//   console.log(2)
//   await wait(1000)
//   console.log(3)
// }
// count()
