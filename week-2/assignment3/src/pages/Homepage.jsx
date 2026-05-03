import Layout from '../components/layout/Layout'
import { useState, useEffect } from 'react'
import Searchbar from '../components/home/searchbar/Searchbar'
import SearchResults from '../components/home/searchResult/SearchResult'
import MovieGrid from '../components/movie/moviegrid/MovieGrid'

const Homepage = () => {


  const [search, setSearch] = useState("")
  const [searchResponse, setSearchResponse] = useState([])
  // const [trending, setTrending] = useState([])
  const [popular, setPopular] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY


  useEffect(() => {
    async function fetchPopularMoviesList() {
      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
        }
      };

      setIsLoading(true)

      try {
        const res = await fetch(url, options)
        if (!res.ok) throw new Error("Something went wrong. Please try again.")

        const data = await res.json()
        if (!data) throw new Error("Error in Data.")

        const popularMoviesResult = data.results

        const popularMovies = popularMoviesResult.slice(0, 4)
        setPopular(() => [...popularMovies])

      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPopularMoviesList()

  }, [])

  async function fetchMoviesBySearch() {
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=1&include_adult=false`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
      }
    }
    setIsLoading(true)

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Something went wrong. Please try again.")
      const data = await response.json()
      if (!data) throw new Error("Error in data")
      const searchedData = data.results.slice(0, 4)
      setSearchResponse([...searchedData])
      // console.log(data)
    }
    catch (error) {
      console.log(error.message)
      setError(error.message)
    }
    finally {
      setIsLoading(false)
    }
  };


  return (
    <>
      <Searchbar search={search} setSearch={setSearch} fetchMoviesBySearch={fetchMoviesBySearch} />

      {error && (
        <div className="status-message error">
          <p>{error}</p>
        </div>
      )}
      {isLoading ? (
        <div className="status-message loading">
          <p>Fetching movies...</p>
        </div>
      ) : (
        <>
          <SearchResults
            query={search}
            results={searchResponse || []}
          />
          <MovieGrid
            title="What's Popular"
            movies={popular}
          />
        </>
      )}
    </>
  )
}

export default Homepage