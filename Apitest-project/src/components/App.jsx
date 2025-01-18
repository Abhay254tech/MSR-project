import '../App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json()
      setData(data)
      console.log(data)
    }
    fetchData();
  }, [])

  return (
    <>
      <h1>hello world</h1>
      <p>{data}</p>
    </>
  )
}

export default App
