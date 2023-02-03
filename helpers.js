'use strict'

const axios = {
  fake(url, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let responseData = {
          text: `${url} love you`
        }
        if (url.indexOf('Institute') > 0) {
          responseData = {
            requestedCount: data.count,
            message: 'wi will prepare student for you'
          }
        } else if (url.indexOf('google') > 0) {
          responseData = {
            vacancies: 25
          }
        } else if (url.indexOf('microsoft') > 0) {
          responseData = {
            vacancies: 36
          }
        }
        resolve({
          request: {},
          status: 200,
          headers: {},
          config: {},
          data: responseData
        })
      }, randomFromInterval(400, 8000))
    })
  }
}

const findUserInDB = (id) => {
  const users = [
    {id: 1, name: 'Sasha', friend: 7},
    {id: 2, name: 'Dasha', friend: 3},
    {id: 3, name: 'Pasha', friend: null}
  ]
  return new Promise((resolve, reject) => {
    const user = users.find(u => u.id === id)
    setTimeout(() => {
      if (!user) {
        reject('user not found')
      } else {
        resolve(user)
      }
    }, randomFromInterval(50, 1000))
  })
}

///// example random   /////////////////
const randomFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// findUserInDB(1)
//   .then((user)=>console.log(user.name))
