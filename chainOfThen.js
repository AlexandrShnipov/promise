'use strict'
const getCountMovies = () => {
  return (
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US')
      .then(res => res.data)
      .then(data => data.results)
  )
}
getCountMovies()
  .then(results => console.log(results.map(el => (el.title))))

async function getName() {
  const movies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US')
  //console.log(movies.data.results)
  const titles = movies.data.results.map(el=> el.original_title)
  console.log(titles)
  }

getName()
